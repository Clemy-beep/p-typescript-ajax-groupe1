import { Category } from "./classes/category.js";
import FetchMultiple from "./classes/fetchAll.js";

FetchMultiple.Categorie();

$('#submit-cat').on('submit', function (e: Event) {
    e.preventDefault();
    let category = new Category();
    category.label = <string>$("category").val();
    category.createCategory(category.label);
})


let btn = document.getElementById('delete-category');

