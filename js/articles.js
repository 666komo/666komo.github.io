// Get DOM elements
const addArticleForm = document.getElementById('add-article-form');
const articleTitleInput = document.getElementById('article-title');
const articleDescriptionInput = document.getElementById('article-description');
const articleImageInput = document.getElementById('article-image');
const articleCategoryInput = document.getElementById('article-category');

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const title = articleTitleInput.value.trim();
    const description = articleDescriptionInput.value.trim();
    const imageFile = articleImageInput.files[0];
    const category = articleCategoryInput.value;

    if (title && description && imageFile && category) {
        // Create a new article object
        const newArticle = {
            title: title,
            description: description,
            imageSrc: URL.createObjectURL(imageFile),
            category: category
        };

        // Get existing articles from localStorage or initialize an empty array
        let articles = JSON.parse(localStorage.getItem('articles')) || [];

        // Add the new article to the array
        articles.push(newArticle);

        // Save the updated articles array to localStorage
        localStorage.setItem('articles', JSON.stringify(articles));

        // Clear the form
        addArticleForm.reset();

        // Optionally, provide feedback to the user
        alert('Article added successfully!');

        // Redirect to the appropriate category page
        window.location.href = `../_${category}/${category}.html`;
    } else {
        alert('Please fill in all fields, select an image, and choose a category.');
    }
}

// Add event listener to the form
addArticleForm.addEventListener('submit', handleSubmit);

// Function to display articles (call this on page load for article pages)
function displayArticles() {
    const articlesContainer = document.getElementById('content');
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const currentCategory = window.location.pathname.split('/').pop().split('.')[0];

    articlesContainer.innerHTML = ''; // Clear existing content

    articles.forEach(article => {
        if (article.category === currentCategory) {
            const articleElement = document.createElement('div');
            articleElement.className = 'article-window';
            articleElement.innerHTML = `
                <img src="${article.imageSrc}" alt="${article.title}">
                <div class="article-info">
                    <h2>${article.title}</h2>
                    <p class="description">${article.description}</p>
                </div>
            `;
            articlesContainer.appendChild(articleElement);
        }
    });
}

// Call displayArticles if we're on an article listing page
if (document.getElementById('content')) {
    displayArticles();
}

// Add event listener for page load to refresh articles
window.addEventListener('load', displayArticles);
