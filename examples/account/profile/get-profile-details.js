const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const account = ncProviders.digitalocean.account();

account
  .getProfile()
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
