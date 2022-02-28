import { Category } from './category.js';
import FetchMultiple from './fetchAll.js';
export default class Article {
    #id: number;
    #title: string;
    #content: string;
    #userId: number;
    #category: number;
    #isdeleted: boolean;

    constructor(id?: number, title?: string, content?: string, userId?: number, isdeleted?: boolean, category?: number) {
        this.#id = id ?? 0;
        this.#title = title ?? "";
        this.#content = content ?? "";
        this.#userId = userId ?? 0;
        this.#isdeleted = isdeleted ?? false;
        this.#category = category ?? 1;
    }

    get id() { return this.#id; }
    get title() { return this.#title; }
    get content() { return this.#content; }
    get isdeleted() { return this.#isdeleted; }
    get userId() { return this.#userId; }
    get category() { return this.#category }

    set id(id: number) { this.#id = id; }
    set title(title: string) { this.#title = title }
    set content(content: string) { this.#content = content }
    set userId(userId: number) { this.#userId = userId }
    set isdeleted(isdeleted: boolean) { this.#isdeleted = isdeleted }
    set category(category: number) { this.#category = category }

    createArticle(title: string, content: string, category: number, userId: number) {
        let formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("categorie", category.toString());
        formData.append("user_id", userId.toString());
        $.ajax({
            type: "POST",
            url: "https://api.blog.quidam.re//api/postArticle.php",
            dataType: "json",
            processData: false,
            contentType: false,
            data: formData,
            success: function (response) {
                console.log(response);
                let okText = "Article successfully published."
                if (!Array.isArray(response))
                    $("#response").html(okText);
                else $("#response").html("An error occurred.")
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    static fetchArticle(id: number): void {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getArticle.php?id=" + id,
            dataType: "JSON",
            success: function (response: any) {
                let article = new Article();
                response = response[0];
                console.log(response);
                article.title = response.title;
                article.content = response.content;
                article.isdeleted = response.isdeleted;
                article.category = response.categories;
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
        let formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('user_id', userId.toString());
        formData.append('article_id', id.toString());
        $.ajax({
            type: "POST",
            url: "https://api.blog.quidam.re/api/putArticle.php?id=" + id,
            dataType: "json",
            contentType: false,
            data: formData,
            processData: false,
            success: function (response) {
                console.log(response);
                let okText = "Article modified successfully";
                if (response.message == "Modification effectué") {
                    alert(okText);
                    window.location.href = "http://127.0.0.1:5555/public/views/article.html?id=" + id;
                }
                else {
                    $("#response").html('An error occurred')
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    deleteArticle(id: number) {
        let formData = new FormData();
        formData.append('user_id', id.toString());
        let conf = confirm("Are you sure you want to delete this article ?");
        if (conf)
            $.ajax({
                type: "POST",
                url: "https://api.blog.quidam.re/api/deleteArticle.php?id=" + id,
                dataType: "JSON",
                data: formData,
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