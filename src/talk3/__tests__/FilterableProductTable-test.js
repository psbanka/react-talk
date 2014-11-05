/** @jsx React.DOM */

jest.dontMock('../ProductTable.js');
jest.dontMock('../FilterableProductTable.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var FilterableProductTable = require('../FilterableProductTable.js');

var PRODUCTS = [{
    category: 'thing',
    name: 'glove',
    price: '$0.50',
    stocked: true,
}];

describe('FilterableProductTable', function() {
    it('creates the entire table', function () {
        filterableProductTable = TestUtils.renderIntoDocument(
            <FilterableProductTable products={PRODUCTS} />
        );
        var rows = TestUtils.scryRenderedDOMComponentsWithTag(filterableProductTable, 'tr');
        expect(rows.length).toEqual(3);
    });
});
