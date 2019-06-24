class Droplets {
  /**
   * Droplets constructor
   * @constructor
   * @param {object} doSdk - DigitalOcean SDK
   * @param {string} token - DigitalOcean token
   */
  constructor(doSdk, token) {
    this._DO = doSdk;
    this._client = new this._DO.client(token);
  }

  /**
   * List all Droplets
   * @list
   */
  list() {
    return new Promise((resolve,reject) => {
      this._client.droplets.list((err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * Retrieve an existing Droplet by id
   * @listByID
   * @param {string} id
   */
  listByID(id) {
    return new Promise((resolve,reject) => {
      this._client.droplets.get(id,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * Create a Droplet
   * @create
   * @param {object} params
   */
  create(params) {
    return new Promise((resolve,reject) => {
      this._client.droplets.create(params,(err,result) => {
        if (err) reject(err)
        if (result.length > 1) {
          var ids = []
          for (var i=0; i<result.length; i++) {
            ids.push(result[i].id)
          }
          resolve("Created new droplets with ids: " + ids)
        }
        else {
          resolve("Created a new droplet with id: " + result.id)
        }
      })
    });
  }

  /**
   * List all available Kernels for a Droplet
   * @listKernels
   * @param {string} id
   */
  listKernels(id) {
    return new Promise((resolve,reject) => {
      this._client.droplets.kernels(id,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * List snapshots for a Droplet
   * @listSnapshots
   * @param {string} id
   */
  listSnapshots(id) {
    return new Promise((resolve,reject) => {
      this._client.droplets.snapshots(id,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * List backups for a Droplet
   * @listBackups
   * @param {string} id
   */
  listBackups(id) {
    return new Promise((resolve,reject) => {
      this._client.droplets.backups(id,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }
  
  /**
   * List actions for a Droplet
   * @listActions
   * @param {string} id
   */
  listActions(id) {
    return new Promise((resolve,reject) => {
      this._client.droplets.listActions(id,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * Delete a Droplet
   * @delete
   * @param {string} id
   */
  delete(id) {
    return new Promise((resolve,reject) => {
      this._client.droplets.delete(id,(err,result) => {
        if (err) reject(err)
        resolve("Droplet with id: " + id + " deleted successfully")
      })
    });
  }

  /**
   * Deleting Droplets by Tag
   * @deleteByTag
   * @param {string} tag
   */
  deleteByTag(tag) {
    return new Promise((resolve,reject) => {
      this._client.droplets.delete(tag,(err,result) => {
        if (err) reject(err)
        resolve("Droplet with id: " + tag + " deleted successfully")
      })
    });
  }

  /**
   * List Neighbors for a Droplet
   * @listNeighbors
   * @param {string} id
   */
  listNeighbors(id) {
    return new Promise((resolve,reject) => {
      this._client.droplets.neighbors(id,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }
}

module.exports = Droplets;