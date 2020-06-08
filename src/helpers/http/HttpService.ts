import { AxiosInstance, AxiosResponse, AxiosError } from "axios";

export default class HttpService {
  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  axios: AxiosInstance;

  get(uri: string, params: any, config = {}) {
    return this.axios.get(uri, { params, ...config }).then(this.success, this.fail);
  }

  post(uri: string, data: any, config = {}) {
    return this.axios.post(uri, data, { ...config }).then(this.success, this.fail);
  }

  put(uri: string, data: any, config = {}) {
    return this.axios.put(uri, data, { ...config }).then(this.success, this.fail);
  }
  
  patch(uri: string, data: any, config = {}) {
    return this.axios.patch(uri, data, { ...config }).then(this.success, this.fail);
  }

  delete(uri: string, params: any, config = {}) {
    return this.axios.delete(uri, { params, ...config }).then(this.success, this.fail);
  }

  success(response: AxiosResponse) {
    if (response && response.data !== undefined) return response.data;
    return response;
  }

  fail(error: AxiosError) {
    // do basic things in errors
    return Promise.reject(error);
  }
}
