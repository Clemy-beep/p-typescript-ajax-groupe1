import Article from "./classes/article.js";

let id: number = parseInt(window.location.search.split('=')[1]);

Article.fetchArticle(id);

$("#article-delete").on("click", function (e: Event) {
    let article = new Article();
    console.log(id);
    article.deleteArticle(id);
});

$('#article-edit').on('click', (event: Event) => {
    let id: number = parseInt(window.location.search.split('=')[1]);
    window.location.href = "http://127.0.0.1:5555/public/views/put-article.html?id=" + id;
})