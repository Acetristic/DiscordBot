const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`Use ${Prefix}help <Command Name> for more command information!` + 
    "\n\n🎉**Fun** \n Pfp\nCoinflip\nGaytest\nMeme\nRate\nLinefont\nHack\nNumbergenerator" + "\n\n" + "🔐**Moderation** \n Clear\nMute\nUnmute\nKick\nBan\nUnban\nWarn\nWarnings" + "\n\n"+ "⌚**Information** \n Help\nWeather\nUserinfo\nServerinfo\nPing")
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};
