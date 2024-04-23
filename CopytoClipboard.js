const updated = numbers.filter(element => element > 6);
const intermediateAppPath = path.join(buildOutputPath, 'app');
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());