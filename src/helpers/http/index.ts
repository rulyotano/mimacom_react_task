import axios from "axios";
import HttpService from "./HttpService";
import settings from "../../settings.json";

const createAxiosInstance = (baseUrl: string) =>
  axios.create({
    baseURL: baseUrl
  });

const defaultHttpService = new HttpService(createAxiosInstance(settings.api));

export default defaultHttpService;
