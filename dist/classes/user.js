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
var _User_userId, _User_username;
export default class User {
    constructor(userId, username) {
        _User_userId.set(this, void 0);
        _User_username.set(this, void 0);
        __classPrivateFieldSet(this, _User_userId, userId, "f");
        __classPrivateFieldSet(this, _User_username, username, "f");
    }
    get userId() { return __classPrivateFieldGet(this, _User_userId, "f") ?? 0; }
    get username() { return __classPrivateFieldGet(this, _User_username, "f") ?? ""; }
    set username(value) { __classPrivateFieldSet(this, _User_username, value, "f"); }
    set userId(userId) { __classPrivateFieldSet(this, _User_userId, userId, "f"); }
    static getUser() {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getUser.php",
            dataType: "JSON",
            success: function (response) {
                console.log(response);
                if (response.length > 0) {
                    console.log(response);
                    response.forEach((utilisateur) => {
                        let newUser = new User(utilisateur.userId);
                        let html = `<a style="display:block" href="./public/views/user-profile.html?id=${utilisateur.userId}">${utilisateur.username}</a>`;
                        $('#Username')?.append(html);
                    });
                }
                else
                    $('#Username').html('no user found');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}
_User_userId = new WeakMap(), _User_username = new WeakMap();
//# sourceMappingURL=user.js.map