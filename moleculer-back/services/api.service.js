"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.13/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,
		cors: {
			// Configures the Access-Control-Allow-Origin CORS header.
			origin: "*",
			// Configures the Access-Control-Allow-Methods CORS header. 
			methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
			// Configures the Access-Control-Allow-Headers CORS header.
			allowedHeaders: [],
			// Configures the Access-Control-Expose-Headers CORS header.
			exposedHeaders: [],
			// Configures the Access-Control-Allow-Credentials CORS header.
			credentials: false,
			// Configures the Access-Control-Max-Age CORS header.
			maxAge: 3600
		},
		routes: [{
			path: "/api",
			// cors: {
			// 	origin: ["http://localhost:3000"],
			// 	methods: ["GET", "OPTIONS", "POST"],
			// 	credentials: true
			// },
			whitelist: [
				// Access to any actions in all services under "/api" URL
				"**"
			],
			aliases: {

				//"REST notes": "notes"				
			},
			actions: {

			}
		}],

		// Serve assets from "public" folder
		assets: {
			folder: "public"
		}
	}
};