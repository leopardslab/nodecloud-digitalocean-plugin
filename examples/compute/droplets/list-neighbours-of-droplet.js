const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const droplets = ncProviders.digitalocean.droplets();

droplets
  .listNeighbors("139475101")
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
