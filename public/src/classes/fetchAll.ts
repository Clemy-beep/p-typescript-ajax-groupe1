import Article  from "./article.js";
import User from "./user.js";
export default class FetchMultiple{
   static fetchArticles() {
        $.ajax({
            type: "GET",
            url: "https://api.blog.quidam.re/api/getArticles.php",
            dataType: "JSON",
            success: function (response:any) {
                if (response.length > 0) {
                    response.forEach(((article : Article) => {
                        article =  new Article(article.id, article.title, article.content, article.userId, article.isdeleted);
                        console.log(article);
                    }));
                } else $("#articles-list").html('No articles found.');
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}