export function* count(
  start: bigint | number = 0,
  step?: bigint | number,
): Iterable<bigint | number> {
  if (step === undefined) {
    step = typeof start === "bigint" ? 1n : 1;
  }
  let n = start;
  while (true) {
    yield n;
    n += <any> step;
  }
}

export async function* cycleAsync<T>(
  iterable: AsyncIterable<T>,
): AsyncIterable<T> {
  const saved: T[] = [];
  for await (const element of iterable) {
    yield element;
    saved.push(element);
  }
  while (saved.length) {
    for (const element of saved) {
      yield element;
    }
  }
}

export function* cycle<T>(iterator: Iterable<T>): Iterable<T> {
  const saved = [];
  for (const element of iterator) {
    yield element;
    saved.push(element);
  }
  while (saved.length) {
    for (const element of saved) {
      yield element;
    }
  }
}
