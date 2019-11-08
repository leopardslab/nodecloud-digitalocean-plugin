const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const loadbalancers = ncProviders.digitalocean.loadbalancers();

const params = {
  droplet_ids: [148172921]
};

loadbalancers
  .remove("cdf70dc5-6c15-4ca8-963b-88ee13570f20", params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
