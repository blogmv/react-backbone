var Blog = Blog || {};

(function() {
    "use strict";
    
    var Article = Blog.Article;
    var Articles = Blog.Articles;
    
    Blog.Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "article/:id": "article"
        },
        
        initialize: function(callback) { // keeps an eye on callback
            this.article = new Article;
            this.articles = new Articles;
            
            this.articles.once("sync", function() {
                callback();
            });
            this.articles.fetch();
        },
        
        index: function() {
            this.article = this.articles.at(0);
        },
        
        article: function(id) {
            this.article = this.articles.get(id);
        }
    });
    
})();