/**
 * Proxies calls to instead construct the class
 * @example
 * ```ts
 * @callConstruct
 * class X {construct(){}}
 * X();
 * ```
 */
export default function callConstruct(target, _context) {
  return new Proxy(target, {
    apply: (target, _, args) => new target(...args),
  });
}
