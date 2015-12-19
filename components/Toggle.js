var React = require('react');
var PropTypes = React.PropTypes;

var Toggle = React.createClass({
  propTypes: {
    menuIsOpen: PropTypes.bool,
    openMenu: PropTypes.func,
    closeMenu: PropTypes.func
  },

  toggle: function () {
    var isOpen = this.props.menuIsOpen;
    if (isOpen) {
      this.props.closeMenu();
    } else {
      this.props.openMenu();
    }
  },

  render: function () {
    var isOpen = this.props.menuIsOpen;

    var arrowClasses = isOpen
      ? "glyphicon glyphicon-chevron-left"
      : "glyphicon glyphicon-chevron-right";

    return (
      <div id="toggle" onClick={this.toggle}>
        <span className={arrowClasses} />
      </div>
    );
  }

});

module.exports = Toggle;
