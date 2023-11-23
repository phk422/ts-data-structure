export default function insertionSort<T>(arr: T[]): T[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i]
    let emptyIndex = i
    for (let j = i - 1; j >= 0; j--) {
      if (current < arr[j]) {
        arr[emptyIndex] = arr[j]
        emptyIndex = j
        if (j === 0)
          arr[j] = current
      }
      else {
        arr[emptyIndex] = current
        break
      }
    }
  }
  return arr
}
