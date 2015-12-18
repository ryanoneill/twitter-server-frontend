var combineReducers = require('redux').combineReducers;
var fake = require('./fake');

var rootReducer = combineReducers({
  fake: fake
});

module.exports = rootReducer;
