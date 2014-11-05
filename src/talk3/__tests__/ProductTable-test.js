/** @jsx React.DOM */

jest.dontMock('../ProductTable.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ProductTable = require('../ProductTable.js');

describe('ProductTable', function() {
    var productTable;
    var cars = [{
        category: 'cars',
        name: 'civvic',
        price: '$25000.00',
        stocked: false,
    }, {
        category: 'cars',
        name: 'corolla',
        price: '$29000.00',
        stocked: true,
    }];

    it('makes four rows when the filter is blank', function() {
        var productTable = TestUtils.renderIntoDocument(
            <ProductTable
                products={cars}
                filterText = {''}
                inStockOnly = {false}
             />
        );
        var tableRows = TestUtils.scryRenderedDOMComponentsWithTag(productTable, 'tr');
        expect(tableRows.length).toEqual(4);

        // spot-check
        expect(tableRows[0].getDOMNode().textContent).toEqual('NamePrice');
        expect(tableRows[1].getDOMNode().textContent).toEqual('cars');
        expect(tableRows[2].getDOMNode().textContent).toEqual('civvic$25000.00');
    });

    it('makes only three rows when the filter is useful', function() {
        var productTable = TestUtils.renderIntoDocument(
            <ProductTable
                products={cars}
                filterText = {'olla'}
                inStockOnly = {false}
             />
        );
        var tableRows = TestUtils.scryRenderedDOMComponentsWithTag(productTable, 'tr');
        expect(tableRows.length).toEqual(3);
        expect(tableRows[2].getDOMNode().textContent).toEqual('corolla$29000.00');
    });

    it('makes only two rows when the filter eliminates all', function() {
        var productTable = TestUtils.renderIntoDocument(
            <ProductTable
                products={cars}
                filterText = {'theraininspain'}
                inStockOnly = {false}
             />
        );
        var tableRows = TestUtils.scryRenderedDOMComponentsWithTag(productTable, 'tr');
        expect(tableRows.length).toEqual(1);
    });

    it('can filter based on stock', function() {
        var productTable = TestUtils.renderIntoDocument(
            <ProductTable
                products={cars}
                filterText = {''}
                inStockOnly = {true}
             />
        );
        var tableRows = TestUtils.scryRenderedDOMComponentsWithTag(productTable, 'tr');
        expect(tableRows.length).toEqual(3);
        expect(tableRows[2].getDOMNode().textContent).toEqual('corolla$29000.00');
    });
});
