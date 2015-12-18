var React = require('react');

var Toggle = React.createClass({

  render: function () {
    return (
      <div id="toggle">
        <span className="glyphicon glyphicon-chevron-left" />
      </div>
    );
  }

});

module.exports = Toggle;
