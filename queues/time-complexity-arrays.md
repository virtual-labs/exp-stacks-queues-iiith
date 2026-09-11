### Time Complexity

The time complexity of a queue operation describes how the time required to perform that operation changes as the number of elements in the queue, $n$, increases.

A queue follows the **First In, First Out (FIFO)** principle. In a standard array-based queue, elements are inserted at the **rear** and removed from the **front**.

**Enqueue:**
The `enqueue` operation adds a new element at the rear of the queue. When the queue maintains a rear index or pointer, the position for the new element can be accessed directly without traversing the existing elements. Therefore, the time complexity of `enqueue` is **$O(1)$**.

**Dequeue:**
The `dequeue` operation removes the element at the front of the queue. In a properly implemented array-based queue, the front position is maintained using an index or pointer. Removing the front element only requires updating this position; the remaining elements do not need to be shifted. Therefore, the time complexity of `dequeue` is **$O(1)$**.

**Important:** In a simple array implementation where all remaining elements are shifted toward the beginning after every dequeue, the dequeue operation can take **$O(n)$** time. A circular queue avoids this unnecessary shifting and allows enqueue and dequeue to be performed in **$O(1)$** time.

**Search:**
A queue does not provide direct access to an element based on its value. To search for a particular element, elements may have to be examined one by one. In the worst case, every element may need to be checked. Therefore, the worst-case time complexity of searching in a queue is **$O(n)$**.

Thus, for a properly implemented array-based queue:

| Operation | Time Complexity | Reason                                       |
| --------- | --------------- | -------------------------------------------- |
| Enqueue   | $O(1)$          | The rear position is directly available.     |
| Dequeue   | $O(1)$          | The front position is directly available.    |
| Search    | $O(n)$          | Elements may need to be examined one by one. |

Here, $n$ represents the number of elements currently stored in the queue.
