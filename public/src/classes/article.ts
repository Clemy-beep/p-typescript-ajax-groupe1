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
                response.categories.forEach((category: any) => {
                    console.log(category);

                });
                console.log(article.title ?? "o");
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

    editArticle(id: number) { }

    deleteArticle(id: number) { }

}