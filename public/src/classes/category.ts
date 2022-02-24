export class Category {
    #id: number;
    #label: string;
    #isdeleted: boolean;

    constructor(id?: number, name?: string, isdeleted?: boolean) {
        this.#id = id ?? 0;
        this.#label = name ?? "";
        this.#isdeleted = isdeleted ?? false;
    }

    get id() { return this.#id; }
    get label() { return this.#label; }
    get isdeleted() { return this.#isdeleted; }

    set id(id: number) { this.#id = id; }
    set label(name: string) { this.#label = name }
    set isdeleted(isdeleted: boolean) { this.#isdeleted = isdeleted }

    createCategory(label: string) { }

    deleteCategory(id: number) { }
}