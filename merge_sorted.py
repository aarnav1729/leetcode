# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: Optional[ListNode]
        :type list2: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        merged_head = None
        current = None
        
        while list1 and list2:

            if list1.val < list2.val:

                if current:

                    current.next = list1
                    current = current.next

                else:

                    merged_head = list1
                    current = merged_head

                list1 = list1.next

            else:

                if current:

                    current.next = list2
                    current = current.next

                else:

                    merged_head = list2
                    current = merged_head

                list2 = list2.next
                
        if list1:

            if current:

                current.next = list1

            else:

                merged_head = list1

        elif list2:

            if current:

                current.next = list2

            else:
                
                merged_head = list2
                
        return merged_head
