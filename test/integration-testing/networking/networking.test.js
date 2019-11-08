const lib = require("../../../compute/do-droplets");
const fips = require("../../../networking/do-floating-ips");
const lbs = require("../../../networking/do-load-balancers");
const doSdk = require("digitalocean");
const doToken = require("../token");
const compute = new lib(doSdk, doToken);
const floatingips = new fips(doSdk, doToken);
const loadbalancers = new lbs(doSdk, doToken);

test("Fetched all floating IPs", async () => {
  this._method = await floatingips.list();
  expect(this._method._digitalOcean.statusCode).toBe(200);
}, 30000);

test("Checking for an existing droplet", async () => {
  this._droplets = await compute.list();
  expect(this._droplets.length).toBeGreaterThan(0);
}, 30000);

test("Added a floating IP to the droplet", async () => {
  this._droplets = await compute.list();
  const params = {
    droplet_id: this._droplets[0].id
  };
  this._method = await floatingips.create(params);
  expect(this._method).toMatch(
    new RegExp("Created a new Floating IP with IP:")
  );
}, 30000);

test("Fetched all load balancers", async () => {
  this._method = await loadbalancers.list();
  expect(this._method._digitalOcean.statusCode).toBe(200);
}, 30000);

test("Added a load balancer to the droplet", async () => {
  this._droplets = await compute.list();
  const params = {
    droplet_ids: [this._droplets[0].id]
  };
  this._method = await loadbalancers.list();
  expect(this._method._digitalOcean.statusCode).toBe(200);
}, 30000);
