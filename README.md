# Pyrolysis

Python-like utilities for JS-like programs.

## Example

```ts
import { all } from "jsr:@summer/builtins";
console.log(await all(["a", "b", "c"]));
// true
```

## Contributing

Any help would be greatly appreciated, either in filling out documentation, or
adding more utilities.

## Licensing

The `toolz` directory references the API, code, documentation, algorithms,
others of the [`toolz` Python library](https://toolz.readthedocs.io/), which is
licensed under a
[BSD 3-Clause license](https://github.com/pytoolz/toolz/blob/master/LICENSE.txt).
The text of the license is duplicated to the `toolz.LICENSE` file.

The `builtins`, `itertools`, and `functools` directories references the API,
code, documentation, algorithms, others of [Python](https://www.python.org/),
which is licensed under the
[PSF License Agreement](https://docs.python.org/3/license.html). The text of the
license is duplicated to the `python.LICENSE` file.

Everything else (Original code, others) is licensed under the
[Unlicense](https://unlicense.org/). The text of the license is duplicated to
the `UNLICENSE` file.
