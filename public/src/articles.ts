import Article from "./classes/article.js";

let id = window.location.search;
let article = new Article();
if (id) { Article.fetchArticle(); }

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

$('#article-edit').on('click', (event: Event) => {
    let id: number = parseInt(window.location.search.split('=')[1]);
    window.location.href = "http://127.0.0.1:5555/public/views/put-article.html?id=" + id;
})