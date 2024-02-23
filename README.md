# Pyrolysis

Python-like utilities for JS-like programs.


## Usage

Currently Deno's third party modules service is the preferred way of using these utilities:

```js
import all from 'https://deno.land/x/pyrolysis/builtins/all.js';
console.log(all(['a','b','c']))
# true
```


## Contributing

Any help would be greatly appreciated, either in filling out documentation, or adding more utilities.


## Licensing

The `toolz` directory references the API, code, documentation, algorithms, others of the [`toolz` Python library](https://toolz.readthedocs.io/), which is licensed under a [BSD 3-Clause license](https://github.com/pytoolz/toolz/blob/master/LICENSE.txt). The text of the license is duplicated to the `toolz.LICENSE` file.

The `builtins`, `itertools`, and `functools` directories references the API, code, documentation, algorithms, others of [Python](https://www.python.org/), which is licensed under the [PSF License Agreement](https://docs.python.org/3/license.html). The text of the license is duplicated to the `python.LICENSE` file.

Everything else (Original code, others) is licensed under the [Unlicense](https://unlicense.org/). The text of the license is duplicated to the `UNLICENSE` file.


## Progress

### `builtins`

- [ ] `abs()`
- [x] `all()`
- [x] `any()`
- [ ] `enumerate()`
- [ ] `filter()`
- [ ] `iter()`
- [ ] `len()`
- [ ] `map()`
- [ ] `max()`
- [ ] `min()`
- [x] `range()`
- [ ] `reversed()`
- [ ] `sorted()`
- [ ] `zip()`

Low priority / Not applicable: `aiter()`, `anext()`, `ascii()`, `bin()`, `bool()`, `breakpoint()`, `bytearray()`, `bytes()`, `callable()`, `chr()`, `classmethod()`, `compile()`, `complex()`, `delattr()`, `dict()`, `dir()`, `divmod()`, `eval()`, `exec()`, `float()`, `format()`, `frozenset()`, `getattr()`, `globals()`, `hasattr()`, `hash()`, `help()`, `hex()`, `id()`, `__import__()`, `input()`, `int()`, `isinstance()`, `issubclass()`, `list()`, `locals()`, `memoryview()`, `next()`, `object()`, `oct()`, `open()`, `ord()`, `pow()`, `print()`, `property()`, `repr()`, `round()`, `set()`, `setattr()`, `slice()`, `staticmethod()`, `str()`, `sum()`, `super()`, `tuple()`, `type()`, `vars()`


### `itertools`

- [x] `count()`
- [ ] `cycle()`
- [ ] `repeat()`
- [ ] `accumulate()`
- [ ] `batched()`
- [ ] `chain()`
- [ ] `chain.from_iterable()`
- [ ] `compress()`
- [ ] `dropwhile()`
- [ ] `filterfalse()`
- [ ] `groupby()`
- [ ] `islice()`
- [ ] `pairwise()`
- [ ] `starmap()`
- [ ] `takewhile()`
- [ ] `tee()`
- [ ] `zip_longest()`
- [ ] `product()`
- [ ] `permutations()`
- [ ] `combinations()`
- [ ] `combinations_with_replacement()`
