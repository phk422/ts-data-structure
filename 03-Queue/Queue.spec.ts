import { expect, it } from 'vitest'
import Queue from '.'

it('queue dequeue enqueue front', () => {
  const queue = new Queue<number>()
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  expect(queue.toString()).toBe('1,2,3')
  expect(queue.dequeue()).toBe(1)
  expect(queue.toString()).toBe('2,3')
  expect(queue.front()).toBe(2)
})
