/*
 * Strapi-mqtt custom hook - ssmqtt (serverside mqtt)
 * allows interfacing the MQTT protocol with CMS
 * made for project sentrysrv-backend
 *
 * author: ToraNova
 * email : chia_jason96@live.com
 *
 * place this file as ./hooks/ssmqtt/logic.js
 * in the strapi project's root directory
 *
 * this file is supplementing the main hookfile, index.js
 * it implements the logic for the MQTT client
 * works together with npm's mqtt package
 *
 * to use,
 * const ssmqtt_logic = require('./logic.js')
 * client.on('message', function(topic, message) {
 * 	ssmqtt_logic( topic, message, strapi )
 * })
 *
 */

module.exports = (topic, message, strapi) => {
	strapi.log.info(`SSMQTT received ${message} on ${topic}`)
}
