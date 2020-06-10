import { Thunk } from "redux-testkit";
import { mocked } from "ts-jest";
import { SET_SUBMITTING_ID } from "../types";
import { setSubmittingIdAction, toggleFavoriteStatus } from "../actions";
import { dataLoadedAction } from "../../../list/_duck/actions";
import http from "../../../../../../helpers/http";

jest.mock("../../../../../../helpers/http");
const mockedHttp = mocked(http, true);

describe("components > app > shop > wishlist > actions", () => {
  beforeEach(() => {
    mockedHttp.patch.mockReturnValue(Promise.resolve());
  });

  afterEach(() => {
    mockedHttp.patch.mockReset();
  });

  describe("toggleFavoriteStatus()", () => {
    test("should make patch request with toggled fav value, then update items", async () => {
      const dispatches = await Thunk(toggleFavoriteStatus).withState(FAKE_STATE).execute(ITEM1_ID);

      expect(mockedHttp.patch).toHaveBeenCalledWith(`grocery/${ITEM1_ID}`, { favorite: 1 });
      expect(dispatches).toHaveLength(3);
      expect(dispatches[0].getAction()).toEqual(setSubmittingIdAction(ITEM1_ID));
      expect(dispatches[2].getAction()).toEqual(setSubmittingIdAction(null))
      expect(dispatches[1].getAction()).toEqual(
        dataLoadedAction([ { ...FAKE_ITEMS[0], favorite: 1 }, FAKE_ITEMS[1] ])
      );
    });

    test("when error should not make dispatch", async () => {
      mockedHttp.patch.mockReturnValue(Promise.reject());
      const dispatches = await Thunk(toggleFavoriteStatus).withState(FAKE_STATE).execute(ITEM1_ID);

      expect(dispatches).toHaveLength(2);
      expect(dispatches[0].getAction()).toEqual(setSubmittingIdAction(ITEM1_ID));
      expect(dispatches[1].getAction()).toEqual(setSubmittingIdAction(null))
    });

    test("when not found item should make nothing", async () => {
      const dispatches = await Thunk(toggleFavoriteStatus).withState(FAKE_STATE).execute("no-id");

      expect(mockedHttp.patch).not.toHaveBeenCalled();
      expect(dispatches).toHaveLength(0);
    });
  });

  test("setSubmittingIdAction() should return action with type SET_SUBMITTING_ID and submittingId: some-value", () => {
    const fakeValue = "fake value";

    const action = setSubmittingIdAction(fakeValue);

    expect(action.type).toBe(SET_SUBMITTING_ID);
    expect(action.submittingId).toBe(fakeValue);
  });

  const ITEM1_ID = "id-1";
  const ITEM2_ID = "id-2";

  const FAKE_ITEMS = [
    {
      id: ITEM1_ID,
      image_url: "http://test.url.1",
      stock: 8,
      productName: "Product 1",
      price: 4,
      productDescription: "Desc 1",
      favorite: 0
    },

    {
      id: ITEM2_ID,
      image_url: "http://test.url.2",
      stock: 4,
      productName: "Product 2",
      price: 6,
      productDescription: "Desc 2",
      favorite: 1
    }
  ];

  const FAKE_STATE = {
    shop: {
      list: {
        data: FAKE_ITEMS
      }
    }
  };
});
