### Time Complexity

Time complexity describes how the time required for an operation changes as the number of elements in the queue increases. Let $n$ be the number of elements in the queue.

A queue follows the **First-In, First-Out (FIFO)** principle. Elements are inserted at the **rear** and removed from the **front**. The time complexity of queue operations depends on how the queue is implemented.

#### Queue Using an Array

In an array-based queue, the front and rear positions are maintained using indices.

**Enqueue:** To insert an element, the rear position is directly available. The new element is placed at the rear and the rear index is updated. No traversal of the queue is required. Therefore, enqueue takes **$O(1)$** time.

**Dequeue:** To remove an element, the front position is directly available. The element at the front is removed and the front index is updated. No traversal or shifting of all remaining elements is required. Therefore, dequeue takes **$O(1)$** time.

A **circular queue** is commonly used to achieve this efficient implementation without shifting elements after every dequeue.

> **Note:** If an array queue is implemented by shifting all remaining elements toward the front after every dequeue, the dequeue operation can take **$O(n)$** time. The $O(1)$ dequeue complexity assumes that the front position is maintained using an index or pointer without shifting the remaining elements.

**Search:** To find a particular element, the queue may need to be examined from the front toward the rear. In the worst case, all $n$ elements may need to be checked. Therefore, search takes **$O(n)$** time.

#### Queue Using a Linked List

In a linked-list implementation, the queue maintains two references: **front** and **rear**.

**Enqueue:** The rear reference directly identifies where the new node should be inserted. The new node is linked at the rear, and the rear reference is updated. No traversal is required. Therefore, enqueue takes **$O(1)$** time.

**Dequeue:** The front reference directly identifies the node to be removed. The front reference is moved to the next node. If the queue becomes empty, the rear reference is also updated. These operations require a constant number of steps, so dequeue takes **$O(1)$** time.

**Search:** Searching for a particular element requires traversing the linked nodes one by one. In the worst case, all $n$ nodes may need to be examined. Therefore, search takes **$O(n)$** time.

> **Note:** The $O(1)$ enqueue complexity assumes that both **front and rear references** are maintained. If only a front reference is maintained and the list must be traversed to find the last node, enqueue would take **$O(n)$** time.

#### Summary

| Operation | Array Queue | Linked-List Queue |
| --------- | ----------: | ----------------: |
| Enqueue   |    $O(1)$\* |          $O(1)$\* |
| Dequeue   |    $O(1)$\* |            $O(1)$ |
| Search    |      $O(n)$ |            $O(n)$ |

- These complexities assume an implementation that maintains the required front/rear positions directly and does not shift or traverse all elements unnecessarily.

Thus, for a well-designed queue implementation, **enqueue and dequeue can both be performed in constant time $O(1)$**, while **search generally takes linear time $O(n)$**.
