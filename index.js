const doSdk = require("digitalocean");
const doPlugin = require("./do");

const ncDoPlugin = options => {
  return new doPlugin(options.token, doSdk);
};

module.exports = ncDoPlugin;
