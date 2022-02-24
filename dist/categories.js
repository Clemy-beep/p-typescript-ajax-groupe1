import { Category } from './classes/category.js';
$("#submit-cat").on("submit", function (e) {
    e.preventDefault();
    let label = $("#category").val();
    let category = new Category();
    //category.createCategory(label);
});
//# sourceMappingURL=categories.js.map