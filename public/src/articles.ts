import Article from "./classes/article.js";

let id = window.location.search;
let article = new Article();
if (id) { article.fetchArticle(); }

$("#article-delete").on("click", function (e: Event) {
    let id: number = parseInt(window.location.search.split('=')[1]);
    let article = new Article();
    console.log(id);
    article.deleteArticle(id);
});

$("#submit-art").on("submit", function (e: Event) {
    e.preventDefault();
    let article = new Article();
    article.title = <string>$("#title").val();
    article.content = <string>$("#content").val();
    article.userId = <number>$("#userId").val();
});