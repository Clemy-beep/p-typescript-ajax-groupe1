export class Category {
    #id: number;
    #label: string;
    #isdeleted: boolean;


    constructor(id?: number, label?: string, isdeleted?: boolean) {
        this.#id = id ?? 0;
        this.#label = label ?? "";
        this.#isdeleted = isdeleted ?? false;
    }

    get id() { return this.#id; }
    get label() { return this.#label; }
    get isdeleted() { return this.#isdeleted; }
    set id(id: number) { this.#id = id; }
    set label(label: string) { this.#label = label }
    set isdeleted(isdeleted: boolean) { this.#isdeleted = isdeleted }

    createCategory(label: string) {
        let formData = new FormData();
        formData.append('label', label);
        console.log("test");
        $.ajax({
            type: "POST",
            url: "https://api.blog.quidam.re/api/postCategorie.php?label=" + label,
            dataType: "JSON",
            data: formData,
            contentType: false,
            processData: false,
            success: function (response: any) {
                console.log(response);
                console.log("test");
                if (Array.isArray(response))
                    alert("An error occurred.")
                else
                    window.location.href = "http://127.0.0.1:5555/public/views/categories.html"

            },
            error: function (error) {
                console.log(error)
            }
        });
    }

    deleteCategory(id: number) {
        let conf = confirm("Are you sure you want to delete this category ?")
        if (conf) {
            let formData = new FormData();
            formData.append('categorie_id', id.toString());
            $.ajax({
                type: "POST",
                url: "https://api.blog.quidam.re/api/deleteCategorie.php",
                dataType: "JSON",
                data: formData,
                processData:false,
                contentType: false,
                success: function (response: any) {
                    console.log(response);
                    console.log("test");
                    $("#response").html('Category deleted');
                    window.location.href = "http://127.0.0.1:5555/public/views/categories.html"
                },
                error: function (error) {
                    console.log(error)
                }
            });
        }
    }
}