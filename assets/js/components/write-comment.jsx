/** @jsx React.DOM */
var Blog = Blog || {};

(function() {
    "use strict";
    
    Blog.WriteComment = React.createClass({
        getInitialState: function() {
            return {
                name: "",
                email: "",
                text: ""
            }
        },
        
        render: function() {
            return (
                <section className="comments">
                    <h3>Write a comment</h3>

                    <form role="form" onSubmit={this.handleSubmit}>
                        <div className="form-group col-md-6">
                            <input
                                type="text"
                                className="form-control input-lg"
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-6">
                            <input 
                                type="email"
                                className="form-control input-lg" 
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange} />
                        </div>

                        <div className="form-group col-md-12">
                            <textarea 
                                className="form-control input-lg" 
                                placeholder="Comment"
                                name="text" 
                                value={this.state.text}
                                onChange={this.handleChange} />
                            <button className="btn btn-lg btn-primary btn-block" type="submit">Post comment</button>
                        </div>
                    </form>
                </section>
            );
        },
        
        handleSubmit: function(e) {
            e.preventDefault();
            
            this.props.onSave(this.state);
            
            this.setState({
                name: "",
                email: "",
                text: ""
            });
        },
        
        handleChange: function(e) {
            var input = {};
            input[e.target.name] = e.target.value;
            this.setState(input);
        }
    });
})();