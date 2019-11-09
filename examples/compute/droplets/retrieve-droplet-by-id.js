const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const droplets = ncProviders.digitalocean.droplets();

droplets
  .listByID("139469372")
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
