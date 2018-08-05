"use strict";
const {
	ServiceBroker
} = require("moleculer");
const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");

//const broker = new ServiceBroker();

let usersNotes = [{
		username: "ilia",
		password: "12345",
		notes: ["belejka1", "belejka2", "belejka3"]
	},
	{
		username: "tomi",
		password: "123",
		notes: ["belejka4", "belejka5"]
	},
	{
		username: "nasko",
		password: "321",
		notes: ["belejka6", "belejka7", "belejka8"]
	}
];

// Create a Mongoose service for `post` entities
module.exports = {
	name: "notes",
	mixins: [DbService],
	adapter: new SqlAdapter("sqlite://:memory:"),	
	model: {
		name: "post",
		define: {
			username: Sequelize.STRING,
			password: Sequelize.STRING,
			notes: Sequelize.TEXT
		},
		options: {
			// Options from http://docs.sequelizejs.com/manual/tutorial/models-definition.html
		},
	},
	actions: {
		hello() {
			return "Hello Moleculer";
		},
		getnotes: {
			params: {
				username: "string",
				password: "string"
			},
			handler(ctx) {				
				let username = ctx.params.username;
				let password = ctx.params.password;
				for (let user in usersNotes) {
					if (usersNotes[user].username == username) {
						if (usersNotes[user].password == password) {
							return usersNotes[user].notes;
						}
						else {
							return "wrong username or password";
						}						
					}					
				}
				return "wrong username or password";
			}
		}
	}
};


// module.exports = {
// 	name: "greeter",

// 	/**
// 	 * Service settings
// 	 */
// 	settings: {

// 	},

// 	/**
// 	 * Service dependencies
// 	 */
// 	dependencies: [],

// 	/**
// 	 * Actions
// 	 */
// 	actions: {

// 		/**
// 		 * Say a 'Hello'
// 		 *
// 		 * @returns
// 		 */
// 		hello() {
// 			return "Hello Moleculer";
// 		},

// 		/**
// 		 * Welcome a username
// 		 *
// 		 * @param {String} name - User name
// 		 */
// 		get: {
// 			params: {
// 				id: "string"
// 			},
// 			handler(ctx) {
// 				//return `Welcome, ${ctx.params.name}`;
// 				//return "Notes for id:" + ctx.params.id + " - "+ users[ctx.params.id].notes.join(", ");
// 				return users[ctx.params.id]; 
// 			}
// 		}
// 	},

// 	/**
// 	 * Events
// 	 */
// 	events: {

// 	},

// 	/**
// 	 * Methods
// 	 */
// 	methods: {

// 	},

// 	/**
// 	 * Service created lifecycle event handler
// 	 */
// 	created() {

// 	},

// 	/**
// 	 * Service started lifecycle event handler
// 	 */
// 	started() {

// 	},

// 	/**
// 	 * Service stopped lifecycle event handler
// 	 */
// 	stopped() {

// 	}
// };