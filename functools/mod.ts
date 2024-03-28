const unset = Symbol("unset"); // Python checks args length, emulating
export async function reduce(
  func: (a: any, b: any) => any,
  iterable: AsyncIterable<any>,
  initializer: any,
): Promise<any> {
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
