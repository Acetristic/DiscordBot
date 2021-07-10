const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "mute",
  aliases: [],
  description: "Mutes a user that deserves it.",
  usage: "Mute <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start


        if (!message.member.hasPermission("MANAGE_SERVER"))
      return message.channel.send(
        "Sorry, but you can't mute cause you don't have a high-enough role."
      );
    
    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send("Mention a user to kick pls.");

    let Role = message.guild.roles.cache.find(role => role.name === "Muted").id;

    if (!Role)
      return message.channel.send(
        "Please create a muted role before you mute a user. Name: Muted."
      );

    if (Member.roles.cache.has(Role)) {
      return message.channel.send("Look at this noob trying to mute a guy who is already muted.");
    }

    let Reason = args.slice(1).join(" ");

    let Embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Muted!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Muted Member`, `${Member.user.tag} (${Member.user.id})`)
      .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    if (Role && !Member.roles.cache.has(Role)) {
      Member.roles.add([Role]);
      return message.channel.send(Embed);
    } else {
      return message.channel.send("OOOF something went wrong.");
    }

    //End
  }
};
