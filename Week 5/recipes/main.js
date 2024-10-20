import { recipes } from './recipes.js';

// Function to generate a random number
function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

// Function to generate HTML for a recipe
function generateRecipeHTML(recipe) {
    return `
        <article class="recipe">
            <img src="${recipe.image}" alt="A plate of ${recipe.name}">
            <div class="details">
                <h3>${recipe.name}</h3>
                <p>${recipe.description}</p>
                <div class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${generateStarsHTML(recipe.rating)}
                </div>
                <div class="tags">
                    ${generateTagsHTML(recipe.tags)}
                </div>
            </div>
        </article>
    `;
}

// Function to generate HTML for tags
function generateTagsHTML(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join(', '); // Join with a comma and space
}

// Function to generate HTML for rating stars
function generateStarsHTML(rating) {
    let starsHtml = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            starsHtml += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            starsHtml += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }
    return starsHtml;
}

// Function to render recipes in sections
function renderRecipes() {
    recipes.forEach((recipe, index) => {
        const section = document.querySelector(`#section${index + 1}`);
        if (section) {
            section.innerHTML = generateRecipeHTML(recipe);
        }
    });
}

// Init function to run when the page loads
function init() {
    renderRecipes();
}

// Run init when the page loads
document.addEventListener('DOMContentLoaded', init);
