const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const resultingPromises = urls.map((url) => makHttpRequest(url));