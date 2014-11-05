/** @jsx React.DOM */

jest.dontMock('../SearchBar.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var SearchBar = require('../SearchBar.js');

function logObject(o) {
    var cache = [];
    var output = JSON.stringify(o, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                // Circular reference found, discard key
                return;
            }
            cache.push(value);
        }
        return value;
    }, 2);
    cache = null;
    console.log(output);
}

describe('SearchBar', function() {

    it('creates a searchbar with the correct placeholder', function () {
        var filterText = '';
        var inStockOnly = false;
        var searchBar = TestUtils.renderIntoDocument(
            <SearchBar
                filterText = {filterText}
                inStockOnly = {inStockOnly}
            />
        );

        var form = TestUtils.findRenderedDOMComponentWithTag(searchBar, 'form');
        var inputBoxes = TestUtils.scryRenderedDOMComponentsWithTag(searchBar, 'input');
        expect(inputBoxes.length).toEqual(2);
        var paragraph = TestUtils.findRenderedDOMComponentWithTag(searchBar, 'p');
        expect(paragraph.getDOMNode().textContent).toEqual('Only show products in stock');
    });

    it('has the proper initial search text', function () {
        var filterText = 'cheese';
        var inStockOnly = false;
        var searchBar = TestUtils.renderIntoDocument(
            <SearchBar
                filterText = {filterText}
                inStockOnly = {inStockOnly}
             />
        );
        expect(searchBar.props.filterText).toEqual('cheese');
    });

});
