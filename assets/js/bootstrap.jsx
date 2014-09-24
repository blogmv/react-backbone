/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    var ArticleList = Blog.ArticleList;
    var ArticleItem = Blog.ArticleItem;
    
    var Bootstrap = React.createClass({
        componentDidMount: function() {
            this.props.router.on("route", function() {
                this.forceUpdate();
            }.bind(this));
        },
        
        render: function() {    
            var article = this.props.router.article;
            var articles = this.props.router.articles;
            
            return (
                <div className="row">
                    <ArticleList articles={articles} />
                    <ArticleItem article={article} />
                </div>
            );
        }
    });
    
    var router = new Blog.Router(function() {
        Backbone.history.start({
            pushState: false,
            hashChange: true
        });
    });
    
    React.renderComponent(
        <Bootstrap router={router} />,
        document.getElementById("blog")
    );
})();