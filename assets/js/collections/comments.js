var Blog = Blog || {};

(function() {
    "use strict";
    
    var Comment = Blog.Comment;
    
    Blog.Comments = Backbone.Collection.extend({
        model: Comment,
        url: function() {
            return "http://blogmv-api.appspot.com/api/articles/" + this.article.id + "/comments/";
        },
        
        initialize: function(models, options) {
            this.article = options.article;
        }
    });
})();