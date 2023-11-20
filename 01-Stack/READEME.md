# 栈

## 定义

**堆栈**（stack）又称为**栈**或**堆叠**，它基于特定的操作规则进行组织和管理数据。栈的主要特点是它是一个具有**后进先出（Last In, First Out，LIFO）**顺序的有序集合，这意味着最后进栈的元素是第一个被取出的。堆栈常用一维数组或链表来实现。

## 栈的常见操作

堆栈使用两种基本操作：推入（压栈，push）和弹出（弹栈，pop）：

- 推入：将资料放入堆栈顶端，堆栈顶端移到新放入的资料。
- 弹出：将堆栈顶端资料移除，堆栈顶端移到移除后的下一笔资料。

## 特点

堆栈的基本特点：

1. 先入后出，后入先出。
2. 除头尾节点之外，每个元素有一个前驱，一个后继。

## 应用场景

栈的应用非常广泛，包括但不限于以下场景：

- **函数调用：** 在计算机程序中，函数调用时的局部变量和返回地址通常存储在栈中。
- **表达式求值：** 在编译器和解释器中，栈被用于跟踪表达式的运算顺序。
- **浏览器历史记录：** 浏览器使用栈来存储用户的访问历史记录，支持“后退”和“前进”操作。
- **Undo/Redo 功能：** 许多应用程序使用栈来实现撤销和重做操作。
- **内存管理：** 操作系统使用栈来管理程序的内存分配和释放。