const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "rate",
  aliases: ["review", "choose"],
  description: "Bot'll rate the given item!",
  usage: "Rate <Text>",
  run: async (client, message, args) => {
    //Start

    let Content = args.join(" ");

    if (!Content)
      return message.channel.send("I can't rate nothing weirdo.");

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`I rate it...`)
      .setDescription(`${Math.floor(Math.random() * 11)}/10 to ${Content}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
