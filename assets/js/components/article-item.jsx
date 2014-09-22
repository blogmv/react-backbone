/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    Blog.ArticleItem = React.createClass({
        render: function() {
            var article = this.props.article;
            
            return (
                <div className="row">
                    <div className="col-md-3">
                        <p>huehue</p>
                    </div>
                    <div className="col-md-9">
                        <h1>{article.getTitle()}</h1>
                    </div>
                </div>
            );
        }
    });
    
})();