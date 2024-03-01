import callConstruct from "../pyrolysis/decorators/callConstruct.js";

export async function allAsync<T>(
  iterable: AsyncIterable<T>,
): Promise<boolean> {
  for await (const item of iterable) {
    if (!item) {
      return false;
    }
  }
  return true;
}

export function all<T>(iterable: Iterable<T>): boolean {
  for (const item of iterable) {
    if (!item) {
      return false;
    }
  }
  return true;
}

export async function anyAsync<T>(
  iterable: AsyncIterable<T>,
): Promise<boolean> {
  for await (const item of iterable) {
    if (item) {
      return true;
    }
  }
  return false;
}

export function any<T>(iterable: Iterable<T>): boolean {
  for (const item of iterable) {
    if (item) {
      return true;
    }
  }
  return false;
}

@callConstruct
export class range<T extends number | bigint> {
  #start;
  #stop;
  #step;
  static [Symbol.isConcatSpreadable] = true;
  constructor(...args: T[]) {
    const $1 = typeof args[0] === "bigint" ? 1n : 1;
    const $0 = typeof args[0] === "bigint" ? 0n : 0;
    switch (args.length) {
      case 3:
        this.#start = args[0];
        this.#stop = args[1];
        this.#step = args[2];
        break;
      case 2:
        this.#start = args[0];
        this.#stop = args[1];
        this.#step = $1;
        break;
      case 1:
        this.#start = $0;
        this.#stop = args[0];
        this.#step = $1;
        break;
      case 0:
        throw new TypeError(
          `range expected at least 1 argument, got ${args.length}`,
        );
      default:
        throw new TypeError(
          `range expected at most 3 arguments, got ${args.length}`,
        );
    }
    if (
      !((Number.isInteger(this.#start) &&
        Number.isInteger(this.#stop) &&
        Number.isInteger(this.#step)) ||
        (typeof this.#start === "bigint" &&
          typeof this.#stop === "bigint" &&
          typeof this.#step === "bigint"))
    ) {
      throw new TypeError(
        `range expects all arguments to be either all integers or all BigInt`,
      );
    }
  }

  *[Symbol.iterator](): Iterator<T> {
    // Python iterates to length instead of to stop
    let state: any = this.#start;
    const step = this.#step;
    for (let x = this.length; x > 0; x--) {
      yield state;
      state += <any> step;
    }
  }

  [Symbol.for("Deno.customInspect")](): string {
    const params = [this.#start, this.#stop, this.#step]
      .map((a) => Deno.inspect(a));
    return `range(${params.join(", ")})`;
  }
  get start(): T {
    return <T> this.#start;
  }
  get stop(): T {
    return <T> this.#stop;
  }
  get step(): T {
    return <T> this.#step;
  }
  get length(): T {
    const $1 = typeof this.#stop === "bigint" ? 1n : 1;
    const $0 = typeof this.#stop === "bigint" ? 0n : 0;
    let result;
    // I hate typescript, someone else can fix it
    if (this.#step > $0 && this.#start < this.#stop) {
      result = <any> $1 +
        (<any> this.#stop - <any> $1 - <any> this.#start) / <any> this.#step;
    } else if (this.#step < $0 && this.#start > this.#stop) {
      result = <any> $1 +
        (<any> this.#start - <any> $1 - <any> this.#stop) / -<any> this.#step;
    } else {
      result = $0;
    }
    return typeof this.#stop === "bigint" ? result : Math.trunc(result);
  }
}
