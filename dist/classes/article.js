var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Article_id, _Article_title, _Article_content, _Article_userId, _Article_category, _Article_isdeleted;
export default class Article {
    constructor(id, title, content, userId, isdeleted, category) {
        _Article_id.set(this, void 0);
        _Article_title.set(this, void 0);
        _Article_content.set(this, void 0);
        _Article_userId.set(this, void 0);
        _Article_category.set(this, void 0);
        _Article_isdeleted.set(this, void 0);
        __classPrivateFieldSet(this, _Article_id, id ?? 0, "f");
        __classPrivateFieldSet(this, _Article_title, title ?? "", "f");
        __classPrivateFieldSet(this, _Article_content, content ?? "", "f");
        __classPrivateFieldSet(this, _Article_userId, userId ?? 0, "f");
        __classPrivateFieldSet(this, _Article_isdeleted, isdeleted ?? false, "f");
        __classPrivateFieldSet(this, _Article_category, category ?? 1, "f");
    }
    get id() { return __classPrivateFieldGet(this, _Article_id, "f"); }
    get title() { return __classPrivateFieldGet(this, _Article_title, "f"); }
    get content() { return __classPrivateFieldGet(this, _Article_content, "f"); }
    get isdeleted() { return __classPrivateFieldGet(this, _Article_isdeleted, "f"); }
    get userId() { return __classPrivateFieldGet(this, _Article_userId, "f"); }
    get category() { return __classPrivateFieldGet(this, _Article_category, "f"); }
    set id(id) { __classPrivateFieldSet(this, _Article_id, id, "f"); }
    set title(title) { __classPrivateFieldSet(this, _Article_title, title, "f"); }
    set content(content) { __classPrivateFieldSet(this, _Article_content, content, "f"); }
    set userId(userId) { __classPrivateFieldSet(this, _Article_userId, userId, "f"); }
    set isdeleted(isdeleted) { __classPrivateFieldSet(this, _Article_isdeleted, isdeleted, "f"); }
    set category(category) { __classPrivateFieldSet(this, _Article_category, category, "f"); }
    createArticle(title, content, category, userId) {
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
                let okText = "Article successfully published.";
                if (!Array.isArray(response))
                    $("#response").html(okText);
                else
                    $("#response").html("An error occurred.");
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    static fetchArticle(id) {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getArticle.php?id=" + id,
            dataType: "JSON",
            success: function (response) {
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
                }
                else
                    $("#article-title").html("Article has been deleted");
                return article;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    editArticle(id, title, content, userId) {
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
                    $("#response").html('An error occurred');
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    deleteArticle(id) {
        let formData = new FormData();
        formData.append('user_id', id.toString());
        let conf = confirm("Are you sure you want to delete this article ?");
        if (conf)
            $.ajax({
                type: "POST",
                url: "https://api.blog.quidam.re/api/deleteArticle.php?id=" + id,
                dataType: "JSON",
                data: formData,
                success: function (response) {
                    console.log(response);
                    if (Array.isArray(response)) {
                        alert("Article deleted successfully");
                        window.location.href = "http://127.0.0.1:5555/index.html";
                    }
                    else
                        alert("Article not deleted. An error occurred.");
                },
                error: function (error) {
                    console.log(error);
                }
            });
    }
}
_Article_id = new WeakMap(), _Article_title = new WeakMap(), _Article_content = new WeakMap(), _Article_userId = new WeakMap(), _Article_category = new WeakMap(), _Article_isdeleted = new WeakMap();
//# sourceMappingURL=article.js.map