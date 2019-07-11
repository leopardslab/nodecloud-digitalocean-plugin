class Account {
  /**
   * Account constructor
   * @constructor
   * @param {object} doSdk - DigitalOcean SDK
   * @param {string} token - DigitalOcean token
   */
  constructor(doSdk, token) {
    this._DO = doSdk;
    this._client = new this._DO.client(token);
  }

  /**
   * Get Profile Details
   * @getProfile
   */
  getProfile() {
    return new Promise((resolve,reject) => {
      this._client.account.get((err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * List all SSH Keys
   * @listSshKeys
   */
  listSshKeys() {
    return new Promise((resolve,reject) => {
      this._client.account.listSshKeys((err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * Retrieve an existing SSH Key by id
   * @getSshKey
   * @param {string} id
   */
  getSshKey(id) {
    return new Promise((resolve,reject) => {
      this._client.account.getSshKey(id,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * Create a SSH Key
   * @createSshKey
   * @param {object} params
   */
  createSshKey(params) {
    return new Promise((resolve,reject) => {
      this._client.account.createSshKey(params,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * Update an existing SSH Key with given attributes by id
   * @updateSshKey
   * @param {string} id
   * @param {object} params
   */
  updateSshKey(id,params) {
    return new Promise((resolve,reject) => {
      this._client.account.updateSshKey(id,params,(err,result) => {
        if (err) reject(err)
        console.log(result)
        resolve(result)
      })
    });
  }

  /**
   * Delete a SSH Key
   * @deleteSshKey
   * @param {string} id
   */
  deleteSshKey(id) {
    return new Promise((resolve,reject) => {
      this._client.account.deleteSshKey(id,(err,result) => {
        if (err) reject(err)
        resolve("SSH Key with id: " + id + " deleted successfully")
      })
    });
  }

}

module.exports = Account;