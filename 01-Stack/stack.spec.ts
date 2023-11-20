import { expect, it } from 'vitest'
import Stack from '.'

it('stack', () => {
  const stack = new Stack<number>()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  // peek
  expect(stack.peek()).toBe(4)
  // pop
  expect(stack.pop()).toBe(4)
  // size
  expect(stack.size).toBe(3)
  // isEmpty
  expect(stack.isEmpty()).toBe(false)
  // clear
  stack.clear()
  expect(stack.size).toBe(0)
})
