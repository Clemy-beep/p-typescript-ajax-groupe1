import { Category } from "../classes/category.js";
$("#submit-cat").on("submit", function (e) {
    e.preventDefault();
    let category = new Category();
    category.label = $("#category").val();
    category.createCategory(category.label);
});
//# sourceMappingURL=icategorie.js.map