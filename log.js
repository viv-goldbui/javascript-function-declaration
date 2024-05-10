console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");