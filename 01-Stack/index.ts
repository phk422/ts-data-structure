export default class Stack<T> {
  private data: T[]

  constructor() {
    this.data = []
  }

  /**
   * 入栈
   * @param value
   */
  push(value: T) {
    this.data.push(value)
  }

  /**
   * 弹栈
   * @returns 弹出的元素
   */
  pop() {
    return this.data.pop()
  }

  /**
   * 获取栈顶元素
   * @returns 栈顶元素
   */
  peek(): T | undefined {
    return this.data[this.size - 1]
  }

  /**
   * 判断栈是否为空
   * @returns 是否为空
   */
  isEmpty() {
    return this.size === 0
  }

  /**
   * 清空栈
   */
  clear() {
    this.data = []
  }

  /**
   * 栈内资料个数
   */
  get size() {
    return this.data.length
  }
}
