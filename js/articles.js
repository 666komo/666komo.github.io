document.querySelectorAll('.article-window').forEach(article => {
    article.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});

// Add Article Modal Functionality
const modal = document.getElementById('add-article-modal');
const addArticleBtn = document.getElementById('add-article-btn');
const closeModal = document.querySelector('.close');

addArticleBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('add-article-form').onsubmit = function(event) {
    event.preventDefault();
    
    const title = document.getElementById('article-title').value;
    const description = document.getElementById('article-description').value;
    const imageFile = document.getElementById('article-image').files[0];

    // Create a new FileReader to read the image file
    const reader = new FileReader();
    reader.onload = function(e) {
        const newArticleHTML = `
        <div class="article-window">
            <img src="${e.target.result}" alt="Article Image">
            <div class="article-info">
                <h2>${title}</h2>
                <p class="description">${description}</p>
            </div>
        </div>
        `;

        // Inject the new article HTML into the content section
        const contentSection = document.getElementById('content');
        contentSection.insertAdjacentHTML('beforeend', newArticleHTML);

        // Store the new article data in localStorage
        let articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.push({
            title: title,
            description: description,
            image: e.target.result
        });
        localStorage.setItem('articles', JSON.stringify(articles));

        // Reset the form and close the modal
        document.getElementById('add-article-form').reset();
        modal.style.display = 'none';
    };
    
    // Read the image file as a Data URL
    reader.readAsDataURL(imageFile);
}

// Load articles from localStorage on page load
window.addEventListener('load', function() {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const contentSection = document.getElementById('content');

    articles.forEach(article => {
        const articleHTML = `
        <div class="article-window">
            <img src="${article.image}" alt="Article Image">
            <div class="article-info">
                <h2>${article.title}</h2>
                <p class="description">${article.description}</p>
            </div>
        </div>
        `;
        contentSection.insertAdjacentHTML('beforeend', articleHTML);
    });
});
