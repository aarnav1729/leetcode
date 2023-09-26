document.addEventListener("DOMContentLoaded", function () {
    const solutionList = document.getElementById('solution-list');
    const searchInput = document.getElementById('search');
    
    // Replace this with your actual file structure and links
    const problems = [
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Palindrome Number', link: 'palindrome.py' },
        { category: 'Easy', name: 'Roman To Integer', link: 'roman_to_integer.py' },
        { category: 'Easy', name: 'Longest Common Prefix', link: 'lcp.py' },
        { category: 'Easy', name: 'Valid Parentheses', link: 'validp.py' },
        { category: 'Easy', name: 'Merge Two Sorted Lists', link: 'merge_sorted.py' },
        { category: 'Easy', name: 'Remove Duplicates From Sorted Array', link: 'two_sum.py' },
        { category: 'Easy', name: 'Remove Element', link: 'two_sum.py' },
        { category: 'Easy', name: 'Find The Index Of The First Occurence In A String', link: 'two_sum.py' },
        { category: 'Easy', name: 'Search Insert Position', link: 'two_sum.py' },
        { category: 'Easy', name: 'Length Of Last Word', link: 'two_sum.py' },
        { category: 'Easy', name: 'Plus One', link: 'two_sum.py' },
        { category: 'Easy', name: 'Add Binary', link: 'two_sum.py' },
        { category: 'Easy', name: 'Sqrt (x)', link: 'two_sum.py' },
        { category: 'Easy', name: 'Climbing Stairs', link: 'two_sum.py' },
        { category: 'Easy', name: 'Remove Duplicates From Sorted List', link: 'two_sum.py' },
        { category: 'Easy', name: 'Merge Sorted Array', link: 'two_sum.py' },
        { category: 'Easy', name: 'Binary Tree Inorder Traversal', link: 'two_sum.py' },
        { category: 'Easy', name: 'Same Tree', link: 'two_sum.py' },
        { category: 'Easy', name: 'Symmetric Tree', link: 'two_sum.py' },
        { category: 'Easy', name: 'Maximum Depth Of Binary Tree', link: 'two_sum.py' },
        { category: 'Easy', name: 'Convert Sorted Array To Binary Search Tree', link: 'two_sum.py' },
        { category: 'Easy', name: 'Balanced Binary Tree', link: 'two_sum.py' },
        { category: 'Easy', name: 'Minimum Depth Of Binary Tree', link: 'two_sum.py' },
        { category: 'Easy', name: 'Path Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Pascals Triangle', link: 'two_sum.py' },
        { category: 'Easy', name: 'Pascals Triangle II', link: 'two_sum.py' },
        { category: 'Easy', name: 'Best Time To Buy And Sell Stock', link: 'two_sum.py' },
        { category: 'Easy', name: 'Valid Palindrome', link: 'two_sum.py' },
        { category: 'Easy', name: 'Single Number', link: 'two_sum.py' },
        { category: 'Easy', name: 'Linked List Cycle', link: 'two_sum.py' },
        { category: 'Easy', name: 'Binary Tree Preorder Traversal', link: 'two_sum.py' },
        { category: 'Easy', name: 'Binary Tree Postorder Traversal', link: 'two_sum.py' },
        { category: 'Easy', name: 'Intersection Of Two Linked Lists', link: 'two_sum.py' },
        { category: 'Easy', name: 'Excel Sheet Column Title', link: 'two_sum.py' },
        { category: 'Easy', name: 'Majority Element', link: 'two_sum.py' },
        { category: 'Easy', name: 'Excel Sheet Column Number', link: 'two_sum.py' },
        { category: 'Easy', name: 'Combine Two Tables', link: 'two_sum.py' },
        { category: 'Easy', name: 'Employees Earning More Than Their Managers', link: 'two_sum.py' },
        { category: 'Easy', name: 'Duplicate Emails', link: 'two_sum.py' },
        { category: 'Easy', name: 'Customers Who Never Order', link: 'two_sum.py' },
        { category: 'Easy', name: 'Reverse Bits', link: 'two_sum.py' },
        { category: 'Easy', name: 'Number Of 1 Bits', link: 'two_sum.py' },
        { category: 'Easy', name: 'Valid Phone Numbers', link: 'two_sum.py' },
        { category: 'Easy', name: 'Tenth Line', link: 'two_sum.py' },
        { category: 'Easy', name: 'Delete Duplicate Emails', link: 'two_sum.py' },
        { category: 'Easy', name: 'Rising Temperature', link: 'two_sum.py' },
        { category: 'Easy', name: 'Happy Number', link: 'two_sum.py' },
        { category: 'Easy', name: 'Remove Linked List Elements', link: 'two_sum.py' },
        { category: 'Easy', name: 'Isomorphic Strings', link: 'two_sum.py' },
        { category: 'Easy', name: 'Reverse Linked List', link: 'two_sum.py' },
        { category: 'Easy', name: 'Contains Duplicate', link: 'two_sum.py' },
        { category: 'Easy', name: 'Contains Duplicate II', link: 'two_sum.py' },
        { category: 'Easy', name: 'Count Complete Tree Nodes', link: 'two_sum.py' },
        { category: 'Easy', name: 'Implement Stack Using Queues', link: 'two_sum.py' },
        { category: 'Easy', name: 'Invert Binary Tree', link: 'two_sum.py' },
        { category: 'Easy', name: 'Summary Ranges', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },


        // Add more problems here
    ];
    
    function displayProblems() {
        solutionList.innerHTML = ''; // Clear the current list
        const searchTerm = searchInput.value.toLowerCase();
        
        problems.forEach((problem) => {
            if (problem.name.toLowerCase().includes(searchTerm)) {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = `${problem.name}`;
                link.href = problem.link;
                listItem.appendChild(link);
                solutionList.appendChild(listItem);
            }
        });
    }
    
    // Initial display
    displayProblems();
    
    // Handle search input
    searchInput.addEventListener('input', displayProblems);
});
