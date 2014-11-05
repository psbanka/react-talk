/** @jsx React.DOM */
var React = require('react');
var Hello = require('./hello.js');
 
window.app = (function() {
    return React.render(<Hello name="Sweetie-cakes" />, document.body);
})();
