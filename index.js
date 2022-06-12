// @ts-check

export class ExamplePlatform {
	constructor(
		/** @type {Logging} */ log,
		/** @type {AccessoryConfig} */ config,
		/** @type {API} */ api
	) {
		this.accessories = []
		this.devices = []

		this.log = log
		this.config = config
		this.api = api
		this.Service = this.api.hap.Service
		this.Characteristic = this.api.hap.Characteristic

		// this is used to track restored cached accessories
		this.accessories = []
		this.devices = []
		this.log.debug('Finished initializing platform:', this.config.platform)
	}
}

export default (
	/** @type {API} */ api
) => {
	api.registerPlatform('SleepIQ-Next', Object(ExamplePlatform))
}

// /** @typedef {import('homebridge').Accessory} Accessory */
/** @typedef {import('homebridge').AccessoryConfig} AccessoryConfig */
// /** @typedef {import('homebridge').AccessoryPlugin} AccessoryPlugin */
// /** @typedef {import('homebridge').AccessoryPluginConstructor} AccessoryPluginConstructor */
/** @typedef {import('homebridge').API} API */
// /** @typedef {import('homebridge').Characteristic} Characteristic */
/** @typedef {import('homebridge').Logging} Logging */
// /** @typedef {import('hap-nodejs').Service} Service */
// /** @typedef {import('hap-nodejs').UUID} UUID */

// export default (
// 	/** @type {API} */
// 	homebridge
// ) => {
// 	homebridge.registerPlatform('homebridge-plugin-sleepiq-next', 'SleepIQ-Next', Object(ExampleAccessoryPlugin))
// }

// class ExampleAccessoryPlugin {
// 	/** @type {Logging} */ log
// 	/** @type {AccessoryConfig} */ config
// 	/** @type {API} */ api

// 	constructor(
// 		/** @type {Logging} */ log,
// 		/** @type {AccessoryConfig} */ config,
// 		/** @type {API} */ api
// 	) {
// 		this.log = log
// 		this.config = config
// 		this.api = api

// 		this.log.debug('Example Accessory Plugin Loaded')

// 		this.Characteristic = this.api.hap.Characteristic
// 		this.Service = this.api.hap.Service

// 		// extract name from config
// 		this.name = config.name

// 		// create a new information service
// 		this.informationService = new this.Service.AccessoryInformation()

// 		this.informationService.setCharacteristic(this.Characteristic.Manufacturer, 'Custom Manufacturer')
// 		this.informationService.setCharacteristic(this.Characteristic.Model, 'Custom Model')

// 		// create a new "Switch" service
// 		this.switchService = new this.Service.Switch('Imaginary Switch')

// 		// link methods used when getting or setting the state of the service
// 		let characteristic = this.switchService.getCharacteristic(this.Characteristic.On)

// 		characteristic.onGet(this.getOnHandler.bind(this)) // bind to getOnHandler method below
// 		characteristic.onSet(this.setOnHandler.bind(this)) // bind to setOnHandler method below

// 		// const storagePath = api.user.storagePath()
// 		// const configPath = api.user.configPath()
// 	}

// 	getServices() {
// 		return [
// 			this.informationService,
// 			this.switchService,
// 		]
// 	}

// 	async getOnHandler() {
// 		this.log.info('Getting switch state')

// 		// get the current value of the switch in your own code
// 		const value = false

// 		return value
// 	}

// 	async setOnHandler(
// 		/** @type {boolean} */ value
// 	) {
// 		this.log.info('Setting switch state to:', value)
// 	}
// }
