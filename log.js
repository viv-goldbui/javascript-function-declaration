const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());