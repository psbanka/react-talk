/** @jsx React.DOM */

var React = require('react');

var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.filterText} />
                <p>
                    <input type="checkbox" value={this.props.inStockOnly} />
                    Only show products in stock
                </p>
            </form>
        );
    }
});

module.exports = SearchBar;
