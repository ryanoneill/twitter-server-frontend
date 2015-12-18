require('babel-core/polyfill');
var React = require('react');
var render = require('react-dom').render;
var Provider = require('react-redux').Provider;
var App = require('./containers/App');
var configureStore = require('./store/configureStore');

var store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
