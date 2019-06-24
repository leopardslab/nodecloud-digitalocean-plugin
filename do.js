const Droplets = require('./compute/do-droplets')
const Volumes = require('./storage/do-volumes')

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
      volumes: this.Volumes
		};
	}
	/**
   * Droplets Wrapper
   * @Droplets
   */
  Droplets() {
    return new Droplets(this.getSDK(), this.getToken());
  }

  /**
   * Volumes Wrapper
   * @Volumes
   */
  Volumes() {
    return new Volumes(this.getSDK(), this.getToken());
  }
}

module.exports = DO;