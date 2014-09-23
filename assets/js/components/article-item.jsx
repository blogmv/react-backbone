/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    var Comments = Blog.CommentList;
    
    Blog.ArticleItem = React.createClass({
        render: function() {
            var article = this.props.article;
            
            return (
                <div className="row">
                    <div className="col-md-3">
                        <h2>JS News</h2>
                        <ul className="list-group">
                        </ul>
                    </div>
                    <div className="col-md-9">
                        <article>
                            <h2>{article.getTitle()}</h2>
                            <p>{article.getContent()}</p>
                        </article>
        
                        <h2>Discussion</h2>
                        <Comments comments={article.comments} />
                    </div>
                </div>
            );
        }
    });
    
})();