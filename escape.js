const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;