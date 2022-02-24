
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

    fetchArticle(id: number) {}

    editArticle(id: number) { }

    deleteArticle(id: number) { }

}