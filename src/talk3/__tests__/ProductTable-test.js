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
        stocked: true,
    }, {
        category: 'cars',
        name: 'corolla',
        price: '$29000.00',
        stocked: false,
    }];

    it('makes four rows', function() {
        var productTable = TestUtils.renderIntoDocument(
            <ProductTable products={cars} />
        );
        var tableRows = TestUtils.scryRenderedDOMComponentsWithTag(productTable, 'tr');
        expect(tableRows.length).toEqual(4);

        // spot-check
        expect(tableRows[0].getDOMNode().textContent).toEqual('NamePrice');
        expect(tableRows[1].getDOMNode().textContent).toEqual('cars');
        expect(tableRows[2].getDOMNode().textContent).toEqual('civvic$25000.00');
    });
});
