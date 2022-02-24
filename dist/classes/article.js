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
var _Article_id, _Article_title, _Article_content, _Article_userId, _Article_isdeleted;
export default class Article {
    constructor(id, title, content, userId, isdeleted) {
        _Article_id.set(this, void 0);
        _Article_title.set(this, void 0);
        _Article_content.set(this, void 0);
        _Article_userId.set(this, void 0);
        _Article_isdeleted.set(this, void 0);
        __classPrivateFieldSet(this, _Article_id, id ?? 0, "f");
        __classPrivateFieldSet(this, _Article_title, title ?? "", "f");
        __classPrivateFieldSet(this, _Article_content, content ?? "", "f");
        __classPrivateFieldSet(this, _Article_userId, userId ?? 0, "f");
        __classPrivateFieldSet(this, _Article_isdeleted, isdeleted ?? false, "f");
    }
    get id() { return __classPrivateFieldGet(this, _Article_id, "f"); }
    get title() { return __classPrivateFieldGet(this, _Article_title, "f"); }
    get content() { return __classPrivateFieldGet(this, _Article_content, "f"); }
    get isdeleted() { return __classPrivateFieldGet(this, _Article_isdeleted, "f"); }
    get userId() { return __classPrivateFieldGet(this, _Article_userId, "f"); }
    set id(id) { __classPrivateFieldSet(this, _Article_id, id, "f"); }
    set title(title) { __classPrivateFieldSet(this, _Article_title, title, "f"); }
    set content(content) { __classPrivateFieldSet(this, _Article_content, content, "f"); }
    set userId(userId) { __classPrivateFieldSet(this, _Article_userId, userId, "f"); }
    set isdeleted(isdeleted) { __classPrivateFieldSet(this, _Article_isdeleted, isdeleted, "f"); }
    createArticle() { }
    fetchArticle(id) { }
    editArticle(id) { }
    deleteArticle(id) { }
}
_Article_id = new WeakMap(), _Article_title = new WeakMap(), _Article_content = new WeakMap(), _Article_userId = new WeakMap(), _Article_isdeleted = new WeakMap();
//# sourceMappingURL=article.js.map