const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const account = ncProviders.digitalocean.account();

const params = {
  "name": "Renamed SSH Key"
}

account
  .updateSshKey("24935686",params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });