export default class User{
    #userId?: number;
    #username?: string;

    constructor(userId?: number, username?: string){
        this.#userId = userId;
        this.#username = username;
    }

    get userId(): number {return this.#userId ?? 0;}
    get username(): string {return this.#username ?? "";}
    set username(value: string) {this.#username = value;}
    set userId(userId : number) {this.#userId = userId;}
}