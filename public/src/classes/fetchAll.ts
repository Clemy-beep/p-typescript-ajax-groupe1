import Article from "./article.js";
import {Category} from "./category.js"
import User from "./user.js";

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
                        if (!article.isdeleted)
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
                        let html = `<div>${newcategorie.label}<button id="delete-category${newcategorie.id}">Delete<input id="category-id" type="hidden" value="${newcategorie.id}"></button></div>`;
                        $('#category-list')?.append(html);
                        $(document).on('click', `#delete-category${newcategorie.id}`, function (e: Event) {
                            console.log('help');
                            let id: number = newcategorie.id;
                            newcategorie.deleteCategory(id);
                        });

                    });
                } else $('#category-list').html('No categories found');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}