const nodeCloud = require("../nodecloud");

const optionsProvider = {
  overrideProviders: false
};

const ncProviders = nodeCloud.getProviders(optionsProvider);

const loadbalancers = ncProviders.digitalocean.loadbalancers();

const params = {
  name: "blr1-load-balancer-01",
  region: "nyc3",
  algorithm: "least_connections",
  forwarding_rules: [
    {
      entry_protocol: "http",
      entry_port: 80,
      target_protocol: "http",
      target_port: 80
    },
    {
      entry_protocol: "https",
      entry_port: 444,
      target_protocol: "https",
      target_port: 443,
      tls_passthrough: true
    }
  ],
  health_check: {
    protocol: "http",
    port: 80,
    path: "/",
    check_interval_seconds: 10,
    response_timeout_seconds: 5,
    healthy_threshold: 5,
    unhealthy_threshold: 3
  },
  sticky_sessions: {
    type: "cookies",
    cookie_name: "DO_LB",
    cookie_ttl_seconds: 300
  },
  droplet_ids: [148165552]
};

loadbalancers
  .update("7ffb478a-d836-49ff-8c01-3a4c8445e2f6", params)
  .then(res => {
    console.log(`${res}`);
  })
  .catch(err => {
    console.log(`${err}`);
  });
