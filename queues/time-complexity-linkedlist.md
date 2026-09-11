### Time Complexity

The time complexity of a linked-list implementation of a queue depends on whether the implementation maintains both a **front** and a **rear** pointer.

A queue follows the **First In, First Out (FIFO)** principle. In a linked-list implementation, elements are normally inserted at the rear and removed from the front.

**Enqueue:**
The `enqueue` operation adds a new node at the rear of the queue. If the queue maintains a rear pointer, the new node can be linked directly after the current rear node, and the rear pointer can then be updated. No traversal of the queue is required. Therefore, the time complexity of `enqueue` is **$O(1)$**.

**Dequeue:**
The `dequeue` operation removes the node at the front of the queue. Since the front pointer directly identifies the node to be removed, the front pointer can be moved to the next node without traversing the queue. Therefore, the time complexity of `dequeue` is **$O(1)$**.

If the queue becomes empty after a dequeue operation, the rear pointer must also be updated to indicate that the queue is empty. This update still takes constant time.

**Search:**
A linked-list queue does not provide direct access to an arbitrary element. To search for a particular value, the nodes may have to be visited one by one from the front. In the worst case, all $n$ nodes may need to be examined. Therefore, the worst-case time complexity of searching is **$O(n)$**.

Thus, for a linked-list queue maintaining both front and rear pointers:

| Operation | Time Complexity | Reason                                                             |
| --------- | --------------- | ------------------------------------------------------------------ |
| Enqueue   | $O(1)$          | The rear pointer provides direct access to the insertion position. |
| Dequeue   | $O(1)$          | The front pointer provides direct access to the deletion position. |
| Search    | $O(n)$          | Nodes may need to be traversed one by one.                         |

Here, $n$ represents the number of elements currently stored in the queue.

**Note:** If a linked-list queue does not maintain a rear pointer, finding the rear node during `enqueue` requires traversing the list, making `enqueue` **$O(n)$**. Maintaining both front and rear pointers allows both `enqueue` and `dequeue` to be performed in **$O(1)$** time.
