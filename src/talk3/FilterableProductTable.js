/** @jsx React.DOM */

var React = require('react');

var ProductTable = require('./ProductTable');
var SearchBar = require('./SearchBar');

var FilterableProductTable = React.createClass({
    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});

module.exports = FilterableProductTable;
