export default function mergeSort<T>(arr: T[]): T[] {
  if (arr.length <= 1)
    return arr

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  // 排序（递归）
  const sortedLeft = mergeSort(left)
  const sortedRight = mergeSort(right)
  let i = 0
  let j = 0
  const result: T[] = []
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      result.push(sortedLeft[i])
      i++
    }
    else {
      result.push(sortedRight[j])
      j++
    }
  }
  return result.concat(sortedLeft.slice(i), sortedRight.slice(j))
}
