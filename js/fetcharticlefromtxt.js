// Function to fetch and parse articles from a single file
async function fetchArticle() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('article');

        if (!articleId) {
            throw new Error('Article ID not provided in URL');
        }

        const response = await fetch('../_linux/articles.txt');
        if (!response.ok) {
            throw new Error('Articles file not found');
        }
        const content = await response.text();
        const article = parseArticle(content, articleId);

        if (article) {
            displayArticle(article);
        } else {
            throw new Error('Article not found');
        }
    } catch (error) {
        console.error('Error fetching article:', error);
        displayError('Unable to load article.');
    }
}

// Function to parse the specific article content
function parseArticle(content, articleId) {
    const articleRegex = new RegExp(`<article${articleId}>([\\s\\S]*?)</article${articleId}>`, 'i');
    const match = articleRegex.exec(content);

    return match ? match[1].trim() : null;
}

// Function to display the article content
function displayArticle(content) {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = content;
}

// Function to display error message
function displayError(message) {
    const contentSection = document.getElementById('content');
    contentSection.innerHTML = `
        <div class="error-message">
            <h2>Error</h2>
            <p>${message}</p>
        </div>
    `;
}

// Event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchArticle);
