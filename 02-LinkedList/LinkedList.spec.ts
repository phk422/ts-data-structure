import { expect, it } from 'vitest'
import LinkedList from '.'

it('linkedList', () => {
  const linkedList = new LinkedList<number>()
  let list = [1, 2, 45, 67, 56]
  list.forEach(i => linkedList.append(i))
  expect(linkedList.traverse().join('->')).toBe(list.join('->'))
  // 头部插入
  linkedList.insert(99, 0)
  list = [99, ...list]
  expect(linkedList.traverse().toString()).toBe(list.toString())
  // 中间插入
  linkedList.insert(88, 2)
  expect(linkedList.traverse().toString()).toBe('99,1,88,2,45,67,56')
  linkedList.insert(4545, 5)
  expect(linkedList.traverse().toString()).toBe('99,1,88,2,45,4545,67,56')
  // 最后插入
  linkedList.insert(11, 8)
  expect(linkedList.traverse().toString()).toBe('99,1,88,2,45,4545,67,56,11')
})

it('linkedList getNodeByPosition', () => {
  const linkedList = new LinkedList<number>()
  const list = [1, 2, 45, 67, 56]
  list.forEach(i => linkedList.append(i))
  expect(linkedList.getNodeByPosition(0)?.value).toBe(list[0])
  expect(linkedList.getNodeByPosition(2)?.value).toBe(list[2])
  expect(linkedList.getNodeByPosition(5)?.value).toBe(list[5])
})

it('linkedList remove', () => {
  const linkedList = new LinkedList<number>()
  let list = [1, 2, 45, 67, 56]
  list.forEach(i => linkedList.append(i))
  expect(linkedList.remove(0)).toBe(list[0])
  list = list.slice(1)
  expect(linkedList.traverse().toString()).toBe(list.toString())
  expect(linkedList.remove(2)).toBe(list[2])
  linkedList.remove(2)
})

it('linkedList search', () => {
  const linkedList = new LinkedList<number>()
  const list = [1, 23, 454, 54]
  list.forEach(i => linkedList.append(i))
  expect(linkedList.search(1)).toBe(true)
  expect(linkedList.search(23)).toBe(true)
  expect(linkedList.search(54)).toBe(true)
  expect(linkedList.search(222)).toBe(false)
})

it('linkedList reverse', () => {
  const linkedList = new LinkedList<number>()
  const list = [1, 2, 4, 90, 343]
  list.forEach(i => linkedList.append(i))
  linkedList.reverse()
  expect(linkedList.traverse().toString()).toBe(list.reverse().toString())
})
