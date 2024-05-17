const repositoryRootPath = path.resolve(__dirname, '..');
const buildOutputPath = path.join(repositoryRootPath, 'out');
const removeDuplicates = (arr) => [...new Set(arr)];