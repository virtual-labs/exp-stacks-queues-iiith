### Time Complexity

The time complexity of a stack operation describes how the time required to perform that operation changes as the number of elements in the stack, $n$, increases.

A stack follows the **Last In, First Out (LIFO)** principle. Both insertion and deletion take place at the **top** of the stack.

**Insertion (Push):**
The `push` operation adds a new element to the top of the stack. Since the position where the new element has to be inserted is directly available through the `top` reference or index, no traversal of the other elements is required. Therefore, the time complexity of `push` is **$O(1)$**.

**Deletion (Pop):**
The `pop` operation removes the element from the top of the stack. The top element can be accessed directly, so the remaining elements do not need to be traversed or shifted. Therefore, the time complexity of `pop` is **$O(1)$**.

**Search:**
Searching for a particular element is different because the stack does not provide direct access to an arbitrary element according to its value. In the worst case, the required element may be at the bottom of the stack, or it may not be present at all. Therefore, elements may need to be examined one by one. The worst-case time complexity of searching in a stack is **$O(n)$**.

Thus, for a standard stack implementation:

| Operation | Time Complexity | Reason                                        |
| --------- | --------------- | --------------------------------------------- |
| Push      | $O(1)$          | The element is inserted directly at the top.  |
| Pop       | $O(1)$          | The element is removed directly from the top. |
| Search    | $O(n)$          | Elements may need to be examined one by one.  |

Here, $n$ represents the number of elements currently stored in the stack.
