const Droplets = require('./compute/do-droplets')

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
      droplets: this.Droplets
		};
	}
	/**
   * Droplets Wrapper
   * @Droplets
   */
  Droplets() {
    return new Droplets(this.getSDK(), this.getToken());
  }
}

module.exports = DO;