const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "numbergenerator",
  aliases: ["rn", "ng", "randomnumber",],
  category: "fun",
  description: "Get a random generated number from 1-100!",
  usage: "numbergenerator",
  run: async (client, message, args) => {
    //Start

    let result = Math.floor(Math.random() * 101);

    const embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`And your random number is...`)
      .setDescription([result])
      .setFooter(`1 - 100`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
