var React = require('react');
var PropTypes = React.PropTypes;
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var Navigation = require('../components/Navigation');
var Toggle = require('../components/Toggle');
var Content = require('../components/Content');

var App = React.createClass({
  render: function () {
    return (
      <div id="wrapper">
        <Navigation />
        <Toggle />
        <Content />
      </div>
    );
  }
});

var mapStateToProps = function (state) {
  return state;
};

module.exports = connect(mapStateToProps)(App);

