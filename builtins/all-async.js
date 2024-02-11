export default async function all(iterable) {
    for await (const item of iterable) {
        if (!item) {
            return false;
        }
    }
    return true;
}
