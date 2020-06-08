import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import HttpService from "../HttpService";

jest.mock("axios");

describe("services > http > HttpService", () => {
  const getMockAxiosInstance = (): AxiosInstance =>
    (({
      get: jest.fn(() => Promise.resolve()),
      post: jest.fn(() => Promise.resolve()),
      put: jest.fn(() => Promise.resolve()),
      delete: jest.fn(() => Promise.resolve()),
      patch: jest.fn(() => Promise.resolve())
    } as unknown) as AxiosInstance);

  let mockAxiosInstance: AxiosInstance | undefined = undefined;

  const getClass = () => {
    mockAxiosInstance = getMockAxiosInstance();
    return new HttpService(mockAxiosInstance);
  };

  const getAxiosResponse = (data?: any) => ({
    data,
    status: 200,
    statusText: "OK",
    config: {},
    headers: {}
  });

  const getAxiosError = (message?: string): AxiosError<any> => ({
    config: {},
    isAxiosError: true,
    message: message || "",
    name: "error",
    toJSON: () => ({})
  });

  test("Constructor should assign axios instance to this.axios", () => {
    const genericHttpRequest = getClass();
    expect(genericHttpRequest.axios).toBe(mockAxiosInstance);
  });

  describe("success", () => {
    test("success method should return the data from the response", () => {
      const genericHttpRequest = getClass();
      const response = getAxiosResponse("data");
      const result = genericHttpRequest.success(response);
      expect(result).toBe(response.data);
    });

    test("success, response not having data, should return response", () => {
      const genericHttpRequest = getClass();
      const response = getAxiosResponse();
      const result = genericHttpRequest.success(response);
      expect(result).toBe(response);
    });

    test("success, response = false, should return false", () => {
      const genericHttpRequest = getClass();
      const response = getAxiosResponse(false);
      const result = genericHttpRequest.success(response);
      expect(result).toBe(false);
    });

    test("success, response = '', should return ''", () => {
      const genericHttpRequest = getClass();
      const response = getAxiosResponse("");
      const result = genericHttpRequest.success(response);
      expect(result).toBe("");
    });
  });

  describe("fail", () => {
    test("method should return the same error input value", async () => {
      const genericHttpRequest = getClass();
      const error = getAxiosError("error");

      try {
        await genericHttpRequest.fail(error);
      } catch (resultError) {
        expect(resultError).toBe(error);
      }
    });
  });

  const testSuccessAndFail = (method: string) => {
    test(`${method} method, with success response should call this.success with response`, async () => {
      const genericHttpRequest = getClass();
      const RESPONSE = "response";
      (mockAxiosInstance as any)[method].mockReturnValue(Promise.resolve(RESPONSE));
      const successSpy = jest.spyOn(genericHttpRequest, "success");

      await (genericHttpRequest as any)[method]("url");
      expect(successSpy).toBeCalledWith(RESPONSE);
    });

    test(`${method} method, with failed response, should call fail method with error`, async () => {
      const genericHttpRequest = getClass();
      const ERROR = "error";
      (mockAxiosInstance as any)[method].mockReturnValue(Promise.reject(ERROR));
      const failSpy = jest.spyOn(genericHttpRequest, "fail");

      try {
        await (genericHttpRequest as any)[method]("url");
      } catch (error) {
        expect(failSpy).toBeCalledWith(error);
      }
    });
  };

  describe("get", () => {
    test("get method should call axios.get method with url + (object with params and rest of configuration)", () => {
      const genericHttpRequest = getClass();
      const URL = "url-get";
      const PARAMS = { p: "param" };
      const CONFIG = { c: "config" };

      genericHttpRequest.get(URL, PARAMS, CONFIG);
      expect(mockAxiosInstance && mockAxiosInstance.get).toBeCalledWith(URL, {
        params: PARAMS,
        ...CONFIG
      });
    });

    testSuccessAndFail("get");
  });

  describe("post", () => {
    test("post method should call axios.post method with url + data, configuration", () => {
      const genericHttpRequest = getClass();
      const URL = "url-post";
      const DATA = { p: "param" };
      const CONFIG = { c: "config" };

      genericHttpRequest.post(URL, DATA, CONFIG);
      expect(mockAxiosInstance && mockAxiosInstance.post).toBeCalledWith(URL, DATA, CONFIG);
    });

    testSuccessAndFail("post");
  });

  describe("put", () => {
    test("put method should call axios.put method with url + data, configuration", () => {
      const genericHttpRequest = getClass();
      const URL = "url-put";
      const DATA = { p: "param" };
      const CONFIG = { c: "config" };

      genericHttpRequest.put(URL, DATA, CONFIG);
      expect(mockAxiosInstance && mockAxiosInstance.put).toBeCalledWith(URL, DATA, CONFIG);
    });

    testSuccessAndFail("put");
  });

  describe("delete", () => {
    test("delete method should call axios.delete method with url + (object with params and rest of configuration)", () => {
      const genericHttpRequest = getClass();
      const URL = "url-delete";
      const PARAMS = { p: "param" };
      const CONFIG = { c: "config" };

      genericHttpRequest.delete(URL, PARAMS, CONFIG);
      expect(mockAxiosInstance && mockAxiosInstance.delete).toBeCalledWith(URL, {
        params: PARAMS,
        ...CONFIG
      });
    });

    testSuccessAndFail("delete");
  });

  describe("patch", () => {
    test("patch method should call axios.post method with url + data, configuration", () => {
      const genericHttpRequest = getClass();
      const URL = "url-post";
      const DATA = { p: "param" };
      const CONFIG = { c: "config" };

      genericHttpRequest.patch(URL, DATA, CONFIG);
      expect(mockAxiosInstance && mockAxiosInstance.patch).toBeCalledWith(URL, DATA, CONFIG);
    });

    testSuccessAndFail("patch");
  });
});
