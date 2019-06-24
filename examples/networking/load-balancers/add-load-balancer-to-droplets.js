const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const loadbalancers = ncProviders.digitalocean.loadbalancers();

const params = {
  "droplet_ids": [
    148169195
  ]
}

loadbalancers
  .add("7ffb478a-d836-49ff-8c01-3a4c8445e2f6",params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });