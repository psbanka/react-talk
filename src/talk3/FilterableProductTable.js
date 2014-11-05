/** @jsx React.DOM */

var React = require('react');

var ProductTable = require('./ProductCategoryRow');

var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    Only show products in stock
                </p>
            </form>
        );
    }
});

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
