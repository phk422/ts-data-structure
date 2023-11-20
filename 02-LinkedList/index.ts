class Node<T> {
  public next: Node<T> | null
  public value: T
  constructor(value: T) {
    this.next = null
    this.value = value
  }
}

export default class LinkedList<T> {
  private head: Node<T> | null
  private length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  /**
   * 在链表末尾添加一个新节点
   * @param value 添加的元素
   */
  append(value: T) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.length++
      return
    }
    let currentNode = this.head
    while (currentNode.next)
      currentNode = currentNode.next
    currentNode.next = node
    this.length++
  }

  /**
   * 在指定位置插入一个新节点
   * @param value 插入的值
   * @param position 位置下标
   */
  insert(value: T, position: number) {
    // 判断下标是否越界
    this.checkPosition(position)
    const node = new Node(value)
    if (position === 0) {
      node.next = this.head
      this.head = node
      this.length++
    }
    else {
      const current = this.getNodeByPosition(position - 1)
      node.next = current!.next
      current!.next = node
      this.length++
    }
  }

  /**
   *  根据下标移除元素
   * @param position 下标
   * @returns 移除的value
   */
  remove(position: number) {
    this.checkPosition(position)
    if (!this.head)
      return
    if (position === 0) {
      const current = this.head
      this.head = this.head?.next
      this.length--
      return current.value
    }
    const current = this.getNodeByPosition(position - 1)
    const remove = current!.next
    current!.next = remove?.next || null
    this.length--
    return remove?.value
  }

  /**
   * 根据下标获取当前node节点
   * @param position 下标
   * @returns 获取到的节点
   */
  getNodeByPosition(position: number) {
    this.checkPosition(position)
    let current = this.head
    for (let i = 0; i < position; i++)
      current = current!.next
    return current
  }

  /**
   * 遍历链表
   * @returns 遍历后的数组
   */
  traverse() {
    let currentNode = this.head
    const result = []
    while (currentNode) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }
    return result
  }

  /**
   * 链表的长度
   */
  get size() {
    return this.length
  }

  /**
   * 判断下标是否越界
   * @param position 下标
   */
  private checkPosition(position: number) {
    if (position < 0 || position > this.size)
      throw new Error('Invalid position')
  }
}
