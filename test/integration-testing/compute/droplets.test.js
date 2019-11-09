const lib = require("../../../compute/do-droplets");
const doSdk = require("digitalocean");
const doToken = require("../token");
const compute = new lib(doSdk, doToken);

test("Fetched all droplets", async () => {
  this._method = await compute.list();
  expect(this._method._digitalOcean.statusCode).toBe(200);
}, 30000);

test("Created a droplet", async () => {
  const params = {
    name: "example.com",
    region: "nyc3",
    size: "s-1vcpu-1gb",
    image: "ubuntu-16-04-x64"
  };
  this._method = await compute.create(params);
  expect(this._method).toMatch(new RegExp("Created a new droplet with id:"));
}, 30000);

test("Created multiple droplets", async () => {
  const params = {
    names: ["sub-01.example.com", "sub-02.example.com"],
    region: "nyc3",
    size: "s-1vcpu-1gb",
    image: "ubuntu-16-04-x64"
  };
  this._method = await compute.create(params);
  expect(this._method).toMatch(new RegExp("Created new droplets with ids:"));
}, 30000);
