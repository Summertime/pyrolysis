export { range } from "./range.ts";

export async function all<T>(iterable: AsyncIterable<T>): Promise<boolean> {
  for await (const item of iterable) {
    if (!item) {
      return false;
    }
  }
  return true;
}

export async function any<T>(iterable: AsyncIterable<T>): Promise<boolean> {
  for await (const item of iterable) {
    if (item) {
      return true;
    }
  }
  return false;
}

export async function* filter<T>(
  func: (a: T) => boolean,
  iterable: AsyncIterable<T>,
): AsyncIterable<T> {
  for await (const item of iterable) {
    if (await func(item)) {
      yield item;
    }
  }
}

export async function* map<T, U>(
  func: (a: T) => U,
  iterable: AsyncIterable<T>,
): AsyncIterable<U> {
  for await (const item of iterable) {
    yield await func(item);
  }
}
