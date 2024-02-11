// Generated from all-async.js using ./scripts/generate-sync
export default function all(iterable) {
    for (const item of iterable) {
        if (!item) {
            return false;
        }
    }
    return true;
}
