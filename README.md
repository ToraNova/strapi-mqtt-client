# Strapi Server Side MQTT client
This is a hook template to implement a server side MQTT client on strapi. You can use it to accept MQTT messages and do processing on models.

## How to use ?
Place the hooks directory under your strapi project folder (i.e., `./hooks/`), then edit the `./config/hook.json` and add in the following lines:

File `./config/hook.json`
```
	...
	"ssmqtt": {
		"enabled": true,
		"login": true,
		"username": "strapi-ssmqtt",
		"password": "test123",
		"broker": "localhost",
		"port": "1883"
	}
	...
```

You may edit `./hooks/ssmqtt/logic.js` after to process the messages received by the client. What the client subscribes to is under the variable `subscription` in the `./hooks/ssmqtt/index.js` file. You may use databases to remember subscription or whatsoever. Do what you want.

## NOTE
PLEASE change the username and password, or even use (environment variables)[https://www.npmjs.com/package/env-cmd] to handle them. This is just a template.
