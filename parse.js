const isTabInView = () => !document.hidden;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};