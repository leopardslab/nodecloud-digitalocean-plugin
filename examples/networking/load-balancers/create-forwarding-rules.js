const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const loadbalancers = ncProviders.digitalocean.loadbalancers();

const params = {
  "forwarding_rules": [
    {
      "entry_protocol": "tcp",
      "entry_port": 3306,
      "target_protocol": "tcp",
      "target_port": 3306
    }
  ]
}

loadbalancers
  .createForwardingRules("79371155-ed28-4900-9bae-ccc73e36653a",params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });