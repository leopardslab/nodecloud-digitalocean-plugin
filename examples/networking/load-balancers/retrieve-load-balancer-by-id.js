const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const loadbalancers = ncProviders.digitalocean.loadbalancers();

loadbalancers
  .listByID("7ffb478a-d836-49ff-8c01-3a4c8445e2f6")
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
