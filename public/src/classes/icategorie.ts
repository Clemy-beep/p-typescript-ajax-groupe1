import {Category} from "../classes/category.js";

$("#submit-cat").on("submit", function (e : Event){
    e.preventDefault();
    let category = new Category();
    category.label = <string>$("#category").val();
    category.createCategory(category.label);
})