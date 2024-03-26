const unset = Symbol("unset"); // Python checks args length, emulating
export async function reduce<T>(
  func: (a: T, b: T) => T,
  iterable: AsyncIterable<T>,
  initializer: T | typeof unset = unset,
): Promise<T> {
  let value = initializer;
  for await (const item of iterable) {
    if (value === unset) {
      value = item;
    } else {
      value = await func(value, item);
    }
  }
  if (value === unset) {
    throw new TypeError("reduce() of empty iterable with no initial value");
  }
  return value;
}
