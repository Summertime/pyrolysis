// Generated from any-async.js using ./scripts/generate-sync
export default function any(iterable) {
    for (const item of iterable) {
        if (item) {
            return true;
        }
    }
    return false;
}
