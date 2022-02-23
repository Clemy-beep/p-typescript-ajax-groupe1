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
var _Article_id, _Article_title, _Article_content, _Article_user, _Article_isdeleted;
import User from './user.js';
export default class Article {
    constructor(id, title, content, user, isdeleted) {
        _Article_id.set(this, void 0);
        _Article_title.set(this, void 0);
        _Article_content.set(this, void 0);
        _Article_user.set(this, void 0);
        _Article_isdeleted.set(this, void 0);
        __classPrivateFieldSet(this, _Article_id, id, "f");
        __classPrivateFieldSet(this, _Article_title, title, "f");
        __classPrivateFieldSet(this, _Article_content, content, "f");
        __classPrivateFieldSet(this, _Article_user, new User(), "f");
        __classPrivateFieldSet(this, _Article_isdeleted, isdeleted, "f");
    }
    get id() { return __classPrivateFieldGet(this, _Article_id, "f"); }
    get title() { return __classPrivateFieldGet(this, _Article_title, "f"); }
    get content() { return __classPrivateFieldGet(this, _Article_content, "f"); }
    get isdeleted() { return __classPrivateFieldGet(this, _Article_isdeleted, "f"); }
    get user() { return __classPrivateFieldGet(this, _Article_user, "f"); }
    set id(id) { __classPrivateFieldSet(this, _Article_id, id, "f"); }
    set title(title) { __classPrivateFieldSet(this, _Article_title, title, "f"); }
    set content(content) { __classPrivateFieldSet(this, _Article_content, content, "f"); }
    set user(user) { __classPrivateFieldSet(this, _Article_user, user, "f"); }
    set isdeleted(isdeleted) { __classPrivateFieldSet(this, _Article_isdeleted, isdeleted, "f"); }
}
_Article_id = new WeakMap(), _Article_title = new WeakMap(), _Article_content = new WeakMap(), _Article_user = new WeakMap(), _Article_isdeleted = new WeakMap();
//# sourceMappingURL=article.js.map