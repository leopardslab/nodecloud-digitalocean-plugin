const lib = require("../../../account/do-account");
const doSdk = require("digitalocean");
const doToken = require("../token");
const account = new lib(doSdk, doToken);

test("Fetched profile details", async () => {
  this._method = await account.getProfile();
  expect(this._method._digitalOcean.statusCode).toBe(200);
}, 30000);

test("Fetched SSH keys", async () => {
  this._method = await account.listSshKeys();
  expect(this._method._digitalOcean.statusCode).toBe(200);
}, 30000);

test("Created a SSH key", async () => {
  const params = {
    name: "Example",
    public_key:
      "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAAAQQDDHr/jh2Jy4yALcK4JyWbVkPRaWmhck3IgCoeOO3z1e2dBowLh64QAM+Qb72pxekALga2oi4GvT+TlWNhzPH4V example"
  };
  this._method = await account.createSshKey(params);
  expect(this._method._digitalOcean.statusCode).toBe(201);
}, 30000);
