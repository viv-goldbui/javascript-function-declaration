const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const executableName = getExecutableName(channel, appName);