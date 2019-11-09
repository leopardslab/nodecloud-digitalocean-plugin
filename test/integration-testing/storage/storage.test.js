const lib = require("../../../storage/do-volumes");
const doSdk = require("digitalocean");
const doToken = require("../token");
const storage = new lib(doSdk, doToken);

test("Fetched all volumes", async () => {
  this._method = await storage.list();
  expect(this._method._digitalOcean.statusCode).toBe(200);
}, 30000);

test("Created a volume storage", async () => {
  const params = {
    size_gigabytes: 10,
    name: "example",
    description: "Block store for examples",
    region: "nyc1"
  };
  this._method = await storage.create(params);
  expect(this._method).toMatch(new RegExp("Created a new volume with id:"));
}, 30000);
