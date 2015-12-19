var R = require('ramda');
var types = require('../constants/ActionTypes');
var menuLens = R.lensProp('menuIsOpen');

var initialState = {
  menuIsOpen: true
};

var openMenu = function (state, action) {
  return R.set(menuLens, true, state);
};

var closeMenu = function (state, action) {
  return R.set(menuLens, false, state);
};

var reducer = function (astate, action) {
  var state = astate || initialState;
  switch (action.type) {
    case types.OPEN_MENU:
      return openMenu(state, action);
    case types.CLOSE_MENU:
      return closeMenu(state, action);
    default:
      return state;
  }
};

module.exports = reducer;
