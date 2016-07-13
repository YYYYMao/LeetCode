155. Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.arr = []
        self.min = None

    def push(self, x):
        """
        :type x: int
        :rtype: void
        """
        self.arr.append(x)
        if self.min == None:
        	self.min = x
        self.min = min(x,self.min)

    def pop(self):
        """
        :rtype: void
        """
        a = self.arr.pop()
        if a == self.min and len(self.arr) !=0 :
        	self.min = min(self.arr)
        if len(self.arr) ==0 :
        	self.min = None	

    def top(self):
        """
        :rtype: int
        """
        return self.arr[-1]

    def getMin(self):
        """
        :rtype: int
        """
        return self.min

        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()

["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
[[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]

2147483647
2147483646


2147483646

2147483647