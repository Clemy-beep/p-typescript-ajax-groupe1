import Article from "./classes/article.js";
import { Category } from "./classes/category.js";
$.ajax({
    type: "GET",
    url: "https://api.blog.quidam.re/api/getCategories.php",
    dataType: "JSON",
    success: function (response) {
        response.forEach((category) => {
            let catOption = new Category(category.id, category.label, category.isdeleted);
            let html = `
                <option value="${catOption.id}">${catOption.label}</option>
            `;
            $('#category').append(html);
        });
    },
    error: (error) => {
        console.log(error);
    }
});
let newArticle = new Article();
let category = new Category();
category.id = parseInt($('#category').val()?.toString() ?? "1");
newArticle.title = document.getElementById('title').toString();
newArticle.content = document.getElementById('content').toString();
newArticle.userId = parseInt(document.getElementById('author').toString());
$('#category').change(function (e) {
    category.id = parseInt($('#category').val().toString()) ?? 1;
    console.log(category.id);
});
$('#submit-art').on('click', (e) => {
    e.preventDefault();
    let article = new Article();
    article.title = $("#title").val();
    article.content = $("#content").val();
    article.userId = $("#author").val();
    article.category = $("#category").val();
    console.log(article);
    article.createArticle(article.title, article.content, article.category, article.userId);
});
//# sourceMappingURL=post-article.js.map