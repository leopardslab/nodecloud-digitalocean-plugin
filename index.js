const doSDk = require("digitalocean");
const doPlugin = require("./do");

const ncDoPlugin = (options) => {
  return new doPlugin(options, doSDk);
}

module.exports = ncDoPlugin;