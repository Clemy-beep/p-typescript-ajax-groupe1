export default class User{
    #userId?: number;
    #username?: string;

    get userId(): number {return this.#userId ?? 0;}
    get username(): string {return this.#username ?? "";}
    set username(value: string) {this.#username = value;}
    set userId(userId : number) {this.#userId = userId;}
}