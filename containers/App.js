var React = require('react');
var PropTypes = React.PropTypes;
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var ToggleActions = require('../actions/ToggleActions');
var Navigation = require('../components/Navigation');
var Toggle = require('../components/Toggle');
var Content = require('../components/Content');

var App = React.createClass({
  render: function () {
    var menuIsOpen = this.props.toggle.menuIsOpen;
    var dispatch = this.props.dispatch;
    var actions = bindActionCreators(ToggleActions, dispatch);

    return (
      <div id="wrapper" className={menuIsOpen ? "" : "toggled"}>
        <Navigation />
        <Toggle menuIsOpen={menuIsOpen}
                closeMenu={actions.closeMenu}
                openMenu={actions.openMenu} />
        <Content />
      </div>
    );
  }
});

var mapStateToProps = function (state) {
  return {
    toggle: state.toggle
  }
};

module.exports = connect(mapStateToProps)(App);

