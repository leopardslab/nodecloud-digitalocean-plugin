const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const droplets = ncProviders.digitalocean.droplets();

const params = {
  "name": "example.com",
  "region": "nyc3",
  "size": "s-1vcpu-1gb",
  "image": "ubuntu-16-04-x64"
}

droplets
  .create(params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });