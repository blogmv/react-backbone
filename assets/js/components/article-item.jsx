/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    var Comments = Blog.CommentList;
    
    Blog.ArticleItem = React.createClass({
        componentDidUpdate: function() {
            this.props.article.comments.fetch();
        },
        
        render: function() {
            var article = this.props.article;
            
            return (
                <div className="col-md-9">
                    <article>
                        <h2>{article.getTitle()}</h2>
                        <p>{article.getContent()}</p>
                    </article>

                    <h2>Discussion</h2>
                    <Comments comments={article.comments} />
                </div>
            );
        }
    });
    
})();