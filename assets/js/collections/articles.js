var Blog = Blog || {};

(function() {
    "use strict";
    
    var Article = Blog.Article;
    
    Blog.Articles = Backbone.Collection.extend({
        model: Article,
        url: "http://blogmv-api.appspot.com/api/articles/",
    });
    
})();