export function getRandomNumbers(n: number, x: number): number[] {
  const randomNumbers: number[] = [];
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * (x + 1)));
  }
  return randomNumbers;
}
