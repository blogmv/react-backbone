/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    var Articles = Blog.Articles;
    var ArticleItem = Blog.ArticleItem;
    
    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "article/:id": "article"
        },
        
        initialize: function(callback) { // keeps an eye on callback
            this.articles = new Articles;
            this.articles.once("sync", function() {
                callback();
            });
            this.articles.fetch();
        },
        
        index: function() {
            var firstArticle = this.articles.at(0);
            
            React.renderComponent(
                <ArticleItem article={firstArticle} />,
                document.getElementById("blog")
            );
        },
        
        article: function(id) {
            console.log("a");
        }
    });
    
    new Router(function() {
        Backbone.history.start({
            pushState: false,
            hashChange: true
        });
    });
    
})();
