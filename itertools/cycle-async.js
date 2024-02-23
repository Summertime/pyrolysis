export default async function* cycle(iterator) {
    const saved = [];
    for await (const element of iterator) {
        yield element;
        saved.append(element);
    }
    while (saved.length) {
        for (const element of saved) {
            yield element;
        }
    }
}
