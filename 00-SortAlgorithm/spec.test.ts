import { expect, it } from 'vitest'
import bubbleSort from './1-BubbleSort'
import selectionSort from './2-SelectionSort'
import insertionSort from './3-InsertionSort'
import mergeSort from './4-MergeSort'

const arr = [99, 29, 10, 14, 37, 14]
const resultStr = [10, 14, 14, 29, 37, 99]
it('bubbleSort', () => {
  const result = bubbleSort([...arr])
  expect(result).toEqual(resultStr)
})

it('selectionSort', () => {
  const result = selectionSort([...arr])
  expect(result).toEqual(resultStr)
})

it('insertionSort', () => {
  const result = insertionSort([...arr])
  expect(result).toEqual(resultStr)
})

it('mergeSort', () => {
  const result = mergeSort([...arr])
  expect(result).toEqual(resultStr)
})
