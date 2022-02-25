import Article from "./classes/article.js";
import { Category } from "./classes/category.js";

$.ajax({
    type: "GET",
    url: "https://api.blog.quidam.re/api/getCategories.php",
    dataType: "JSON",
    success: function (response) {
        response.forEach((category: Category) => {
            let catOption = new Category(category.id, category.label, category.isdeleted)
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
newArticle.title = document.getElementById('title')!.toString();
newArticle.content = document.getElementById('content')!.toString();
newArticle.userId = parseInt(document.getElementById('author')!.toString());
$('#category').change(function (e: any) {
    category.id = parseInt($('#category').val()!.toString()) ?? 1;
    console.log(category.id);
});

$('#submit-art').on('click', (e: Event) => {
    e.preventDefault();
    newArticle.createArticle(category.id, newArticle.content, newArticle.title, newArticle.userId);
})



