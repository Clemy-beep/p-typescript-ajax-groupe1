import Article from "./classes/article.js";

let article = new Article();
article.fetchArticle();

function deleteArticle() {
    let id = window.location.search.split('=')[1];

}