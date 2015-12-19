var combineReducers = require('redux').combineReducers;
var toggle = require('./toggle');

var rootReducer = combineReducers({
  toggle: toggle
});

module.exports = rootReducer;
