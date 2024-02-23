// Generated from cycle-async.js using ./scripts/generate-sync
export default function* cycle(iterator) {
    const saved = [];
    for (const element of iterator) {
        yield element;
        saved.append(element);
    }
    while (saved.length) {
        for (const element of saved) {
            yield element;
        }
    }
}
