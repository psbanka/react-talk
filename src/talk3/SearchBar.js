/** @jsx React.DOM */

var React = require('react');

var SearchBar = React.createClass({
    handleChange: function() {
        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value,
            this.refs.inStockOnlyInput.getDOMNode().checked
        );
    },
    render: function() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                    id="search-box"
                />
                <p>
                    <input
                        type="checkbox"
                        value={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                        id="check-box"
                    />
                    Only show products in stock
                </p>
            </form>
        );
    }
});

module.exports = SearchBar;
