const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const account = ncProviders.digitalocean.account();

const params = {
  name: "My SSH Public Key",
  public_key:
    "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example"
};

account
  .createSshKey(params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
