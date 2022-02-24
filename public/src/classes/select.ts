import Categorie from "./select.js";
export default class FetchCategorie {
    static Selection () {
        console.log("dzq");
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getCategories.php",
            dataType: "JSON",
            success: function (response: any) {
                console.log(response);
                if (response.length > 0) {
                    console.log(response);
                    response.forEach(((Categorie: Categorie) => {
                        let newcategorie = new Categorie(Categorie.id, Categorie.label, Categorie.isdeleted);
                        let html = `<option value="${Categorie.id}">  ${Categorie.label}</option>`;
                        $('#categories')?.append(html);
                        
                    }));

                } else  {
                    let html = `<option> Aucune catégorie </option>`;
                }
                ;
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}