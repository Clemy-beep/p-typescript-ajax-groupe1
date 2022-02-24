export class Category {
    #id : number;
    #label:string;
    #isdeleted:boolean;

    constructor(id?: number, label?: string, isdeleted?: boolean) {
        this.#id = id ?? 0;
        this.#label = label ?? "";
        this.#isdeleted = isdeleted ?? false;
    }

    get id() { return this.#id; }
    get label() { return this.#label; }
    get isdeleted() { return this.#isdeleted; }

    set id(id:number) { this.#id = id;}
    set label(label:string) { this.#label = label}
    set isdeleted(isdeleted:boolean) { this.#isdeleted = isdeleted}

    createCategory(){}

    fetchCategory(id:number){}

    deleteCategory(id:number){}
}