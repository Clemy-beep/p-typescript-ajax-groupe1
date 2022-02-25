
export default class Article {
    #id: number;
    #title: string;
    #content: string;
    #userId: number;
    #isdeleted: boolean;

    constructor(id?: number, title?: string, content?: string, userId?: number, isdeleted?: boolean) {
        this.#id = id ?? 0;
        this.#title = title ?? "";
        this.#content = content ?? "";
        this.#userId = userId ?? 0;
        this.#isdeleted = isdeleted ?? false;
    }

    get id() { return this.#id; }
    get title() { return this.#title; }
    get content() { return this.#content; }
    get isdeleted() { return this.#isdeleted; }
    get userId() { return this.#userId; }

    set id(id: number) { this.#id = id; }
    set title(title: string) { this.#title = title }
    set content(content: string) { this.#content = content }
    set userId(userId: number) { this.#userId = userId }
    set isdeleted(isdeleted: boolean) { this.#isdeleted = isdeleted }

    createArticle() {}

    fetchArticle(id: number) { }

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
     

    deleteArticle(id: number) { }

}