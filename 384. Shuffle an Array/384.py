384. Shuffle an Array
// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();

class Solution(object):

    def __init__(self, nums):
        """
        
        :type nums: List[int]
        :type size: int
        """
        self.nums = nums
        

    def reset(self):
        """
        Resets the array to its original configuration and return it.
        :rtype: List[int]
        """
        return self.nums

    def shuffle(self):
        """
        Returns a random shuffling of the array.
        :rtype: List[int]
        """
        if len(output) == 0 :
        	return self.nums
        out = self.nums[:]
        n = random.randint(0,len(output)-1)
        out[0],out[n] = out[u],out[0]
        return out
# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()
    def shuffle(self):
        output = self.nums[:]
        n = len(output)
        for i in xrange(n):
            _id = random.randint(i,n-1)
            output[i],output[_id] = output[_id],output[i]
        return output

def shuffle(self):
        """
        Returns a random shuffling of the array.
        :rtype: List[int]
        """
        shuffled_array = self.nums[:] 
        random.shuffle(shuffled_array)
        return shuffled_array        