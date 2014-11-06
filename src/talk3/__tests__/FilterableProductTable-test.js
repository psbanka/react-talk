/** @jsx React.DOM */

jest.dontMock('../ProductTable.js');
jest.dontMock('../FilterableProductTable.js');
jest.dontMock('../SearchBar.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var FilterableProductTable = require('../FilterableProductTable.js');
var SearchBar = require('../SearchBar.js');

var PRODUCTS = [
    {category: 'thing', name: 'glove', price: '$0.50', stocked: true},
    {category: 'thing', name: 'spam', price: '$1.50', stocked: true},
    {category: 'thing', name: 'glam', price: '$9.50', stocked: false},
    {category: 'thing', name: 'blam', price: '$99.00', stocked: true},
    {category: 'thing', name: 'sham', price: '$0.20', stocked: true},
];

describe('FilterableProductTable', function() {
    it('creates the entire table', function () {
        filterableProductTable = TestUtils.renderIntoDocument(
            <FilterableProductTable
                products={PRODUCTS}
                filterText = {''}
                inStockOnly = {false}
             />
        );
        var rows = TestUtils.scryRenderedDOMComponentsWithTag(filterableProductTable, 'tr');
        expect(rows.length).toEqual(7);
    });

    it('searches the table for proper stuff', function() {
        filterableProductTable = TestUtils.renderIntoDocument(
            <FilterableProductTable
                products={PRODUCTS}
                filterText = {''}
                inStockOnly = {false}
             />
        );
        /*
        // var inputDomElement = document.querySelectorAll('#search-box')[0];
        // console.log('>>>>>>>>>>>>>' + inputDomElement.innerHTML);
        var inputObjects = TestUtils.scryRenderedDOMComponentsWithTag(filterableProductTable, 'input');
        var inputDomElement = inputObjects[0];
        console.log('>>>>>>>>>>>>> ' + inputDomElement.textContent);
        var inputBox = inputObjects[0];
        // TestUtils.Simulate.keyUp(inputBox, {key: 'a'});
        TestUtils.Simulate.change(inputBox, {target: {value: 'a'}});
        console.log('>>>>>>>>>>>>> ' + inputDomElement.textContent);
        inputDomElement.textContent);
        var rows = TestUtils.scryRenderedDOMComponentsWithTag(filterableProductTable, 'tr');
        expect(rows.length).toEqual(6);
        */
        var el = document.querySelectorAll('#search-box')[0];
        //var event = document.createEvent('HTMLEvents');
        var rows = TestUtils.scryRenderedDOMComponentsWithTag(filterableProductTable, 'tr');
        // expect(rows.length).toEqual(6);
    });
});
