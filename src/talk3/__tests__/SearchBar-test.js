/** @jsx React.DOM */

jest.dontMock('../SearchBar.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var SearchBar = require('../SearchBar.js');

describe('SearchBar', function() {

    it('creates a searchbar with the correct placeholder', function () {
        var searchBar = TestUtils.renderIntoDocument(
            <SearchBar />
        );
        var form = TestUtils.findRenderedDOMComponentWithTag(searchBar, 'form');
        var inputBoxes = TestUtils.scryRenderedDOMComponentsWithTag(searchBar, 'input');
        expect(inputBoxes.length).toEqual(2);
        var paragraph = TestUtils.findRenderedDOMComponentWithTag(searchBar, 'p');
        expect(paragraph.getDOMNode().textContent).toEqual('Only show products in stock');
    });

});
