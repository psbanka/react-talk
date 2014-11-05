/** @jsx React.DOM */

jest.dontMock('../hello.js');
var React = require('react/addons');
var Hello = require('../hello.js');
var TestUtils = React.addons.TestUtils;

describe('hello', function() {

    it('makes a proper greeting', function() {
        var hello = TestUtils.renderIntoDocument(
            <Hello name="John" />
        );

        var helloItem = TestUtils.findRenderedDOMComponentWithTag(hello, 'div');
        
        var domNode = helloItem.getDOMNode();
        expect(helloItem.getDOMNode().textContent).toEqual('Hello John');
    });

});
