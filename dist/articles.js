import Article from "./classes/article.js";
let id = parseInt(window.location.search.split('=')[1]);
Article.fetchArticle(id);
$("#article-delete").on("click", function (e) {
    let article = new Article();
    console.log(id);
    article.deleteArticle(id);
});
$('#article-edit').on('click', (event) => {
    let id = parseInt(window.location.search.split('=')[1]);
    window.location.href = "http://127.0.0.1:5555/public/views/put-article.html?id=" + id;
});
//# sourceMappingURL=articles.js.map