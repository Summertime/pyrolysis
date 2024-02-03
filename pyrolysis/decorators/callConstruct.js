export default function callConstruct(target) {
    return new Proxy(target, {
        apply: (target, _, args) => new target(...args),
    });
}
