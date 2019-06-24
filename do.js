const Droplets = require('./compute/do-droplets')
const Volumes = require('./storage/do-volumes')
const LoadBalancers = require('./networking/do-load-balancers')

class DO {
	/**
   * Expose DigitalOcean APIs
   * @constructor
   */
  constructor(options,doSDK) {
		this._doToken = options.token;
		this._DO = doSDK;

		return {
			getSDK: () => this._DO,
			getToken: () => this._doToken,
      droplets: this.Droplets,
      volumes: this.Volumes,
      loadbalancers: this.LoadBalancers
		};
	}
	/**
   * Compute - Droplets Wrapper
   * @Droplets
   */
  Droplets() {
    return new Droplets(this.getSDK(), this.getToken());
  }

  /**
   * Storage - Volumes Wrapper
   * @Volumes
   */
  Volumes() {
    return new Volumes(this.getSDK(), this.getToken());
  }

  /**
   * Networking - Load Balancers Wrapper
   * @LoadBalancers
   */
  LoadBalancers() {
    return new LoadBalancers(this.getSDK(), this.getToken());
  }
}

module.exports = DO;