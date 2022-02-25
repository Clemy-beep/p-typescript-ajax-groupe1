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

    createArticle(category: number, content: string, title: string, userId: number) {
        $.ajax({
            type: "POST",
            url: "https://api.blog.quidam.re//api/postArticle.php",
            dataType: "json",
            data: {
                category: category,
                content: content,
                title: title,
                userId: userId
            },
            success: function (response) {
                console.log(response);
                let okText = "Article successfully published."
                if (Array.isArray(response))
                    $("#response").html(okText);
                else $("#response").html("An error occurred.")
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    static fetchArticle(): void {
        let id: string = window.location.search.split('=')[1];
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getArticle.php?id=" + id,
            dataType: "JSON",
            success: function (response: any) {
                var article = new Article();
                response = response[0];
                article.title = response.title;
                article.content = response.content;
                article.isdeleted = response.isdeleted;
                article.categories = response.categories;
                article.#categories.forEach((category) => {
                });
                if (!article.isdeleted) {
                    $("#article-title").html(article.title);
                    $("#article-content").html(article.content);
                } else $("#article-title").html("Article has been deleted");
                return article;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    editArticle(id: number, title: string, content: string, userId: number) {
        $.ajax({
            type: "POST",
            url: "https://api.blog.quidam.re/api/putArticle.php?id=" + id,
            dataType: "json",
            data: {
                'article_id': id,
                'title': title,
                'content': content,
                'user_id': userId
            },
            success: function (response) {
                let okText = "Article modified successfully";
                if (Array.isArray(response))
                    $('#response').html(okText);
                else $("#response").html('An error occurred');
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
                    if (Array.isArray(response)) {
                        alert("Article deleted successfully");
                        window.location.href = "http://127.0.0.1:5555/index.html"
                    }
                    else alert("Article not deleted. An error occurred.");
                },
                error: function (error) {
                    console.log(error);
                }
            });
    }

}