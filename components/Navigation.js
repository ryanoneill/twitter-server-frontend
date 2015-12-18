var React = require('react');
var PropTypes = React.PropTypes;

var Navigation = React.createClass({

  render: function () {
    return (
      <nav id="sidebar">
        <ul>
          <li id="Summary" className="selectable">
            <a href="/admin">Summary</a>
          </li>
          <li className="subnav active">
            <span>Downstream Clients</span>
            <ul>
              <li id="zipkin-tracer" className="selectable">
                <a href="/admin/clients/zipkin-tracer">zipkin-tracer</a>
              </li>
            </ul>
          </li>
          <li className="subnav">
            <span>Listening Servers</span>
            <ul>
              <li id="adminhttp" className="selectable">
                <a href="/admin/servers/adminhttp">adminhttp</a>
              </li>
            </ul>
          </li>
          <li className="subnav">
            <span>Metrics</span>
            <ul>
              <li id="Watch" className="selectable">
                <a href="/admin/metrics">Watch</a>
              </li>
            </ul>
          </li>
          <li className="subnav">
            <span>Misc</span>
            <ul>
              <li id="/abortabortabort" className="selectable">
                <a href="/abortabortabort">/abortabortabort</a>
              </li>
              <li id="/quitquitquit" className="selectable">
                <a href="/quitquitquit">/quitquitquit</a>
              </li>
              <li id="/health" className="selectable">
                <a href="/health">/health</a>
              </li>
            </ul>
          </li>
          <li className="subnav">
            <span>Performance Profile</span>
            <ul>
              <li id="Heap" className="selectable">
                <a href="/admin/pprof/heap">Heap</a>
              </li>
              <li id="Profile" className="selectable">
                <a href="/admin/pprof/profile">Profile</a>
              </li>
              <li id="Contention" className="selectable">
                <a href="/admin/pprof/contention">Contention</a>
              </li>
            </ul>
          </li>
          <li className="subnav">
            <span>Process Info</span>
            <ul>
              <li id="Build Properties" className="selectable">
                <a href="/admin/server_info">Build Properties</a>
              </li>
              <li id="Contention" className="selectable">
                <a href="/admin/contention">Contention</a>
              </li>
              <li id="Lint" className="selectable">
                <a href="/admin/lint">Lint</a>
              </li>
              <li id="Threads" className="selectable">
                <a href="/admin/threads">Threads</a>
              </li>
              <li id="Announcer" className="selectable">
                <a href="/admin/announcer">Announcer</a>
              </li>
              <li id="Dtab" className="selectable">
                <a href="/admin/dtab">Dtab</a>
              </li>
              <li id="Registry" className="selectable">
                <a href="/admin/registry.json">Registry</a>
              </li>
            </ul>
          </li>
          <li className="subnav">
            <span>Utilities</span>
            <ul>
              <li id="Ping" className="selectable">
                <a href="/admin/ping">Ping</a>
              </li>
              <li id="Shutdown" className="selectable">
                <a href="/admin/shutdown">Shutdown</a>
              </li>
              <li id="Tracing" className="selectable">
                <a href="/admin/tracing">Tracing</a>
              </li>
              <li id="Events" className="selectable">
                <a href="/admin/events">Events</a>
              </li>
              <li id="Logging" className="selectable">
                <a href="/admin/logging">Logging</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }

});

module.exports = Navigation;
