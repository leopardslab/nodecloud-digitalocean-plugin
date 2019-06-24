const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const volumes = ncProviders.digitalocean.volumes();

const params = {
  "size_gigabytes": 10,
  "name": "example",
  "description": "Block store for examples",
  "region": "nyc1"
}

volumes
  .create(params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });