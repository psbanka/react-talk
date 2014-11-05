/** @jsx React.DOM */

var React = require('react');

var ProductTable = require('./ProductTable');
var SearchBar = require('./SearchBar');

var FilterableProductTable = React.createClass({
    getInitialState: function () {
        return {
            filterText: '',
            inStockOnly: false,
        };
    },

    render: function() {
        return (
            <div>
                <SearchBar
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                />
                <ProductTable
                    products={this.props.products}
                    filterText = {this.state.filterText}
                    inStockOnly = {this.state.inStockOnly}
                />
            </div>
        );
    }
});

module.exports = FilterableProductTable;
