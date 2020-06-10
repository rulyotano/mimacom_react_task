import { save, load, remove, clear } from "../localStorage";

describe("helpers > localStorage", () => {
  let originalStorage = global.localStorage;
  let mockedStorage = storageMock();

  beforeEach(() => {
    mockedStorage = storageMock();
    originalStorage = window.localStorage;
    Object.defineProperty(window, "localStorage", { value: mockedStorage });
  });

  afterEach(() => {
    Object.defineProperty(window, "localStorage", { value: originalStorage });
  });

  test("save should set item in the storage", () => {
    const KEY = "KEY";
    const VALUE = "TEST VALUE";
    save(KEY, VALUE);

    expect(mockedStorage.setItem).toHaveBeenCalledWith(KEY, JSON.stringify(VALUE));
  });
  
  test("load should load the item with that key form storage", () => {
    const KEY = "KEY";
    const VALUE = 33;
    save(KEY, VALUE);

    const result = load(KEY);

    expect(result).toBe(VALUE);
  });
  
  test("remove should delete key from storage", () => {
    const KEY = "KEY";
    const VALUE = 33;
    save(KEY, VALUE);

    let result = load(KEY);
    expect(result).toBe(VALUE);

    remove(KEY);

    result = load(KEY);
    expect(result).toBeNull();
  });
  
  test("clear should delete all keys from storage", () => {
    const KEY1 = "KEY1";
    const KEY2 = "KEY2";
    const VALUE1 = 33;
    const VALUE2 = 34;
    save(KEY1, VALUE1);
    save(KEY2, VALUE2);

    let result = load(KEY1);
    expect(result).toBe(VALUE1);
    
    result = load(KEY2);
    expect(result).toBe(VALUE2);

    clear();

    result = load(KEY1);
    expect(result).toBeNull();
    
    result = load(KEY2);
    expect(result).toBeNull();
  });
});

function storageMock(): Storage {
  let storage: any = {};

  return {
    setItem: jest.fn(function(key, value) {
      storage[key] = value || "";
    }),
    getItem: jest.fn(function(key) {
      return key in storage ? storage[key] : null;
    }),
    removeItem: jest.fn(function(key) {
      delete storage[key];
    }),
    get length() {
      return Object.keys(storage).length;
    },
    key: jest.fn(function(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }),
    clear: jest.fn(function() {
      storage = {};
    })
  };
}
