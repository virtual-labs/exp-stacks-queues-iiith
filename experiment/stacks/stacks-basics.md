### What are Stacks?

  -  Imagine a pile of books, with books stacked one over the other. From this pile of books, you can either put another book on top or remove a book from the top.
  -  The book which is at the bottom of the pile is the last one to be taken out, while the books at the top are removed first. Books can only be added to the top of the pile.
  -  Let the action of putting a book on the top be called as push and let the action of removing a book be called pop. A type of structure, similar to the example of the pile of books, can be represented as a data structure. Such a data structure is known as a stack.

### Stack Operations and Applications

Just like how we saw in the example of a stack of books, a stack data structure has two types of operations : push and pop. As we can see, a stack is an example of a last in, first out data structure (LIFO). That is, an element that is pushed last into a stack is the first to be popped out. Stacks have many applications. Lets explore a few of them. Reversing a word : Think about how you would reverse a word using a stack. First all the letters are pushed into the stack and then popped out one by one to get the reversed word. This would take linear time O(n). Undoing Changes in a Text Editor : A stack is also commonly used in text editors. Changes that the user makes are pushed into a stack. While undoing, they are popped out.
### Pushing into a Stack
<img src="images/push.png"/>
### Popping from a Stack
<img src="images/pop.png"/>
