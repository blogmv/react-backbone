var Blog = Blog || {};

(function() {
    "use strict";
    
    var Comments = Blog.Comments;
    
    Blog.Article = Backbone.Model.extend({
        initialize: function() {
            this.comments = new Comments([], {
                article: this
            });
        },
        
        getTitle: function() {
            return this.get("title");
        },
        
        getContent: function() {
            return this.get("content");
        }
    });
    
})();