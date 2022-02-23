import User from './user.js';

export default class Article {
    #id : number;
    #title:string;
    #content:string;
    #user:User;
    #isdeleted:boolean;

    constructor(id:number, title:string, content:string, user:User, isdeleted:boolean) {
        this.#id = id;
        this.#title = title;
        this.#content = content;
        this.#user = new User();
        this.#isdeleted = isdeleted;
    }

    get id() { return this.#id; }
    get title() { return this.#title; }
    get content() { return this.#content; }
    get isdeleted() { return this.#isdeleted; }
    get user() { return this.#user; }

    set id(id:number) { this.#id = id;}
    set title(title:string) { this.#title = title}
    set content(content:string) {this.#content = content}
    set user(user:User){ this.#user = user}
    set isdeleted(isdeleted:boolean) { this.#isdeleted = isdeleted}
}