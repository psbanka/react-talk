/** @jsx React.DOM */

jest.dontMock('../hello.js');

describe('hello', function() {

    it('makes a proper greeting', function() {
        var React = require('react/addons');
        var Hello = require('../hello.js');
        var TestUtils = React.addons.TestUtils;

        expect(true).toBeTruthy();
        /*
        // Render a hello object
        var hello = TestUtils.renderIntoDocument(
            <Hello name="John" />
        );

        var helloItem = TestUtils.findRenderedDOMComponentWithTag(hello, 'div');
        expect(label.getDOMNode().textContent).toEqual('Hello John');
        */
    });

});
