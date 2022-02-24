import Article from "./classes/article.js";
let id = window.location.search;
let article = new Article();
if (id) {
    article.fetchArticle();
}
$("#article-delete").on("click", function (e) {
    let id = parseInt(window.location.search.split('=')[1]);
    let article = new Article();
    console.log(id);
    article.deleteArticle(id);
});
$("#submit-art").on("submit", function (e) {
    e.preventDefault();
    let article = new Article();
    article.title = $("#title").val();
    article.content = $("#content").val();
    article.userId = $("#userId").val();
});
//# sourceMappingURL=articles.js.map