/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    Blog.ArticleList = React.createClass({
        render: function() {
            var items = this.props.articles.map(function(article) {
                var href = "#article/" + article.id;
                
                return (
                    <li>
                        <a className="list-group-item" href={href}>
                            {article.getTitle()}
                        </a>
                    </li>
                );
            });
            
            return (
                <div className="col-md-3">
                    <h2>JS News</h2>
        
                    <ul className="list-group">
                        {items}
                    </ul>
                </div>
            );
        }
    });
})();