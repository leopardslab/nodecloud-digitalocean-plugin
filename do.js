const Account = require('./account/do-account')
const Droplets = require('./compute/do-droplets')
const LoadBalancers = require('./networking/do-load-balancers')
const FloatingIps = require('./networking/do-floating-ips')
const Volumes = require('./storage/do-volumes')

class DO {
	/**
   * Expose DigitalOcean APIs
   * @constructor
   */
  constructor(token,doSDK) {
		this._doToken = token;
		this._DO = doSDK;

		return {
			getSDK: () => this._DO,
      getToken: () => this._doToken,
      account: this.account,
      droplets: this.droplets,
      loadbalancers: this.loadBalancers,
      floatingips: this.floatingIps,
      volumes: this.volumes
		};
  }

  /**
   * Account - Account & SSH Wrapper
   * @account
   */
  account() {
    return new Account(this.getSDK(), this.getToken());
  }

	/**
   * Compute - Droplets Wrapper
   * @droplets
   */
  droplets() {
    return new Droplets(this.getSDK(), this.getToken());
  }

  /**
   * Networking - Load Balancers Wrapper
   * @loadBalancers
   */
  loadBalancers() {
    return new LoadBalancers(this.getSDK(), this.getToken());
  }

  /**
   * Networking - Floating IPs Wrapper
   * @floatingIps
   */
  floatingIps() {
    return new FloatingIps(this.getSDK(), this.getToken());
  }

  /**
   * Storage - Volumes Wrapper
   * @volumes
   */
  volumes() {
    return new Volumes(this.getSDK(), this.getToken());
  }
}

module.exports = DO;