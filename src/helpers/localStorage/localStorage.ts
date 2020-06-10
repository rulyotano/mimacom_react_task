import { isEmpty } from "lodash";

export function save<T>(key: string, value: T) {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

export function load<T>(key: string): T | null {
  if (key) {
    const item = localStorage.getItem(key);
    if (!isEmpty(item) && item && item.trim() !== "") {
      return JSON.parse(item) as T;
    }
  }
  return null;
}

export function remove(key: string) {
  if (key) localStorage.removeItem(key);
}

export function clear() {
  localStorage.clear();
}
