const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const merge = (a, b) => [...a, ...b];
const resultingPromises = urls.map((url) => makHttpRequest(url));