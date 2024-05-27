export function flattenArray(arr) {
    let flattenedArray = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattenedArray.push(...flattenArray(item));
        } else if (typeof item === 'object' && item !== null) {
            flattenedArray.push(...flattenArray(Object.values(item)));
        } else if (typeof item === 'string') {
            flattenedArray.push(item);
        }
    });
    return flattenedArray;
}
