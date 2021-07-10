const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "purge",
  aliases: ["clear", "clearmsgs", "delete"],
  description: "Clear Your Messages!",
  usage: "Clear <Message Amount>",
  run: async (client, message, args) => {
    //Start

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "Lol you don't have the perms to use this command."
      );

    if (!args[0])
      return message.channel.send("Please give the amount of messages to purge.");

    if (isNaN(args[0]))
      return message.channel.send("Um, I need a number value higher than 0.");

    if (args[0] < 4)
      return message.channel.send(
        "Y'know, you can delete ${args[0]} messages by yourself, its not that much."
      );

    if (args[0] > 100)
      return message.channel.send(
        "I can't delete ${args[0]} bc of the Discord limit."
      );

    let Reason = args.slice(1).join(" ") || "No Reason Provided!";

    message.channel.bulkDelete(args[0]).then(Message => {
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Messages Deleted!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Channel`, `${message.channel.name} (${message.channel.id}`)
        .addField(`Deleted Messages`, `${Message.size}`)
        .addField(`Reason`, `${Reason}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      return message.channel
        .send(embed)
        .then(msg => msg.delete({ timeout: 10000 }));
    });

    //End
  }
};
