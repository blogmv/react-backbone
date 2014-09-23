/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    Blog.CommentItem = React.createClass({
        render: function() {
            var comment = this.props.comment;
            
            return (
                <li>
                    <b>{comment.getAuthorName()}</b>
                    <p>{comment.getContent()}</p>
                </li>
            );
        }
    });
})();