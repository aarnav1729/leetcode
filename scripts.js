document.addEventListener("DOMContentLoaded", function () {
    const solutionList = document.getElementById('solution-list');
    const searchInput = document.getElementById('search');
    
    // Replace this with your actual file structure and links
    const problems = [
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Problem 2', link: 'easy/problem2/solution.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
        { category: 'Easy', name: 'Two Sum', link: 'two_sum.py' },
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
                link.textContent = `${problem.category} - ${problem.name}`;
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