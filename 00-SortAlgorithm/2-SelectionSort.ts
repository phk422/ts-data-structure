export default function selectionSort<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    let minItem = arr[i]
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minItem) {
        minItem = arr[j]
        minIndex = j
      }
    }
    const temp = arr[i]
    arr[i] = minItem
    arr[minIndex] = temp
  }

  return arr
}
