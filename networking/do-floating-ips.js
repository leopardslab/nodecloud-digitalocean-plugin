class FloatingIps {
  /**
   * Floating IPs constructor
   * @constructor
   * @param {object} doSdk - DigitalOcean SDK
   * @param {string} token - DigitalOcean token
   */
  constructor(doSdk, token) {
    this._DO = doSdk;
    this._client = new this._DO.client(token);
  }

  /**
   * List all Floating IPs
   * @list
   */
  list() {
    return new Promise((resolve,reject) => {
      this._client.floatingIps.list((err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }

  /**
   * Retrieve an existing Floating IP by IP
   * @listByIP
   * @param {string} id
   */
  listByIP(ip) {
    return new Promise((resolve,reject) => {
      this._client.floatingIps.get(ip,(err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }

  /**
   * Create a Floating IP
   * @create
   * @param {object} params
   */
  create(params) {
    return new Promise((resolve,reject) => {
      this._client.floatingIps.create(params,(err,result) => {
        if (err) reject(err)
        resolve("Created a new Floating IP with IP: " + result.ip)
      })
    });
  }

  /**
   * Delete a Floating IP
   * @delete
   * @param {string} ip
   */
  delete(ip) {
    return new Promise((resolve,reject) => {
      this._client.floatingIps.delete(ip,(err,result) => {
        if (err) reject(err)
        resolve("Floating IP with id: " + ip + " deleted successfully")
      })
    });
  }

  /**
   * List actions for a Floating IP
   * @listActions
   * @param {string} ip
   */
  listActions(ip) {
    return new Promise((resolve,reject) => {
      this._client.floatingIps.listActions(ip,(err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }

  /**
   * Get action for a Floating IP
   * @getAction
   * @param {string} ip
   * @param {string} aid
   */
  getAction(ip,aid) {
    return new Promise((resolve,reject) => {
      this._client.floatingIps.getAction(ip,aid,(err,result) => {
        if (err) reject(err)
        resolve(result)
      })
    });
  }

}

module.exports = FloatingIps;