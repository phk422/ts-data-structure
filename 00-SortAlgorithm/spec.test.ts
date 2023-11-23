import { expect, it } from 'vitest'
import bubbleSort from './1-BubbleSort'
import selectionSort from './2-SelectionSort'

const arr = [29, 10, 14, 37, 14]
const resultStr = [10, 14, 14, 29, 37]
it('bubbleSort', () => {
  const result = bubbleSort([...arr])
  expect(result).toEqual(resultStr)
})

it('selectionSort', () => {
  const result = selectionSort([...arr])
  expect(result).toEqual(resultStr)
})
