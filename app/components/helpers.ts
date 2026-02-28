export function getRandomNumbers(n: number, x: number): number[] {
  const randomNumbers: number[] = []
  for (let i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * (x + 1)))
  }
  return randomNumbers
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  let currentIndex = arr.length, randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
  }
  return arr
}
