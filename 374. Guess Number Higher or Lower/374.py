374. Guess Number Higher or Lower
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I ll tell you whether the number is higher or lower.
You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
Example:
n = 10, I pick 6.

Return 6.
# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num):
#65ms
class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        L , R = 1 , n
        M = (L+R)>>1
        m = guess(M)
        while m != 0 : 
            # print L , R ,M ,m	
            if m == -1:
                R = M-1
            elif m == 1 :
                L =  M+1
            M = (R+L)>>1 
            m = guess(M)   
        return M      
   #46ms     	
class Solution(object):
    def guessNumber(self, n):
        """
        :type n: int
        :rtype: int
        """
        L , R = 1 , n
        while 1 : 
            M = (R+L)>>1 
            m = guess(M)   	
            if m == -1:
                R = M-1
            elif m == 1 :
                L =  M+1
            elif m == 0:
                return M        	