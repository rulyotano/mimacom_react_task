FROM node:16.20.2-alpine3.18 as base
ENV NODE_ENV=development
RUN mkdir /app && chown -R node:node /app
WORKDIR /app
COPY --chown=node:node ["package.json", "yarn.lock",  "./"]
RUN yarn --frozen-lockfile --silent && yarn cache clean

FROM base as source
COPY --chown=node:node ["src", "./src"]
COPY --chown=node:node ["public", "./public"]
COPY --chown=node:node [".eslintrc.json", "tsconfig.json", "./"]

FROM source as dev
EXPOSE 3000
ENV PATH=/app/node_modules/.bin:$PATH
ENV CI=true
CMD ["yarn", "start"]

FROM dev as test
CMD yarn lint && yarn test

FROM source as build
ARG API_URL=http://localhost:3000
RUN sed -i "s+http://localhost:3000+${API_URL}+g" ./src/settings.json
RUN yarn build

FROM rulyotano/httpd-spa:v0.0.3 as prod
EXPOSE 80
USER "www-data"
COPY --from=build --chown=www-data:www-data /app/build /usr/local/apache2/htdocs/
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 CMD wget -O - http://localhost || exit 1