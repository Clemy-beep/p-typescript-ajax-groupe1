import Article from "./article.js";
export default class FetchMultiple {
    static fetchArticles() {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getArticles.php",
            dataType: "JSON",
            success: function (response: any) {
                console.log(response);
                if (response.length > 0) {
                    console.log(response);
                    response.forEach(((article: Article) => {
                        let newarticle = new Article(article.id, article.title, article.content, article.userId, article.isdeleted);
                        let html = `<a style="display:block" href="./public/views/article.html?id=${newarticle.id}">${newarticle.title}</a>`;
                        if (!article.isdeleted)
                            $('#articles-list')?.append(html);
                    }));
                } else $("#articles-list").html('No articles found.');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}