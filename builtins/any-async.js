export default async function any(iterable) {
    for await (const item of iterable) {
        if (item) {
            return true;
        }
    }
    return false;
}
