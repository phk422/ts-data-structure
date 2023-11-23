import { expect, it } from 'vitest'
import bubbleSort from './1-BubbleSort'

it('bubbleSort', () => {
  const result = bubbleSort([29, 10, 14, 37, 14])
  expect(result.toString()).toBe('10,14,14,29,37')
})

// [29, 10, 14, 37, 14]
// [10, 29, 14, 37, 14]
// [10, 14, 29, 37, 14]
// [10, 14, 29, 37, 14]
// [10, 14, 29, 14, 37]
