import Article from "./article.js";
import {Category} from "./category.js"
export default class FetchMultiple {
    static fetchArticles() {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getArticles.php",
            dataType: "JSON",
            success: function (response: any) {
                console.log(response);
                if (response.length > 0) {
                    console.log(response);
                    response.forEach(((article: Article) => {
                        let newarticle = new Article(article.id, article.title, article.content, article.userId, article.isdeleted);
                        let html = `<a style="display:block" href="./public/views/article.html?id=${newarticle.id}">${newarticle.title}</a>`;
                        $('#articles-list')?.append(html);
                    }));
                } else $("#articles-list").html('No articles found.');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    static Categorie() {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getCategories.php",
            dataType: "JSON",
            success: function (response: any) {
                console.log(response);
                if (response.length > 0) {
                    console.log(response);
                    response.forEach((Categorie: Category) => {
                        let newcategorie = new Category(Categorie.id, Categorie.label, Categorie.isdeleted);
                        let html = `<a style="display:block" href="./public/views/categories.html?id=${newcategorie.id}">${newcategorie.label}</a>`;
                        $('#category-list')?.append(html);
                    });
                } else $('#category-list').html('No categories found');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}