const resultingPromises = urls.map((url) => makHttpRequest(url));
const randomString = () => Math.random().toString(36).slice(2);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());