const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);