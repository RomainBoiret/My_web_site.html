// Define the constants
const USERNAME = 'RomainBoiret';

// fetch github data
function fetchData(url) {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    }).catch(error => {
        console.error('Fetch error:', error);
    });
}

// Recursive function to perform binary search on stars
function binarySearchStars(startPage, endPage) {
    if (startPage > endPage) {
        return endPage; // Binary search is complete
    }

    const midPage = Math.floor((startPage + endPage) / 2);
    const url = `https://api.github.com/users/${USERNAME}/starred?per_page=1&page=${midPage}`;

    return fetchData(url).then(data => {
        if (data.length === 0) {
            // No stars on the current page, search to the left
            return binarySearchStars(startPage, midPage - 1);
        } else {
            // A star on the current page, search to the right
            return binarySearchStars(midPage + 1, endPage);
        }
    });
}

function fetchGithubProfile() {
    // Number of public repositories
    fetchData(`https://api.github.com/users/${USERNAME}`).then(data => {
        document.getElementById('github-repos').innerText = (data) ? data.public_repos : 'unknown';
    });

    // Number of contributions
    fetchData(`https://github-contributions-api.deno.dev/${USERNAME}.json`).then(data => {
        document.getElementById('github-contributions').innerText = (data) ? data.totalContributions : 'unknown';
    })

    // Number of pull requests
    fetchData(`https://api.github.com/search/issues?q=+type:pr+user:${USERNAME}&sort=created&order=asc`).then(data => {
        document.getElementById('github-prs').innerText = (data) ? data.total_count : 'unknown';
    })

    // Number of stars (last because send several requests)
    binarySearchStars(1, 1_000).then(lastPage => {
        document.getElementById('github-stars').innerText = lastPage;
    });
}

// Wait for the DOM to be loaded before loading the profile
window.addEventListener("DOMContentLoaded", fetchGithubProfile);
