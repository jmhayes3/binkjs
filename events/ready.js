const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setPresence({ activities: [], status: "invisible" });
		// TODO: Reload commands on bot start up.
	},
};