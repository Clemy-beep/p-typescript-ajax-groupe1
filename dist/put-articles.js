import Article from "./classes/article.js";
let id = parseInt(window.location.search.split('=')[1]);
$.ajax({
    type: "GET",
    url: "https://api.blog.quidam.re/api/getArticle.php?id=" + id,
    dataType: "JSON",
    success: function (response) {
        let article = new Article();
        response = response[0];
        article.title = response.title;
        article.content = response.content;
        article.category = response.categories;
        article.userId = response.userId;
        $('#article-id').val(article.id);
        $('#title').html(article.title);
        $('#content').html(article.content);
        $('#userId').val(article.userId);
    },
    error: function (error) { console.log(error); }
});
$('#edit').on('click', function (e) {
    e.preventDefault();
    let modifiedArticle = new Article();
    modifiedArticle.title = $('#title').html();
    modifiedArticle.content = $('#content').html();
    modifiedArticle.userId = parseInt($('#userId').val().toString());
    modifiedArticle.editArticle(id, modifiedArticle.title, modifiedArticle.content, modifiedArticle.userId);
});
//# sourceMappingURL=put-articles.js.map