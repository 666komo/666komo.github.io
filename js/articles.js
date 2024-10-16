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
        const newArticle = document.createElement('div');
        newArticle.className = 'article-window';
        
        newArticle.innerHTML = `
            <img src="${e.target.result}" alt="Article Image">
            <div class="article-info">
                <h2>${title}</h2>
                <p class="description">${description}</p>
            </div>
        `;

        // Append the new article to the content section
        document.getElementById('content').appendChild(newArticle);
        
        // Reset the form and close the modal
        document.getElementById('add-article-form').reset();
        modal.style.display = 'none';
    };
    
    // Read the image file as a Data URL
    reader.readAsDataURL(imageFile);
}
