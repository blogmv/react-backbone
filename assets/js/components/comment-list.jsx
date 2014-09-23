/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    var Item = Blog.CommentItem;
    
    Blog.CommentList = React.createClass({
        componentWillMount: function() {
            this.props.comments.on("sync", function() {
                this.forceUpdate();
            }.bind(this));
            this.props.comments.fetch();
        },
        render: function() {
            var items = this.props.comments.map(function(comment) {
                return <Item comment={comment} />;
            });
            return (
                <ul className="discussion">
                    {items}
                </ul>
            );
        }
    });
})();