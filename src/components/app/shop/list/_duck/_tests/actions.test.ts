import { Thunk } from "redux-testkit";
import { mocked } from "ts-jest";
import { DATA_LOADED, SET_IS_LOADING } from "../types";
import { dataLoadedAction, setIsLoadingAction, load } from "../actions";
import { SHOP_URL } from "../../../_duck/types";
import { Product } from "../../../../../../helpers/types";
import http from "../../../../../../helpers/http";

jest.mock("../../../../../../helpers/http");
const mockedHttp = mocked(http, true);

describe("components > app > shop > list > actions", () => {
  beforeEach(() => {
    mockedHttp.get.mockReturnValue(Promise.resolve(FAKE_RESPONSE));
  });

  afterEach(() => {
    mockedHttp.get.mockReset();
  });

  describe("load()", () => {
    test("when all ok should set isLoading, make one http get request and then dispatch data is loaded", async () => {
      const dispatches = await Thunk(load).execute();

      expect(mockedHttp.get).toHaveBeenCalledWith(SHOP_URL, {});
      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setIsLoadingAction(true));
      expect(dispatches[1].getAction()).toEqual(dataLoadedAction(FAKE_RESPONSE));
    });

    test("when favorite argument should make request with favorite = 1", async () => {
      const dispatches = await Thunk(load).execute(true);

      expect(mockedHttp.get).toHaveBeenCalledWith(SHOP_URL, { favorite: 1 });
    });

    test("on error should only set and unset is loading", async () => {
      mockedHttp.get.mockReturnValue(Promise.reject());

      const dispatches = await Thunk(load).execute();

      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setIsLoadingAction(true));
      expect(dispatches[1].getAction()).toEqual(setIsLoadingAction(false));
    });

    test("when items comes from server with 'favorite' as string, should convert it to number", async () => {
      const response = [ { ...FAKE_RESPONSE[0], favorite: "1" } ];
      mockedHttp.get.mockReturnValue(Promise.resolve(response));

      const dispatches = await Thunk(load).execute();

      expect(dispatches[1].getAction()).toEqual(
        dataLoadedAction([ { ...FAKE_RESPONSE[0], favorite: 1 } ])
      );
    });
  });

  test("dataLoadedAction() should return action with type DATA_LOADED and data", () => {
    const fakeData: Product[] = [];

    const action = dataLoadedAction(fakeData);

    expect(action.type).toBe(DATA_LOADED);
    expect(action.data).toBe(fakeData);
  });

  test("setIsLoadingAction() should return action with type SET_IS_LOADING and data", () => {
    const isLoading = true;

    const action = setIsLoadingAction(isLoading);

    expect(action.type).toBe(SET_IS_LOADING);
    expect(action.isLoading).toBe(isLoading);
  });

  const FAKE_RESPONSE = [
    {
      id: "41fd4fd9-95c7-4809-96db-a147d352fdbb",
      image_url: "https://dummyimage.com/400x400/28200e/000&text=Unbranded Metal Chair",
      stock: 8,
      productName: "Unbranded Metal Chair",
      price: 43,
      productDescription:
        "Porro tempore autem. Sunt molestias qui quod recusandae nemo quia optio. Nostrum aperiam officiis aut reprehenderit illo.",
      favorite: 2
    }
  ];
});
