"use strict";
function getAllArticles() {
    $.ajax({
        type: "GET",
        url: "https://api.blog.quidam.re/api/getArticles.php",
        dataType: "JSON",
        success: function (response) {
            console.log(response);
        }
    });
}
getAllArticles();
//# sourceMappingURL=index.js.map