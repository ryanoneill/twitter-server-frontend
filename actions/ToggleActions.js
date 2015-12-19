var types = require('../constants/ActionTypes');

var openMenu = function () {
  return { type: types.OPEN_MENU };
};

var closeMenu = function () {
  return { type: types.CLOSE_MENU };
};

module.exports = {
  openMenu: openMenu,
  closeMenu: closeMenu
};
