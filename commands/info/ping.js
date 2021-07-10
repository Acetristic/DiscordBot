const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: ["pong"],
  description: "Gives the pong.",
  usage: "Ping",
  run: async (client, message, args) => {
    //Start

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Pong - ${client.ws.ping}`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
