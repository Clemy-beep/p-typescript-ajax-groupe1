import {Category} from "../classes/category.js";

$("#submit-cat").on("click", function (e : Event){
    e.preventDefault();
    let category = new Category();
    category.label = <string>$("#category").val();
    category.createCategory(category.label);
})