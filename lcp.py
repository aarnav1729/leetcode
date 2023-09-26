class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        roman_to_int = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500,'M':1000}
        
        int_val = 0
        
        for i in range(len(s)):
            
            if i > 0 and roman_to_int[s[i]] > roman_to_int[s[i-1]]:
                
                int_val += roman_to_int[s[i]] - 2 * roman_to_int[s[i-1]]
                
            else:
                
                int_val += roman_to_int[s[i]]
                
        return int_val
