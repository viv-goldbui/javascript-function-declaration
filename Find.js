const scriptRootPath = path.join(repositoryRootPath, 'script');
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};