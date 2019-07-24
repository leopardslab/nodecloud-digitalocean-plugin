class Volumes {
  /**
   * Volumes constructor
   * @constructor
   * @param {object} doSdk - DigitalOcean SDK
   * @param {string} token - DigitalOcean token
   */
  constructor(doSdk, token) {
    this._DO = doSdk;
    this._client = new this._DO.client(token);
  }

  /**
   * List all Volumes
   * @list
   */
  list() {
    return new Promise((resolve,reject) => {
      this._client.volumes.list((err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }

  /**
   * Retrieve an existing Volume by id
   * @listByID
   * @param {string} id
   */
  listByID(id) {
    return new Promise((resolve,reject) => {
      this._client.volumes.get(id,(err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }

  /**
   * Create a Volume
   * @create
   * @param {object} params
   */
  create(params) {
    return new Promise((resolve,reject) => {
      this._client.volumes.create(params,(err,result) => {
        if (err) reject(err)
        resolve("Created a new volume with id: " + result.id)
      })
    });
  }

  /**
   * Delete a Volume
   * @delete
   * @param {string} id
   */
  delete(id) {
    return new Promise((resolve,reject) => {
      this._client.volumes.delete(id,(err,result) => {
        if (err) reject(err)
        resolve("Volume with id: " + id + " deleted successfully")
      })
    });
  }

  /**
   * List actions for a Volume
   * @listActions
   * @param {string} id
   */
  listActions(id) {
    return new Promise((resolve,reject) => {
      this._client.volumes.listActions(id,(err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }

  /**
   * Get action for a Volume
   * @getAction
   * @param {string} id
   * @param {string} aid
   */
  getAction(id, aid) {
    return new Promise((resolve,reject) => {
      this._client.volumes.getAction(id,aid,(err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }
}

module.exports = Volumes;