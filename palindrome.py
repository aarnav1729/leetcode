# Question 9            Difficulty: Easy            Name: Palindrome Number
"""
    Given an integer x, return true if x is a palindrome, and false otherwise.

    

    Example 1:
    Input: x = 121

    Output: true
    Explanation: 121 reads as 121 from left to right and from right to left.
    Therefore it is a palindrome.

    Example 2:
    Input: x = -121

    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121. Therefore it is not a palindrome.
    Example 3:

    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
"""

#Solution 9
class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        conv = str(x)

        return conv == conv[::-1]