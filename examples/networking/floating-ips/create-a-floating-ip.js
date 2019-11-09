const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const floatingips = ncProviders.digitalocean.floatingips();

const params = {
  droplet_id: 150000122
};

floatingips
  .create(params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
