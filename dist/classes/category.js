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
var _Category_id, _Category_label, _Category_isdeleted;
export class Category {
    constructor(id, label, isdeleted) {
        _Category_id.set(this, void 0);
        _Category_label.set(this, void 0);
        _Category_isdeleted.set(this, void 0);
        __classPrivateFieldSet(this, _Category_id, id ?? 0, "f");
        __classPrivateFieldSet(this, _Category_label, label ?? "", "f");
        __classPrivateFieldSet(this, _Category_isdeleted, isdeleted ?? false, "f");
    }
    get id() { return __classPrivateFieldGet(this, _Category_id, "f"); }
    get label() { return __classPrivateFieldGet(this, _Category_label, "f"); }
    get isdeleted() { return __classPrivateFieldGet(this, _Category_isdeleted, "f"); }
    set id(id) { __classPrivateFieldSet(this, _Category_id, id, "f"); }
    set label(label) { __classPrivateFieldSet(this, _Category_label, label, "f"); }
    set isdeleted(isdeleted) { __classPrivateFieldSet(this, _Category_isdeleted, isdeleted, "f"); }
    createCategory(label) {
        $.ajax({
            type: "POST",
            url: "https://api.blog.quidam.re/api/postCategorie.php",
            dataType: "JSON",
            data: {
                "label": label,
            },
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
    deleteCategory(id) {
    }
}
_Category_id = new WeakMap(), _Category_label = new WeakMap(), _Category_isdeleted = new WeakMap();
//# sourceMappingURL=category.js.map