import defaultHttpService from "../index";
import settings from "../../../settings.json";

describe("src > helpers > test > index", () => {
  beforeEach(() => {});

  afterEach(() => {});

  test("axios instance must have baseUrl same as in the settings", () => {
    expect(defaultHttpService.axios.defaults.baseURL).toBe(settings.api);
  });
});
