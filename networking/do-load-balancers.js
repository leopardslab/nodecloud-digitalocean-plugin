class LoadBalancers {
  /**
   * Load Balancers constructor
   * @constructor
   * @param {object} doSdk - DigitalOcean SDK
   * @param {string} token - DigitalOcean token
   */
  constructor(doSdk, token) {
    this._DO = doSdk;
    this._client = new this._DO.client(token);
  }

  /**
   * List all Load Balancers
   * @list
   */
  list() {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.list((err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  /**
   * Retrieve an existing Load Balancer by id
   * @listByID
   * @param {string} id
   */
  listByID(id) {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.get(id, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  /**
   * Add Load Balancer to a Droplet
   * @add
   * @param {string} id
   * @param {object} params
   */
  add(id, params) {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.add(id, params, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  /**
   * Remove Load Balancer from a Droplet
   * @remove
   * @param {string} id
   * @param {object} params
   */
  remove(id, params) {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.remove(id, params, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  /**
   * Update an existing Load Balancer with given attributes by id
   * @update
   * @param {string} id
   * @param {object} params
   */
  update(id, params) {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.update(id, params, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  /**
   * Delete a Load Balancer
   * @delete
   * @param {string} id
   */
  delete(id) {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.delete(id, (err, result) => {
        if (err) reject(err);
        resolve("Load Balancer with id: " + id + " deleted successfully");
      });
    });
  }

  /**
   * Create forwarding rules for a Load Balancer
   * @createForwardingRules
   * @param {string} id
   * @param {object} params
   */
  createForwardingRules(id, params) {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.createForwardingRules(
        id,
        params,
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }

  /**
   * Delete forwarding rules for a Load Balancer
   * @deleteForwardingRules
   * @param {string} id
   * @param {object} params
   */
  deleteForwardingRules(id, params) {
    return new Promise((resolve, reject) => {
      this._client.loadBalancers.deleteForwardingRules(
        id,
        params,
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
    });
  }
}

module.exports = LoadBalancers;
