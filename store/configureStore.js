var createStore = require('redux').createStore;
var rootReducer = require('../reducers');

var configureStore = function (initialState) {
  return createStore(rootReducer, initialState);
};

module.exports = configureStore;
