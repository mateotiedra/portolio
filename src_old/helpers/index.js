const Months = {
  '01': 'janvier',
  '02': 'février',
  '03': 'mars',
  '04': 'avril',
  '05': 'mai',
  '06': 'juin',
  '07': 'juillet',
  '08': 'août',
  '09': 'septembre',
  10: 'octobre',
  11: 'novembre',
  12: 'décembre',
};

export const strMadeOf = (value, specialAllowed) => {
  return value.match('^[a-zA-Z0-9' + specialAllowed + ']*$');
};

export const randint = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const readSince = (date, withDay) => {
  date = date.split('-');
  const monthAndYear = Months[date[1]] + ' ' + date[0];
  const day = 'le ' + parseInt(date[2].substring(0, 2)) + ' ';
  return `${withDay ? day : ''}${monthAndYear}`;
};

export const sentence = (str, lowercase) => {
  if (lowercase) str = str.toLowerCase();
  //str[0] = str[0].toUpperCase();
  return str.trim().replace(/^\w/, (c) => c.toUpperCase());
};

export const capitalize = (str, lowercase) => {
  if (lowercase) str = str.toLowerCase();
  //str[0] = str[0].toUpperCase();
  return str
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

export const normalize = (str) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

export const clean = (str) => {
  return str.toLowerCase().trim().replace('  ', ' ');
};

export const shuffle = (array) => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const howManyMinutesBetween = (timestamp, currentTime) => {
  // Calculate the difference in milliseconds
  const differenceMs = currentTime - timestamp;

  // Convert milliseconds to minutes
  const minutesAgo = Math.floor(differenceMs / (1000 * 60));
  return minutesAgo > 60
    ? `${Math.floor(minutesAgo / 60)}h${minutesAgo % 60}`
    : `${minutesAgo} min`;
};

export function findListDifference(list1, list2) {
  const addedItems = list2.filter((item) => !list1.includes(item));
  const removedItems = list1.filter((item) => !list2.includes(item));
  return [addedItems, removedItems];
}

export function getRandomNumbers(n, x) {
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * (x + 1)); // Random number between 0 and x (inclusive)
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}