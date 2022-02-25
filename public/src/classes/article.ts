import { Category } from './category.js';
import FetchMultiple from './fetchAll.js';
export default class Article {
    #id: number;
    #title: string;
    #content: string;
    #userId: number;
    #categories: Category[];
    #isdeleted: boolean;

    constructor(id?: number, title?: string, content?: string, userId?: number, isdeleted?: boolean, categories?: Category[]) {
        this.#id = id ?? 0;
        this.#title = title ?? "";
        this.#content = content ?? "";
        this.#userId = userId ?? 0;
        this.#isdeleted = isdeleted ?? false;
        this.#categories = categories ?? [];
    }

    get id() { return this.#id; }
    get title() { return this.#title; }
    get content() { return this.#content; }
    get isdeleted() { return this.#isdeleted; }
    get userId() { return this.#userId; }
    get categories() { return this.#categories }

    set id(id: number) { this.#id = id; }
    set title(title: string) { this.#title = title }
    set content(content: string) { this.#content = content }
    set userId(userId: number) { this.#userId = userId }
    set isdeleted(isdeleted: boolean) { this.#isdeleted = isdeleted }
    set categories(categories: Category[]) { this.#categories }

    createArticle() { }

    fetchArticle() {
        let id: string = window.location.search.split('=')[1];
        console.log(id);
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getArticle.php?id=" + id,
            dataType: "JSON",
            success: function (response: any) {
                response = response[0];
                console.log(response);
                let article = new Article(response.id, response.title, response.content, response.user_id, response.isdeleted, response.categories);
                article.title = response.title;
                article.content = response.content;
                article.isdeleted = response.isdeleted;
                article.categories = response.categories;
                article.#categories.forEach((category) => {
                    console.log(category);
                });
                if (!article.isdeleted) {
                    $("#article-title").html(article.title);
                    $("#article-content").html(article.content);
                } else $("#article-title").html("Article has been deleted");

            },
            error: function (error) {
                console.log(error);
            }
        });
    }


    editArticle(id: number) {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/postArticle.php" + id,
            dataType: "JSON",
            success: function (response: any) {
                console.log(response);
                if (response.length > 0) {
                    console.log(response);
                    response.forEach((article: Article) => {
                        let newArticle = new Article(article.id, article.title, article.content, article.userId ,article.isdeleted);
                        let html = `
                            <input type="text" name="title" id="title" value="${newArticle.title}" required>
                            <input type="text" name="content" id="content" value="${newArticle.content}" required>
                        `;
                        $('#category-list')?.append(html);
                    });
                } else $('#category-list').html('No categories found');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
     

    deleteArticle(id: number) {
        let conf = confirm("Are you sure you want to delete this article ?")
        if (conf)
            $.ajax({
                type: "POST",
                url: "https://api.blog.quidam.re/api/deleteArticle.php?id=" + id,
                dataType: "JSON",
                data: {
                    'user_id': 7
                },
                success: function (response: any) {
                    console.log(response);
                    window.location.href = "http://127.0.0.1:5555/index.html"
                },
                error: function (error) {
                    console.log(error);
                }
            });
    }

}