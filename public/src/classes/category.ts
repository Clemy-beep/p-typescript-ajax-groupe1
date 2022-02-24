export class Category {
    #id: number;
    #name: string;
    #isdeleted: boolean;

    constructor(id?: number, name?: string, isdeleted?: boolean) {
        this.#id = id ?? 0;
        this.#name = name ?? "";
        this.#isdeleted = isdeleted ?? false;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get isdeleted() { return this.#isdeleted; }

    set id(id: number) { this.#id = id; }
    set name(name: string) { this.#name = name }
    set isdeleted(isdeleted: boolean) { this.#isdeleted = isdeleted }

    createCategory(label: string) { }

    deleteCategory(id: number) { }
}