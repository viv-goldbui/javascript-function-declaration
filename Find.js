const resultingPromises = urls.map((url) => makHttpRequest(url));
const added = [0, 1, 2, 3, 4].map((item) => item + 1);