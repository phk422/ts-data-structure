import LinkedList from '../02-LinkedList'

export default class Queue<T> {
  private data: LinkedList<T>
  constructor() {
    this.data = new LinkedList<T>()
  }

  /**
   * 入队
   * @param value 入队的元素
   */
  enqueue(value: T) {
    this.data.append(value)
  }

  /**
   * 出队
   * @returns 出队元素
   */
  dequeue() {
    return this.data.remove(0)
  }

  /**
   * @returns 队首元素
   */
  front() {
    return this.data.getNodeByPosition(0)?.value
  }

  clear() {
    this.data.clear()
  }

  isEmpty() {
    return this.data.isEmpty()
  }

  get size() {
    return this.data.size
  }

  toString() {
    return this.data.traverse().toString()
  }
}
