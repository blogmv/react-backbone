/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    var Article = Blog.ArticleItem;
    
    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "article/:id": "article"
        },
        
        initialize: function() {
            
        },
        
        index: function() {
            React.renderComponent(
                <Article />,
                document.getElementById("blog")
            );
        },
        
        article: function(id) {
            console.log("a");
        }
    });
    
    new Router;
    
    Backbone.history.start({
        pushState: false,
        hashChange: true
    });
})();
