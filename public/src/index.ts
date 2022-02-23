function getAllArticles() {
    $.ajax({
        type: "GET",
        url: "https://api.blog.quidam.re/api/getArticles.php",
        dataType: "JSON",
        success: function (response: any) {
            console.log(response);
            if (response.length > 0) {
                //TODO : treat response;
                response.forEach();
            } else $("#articles-list").html('No articles found.');
        },
        error: function (error) {
            console.log(error);
        }
    });
}

getAllArticles();