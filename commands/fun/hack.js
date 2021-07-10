const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "hack",
  aliases: ["inject", "virus"],
  description: "Hacks a member who deserves it!",
  usage: "Hack <Mention Member>",
  run: async (client, message, args) => {
    //Start

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    if (!Member)
      return message.channel.send("Bro. Mention a member that you want to hack.");

    if (Member.user.id === message.author.id)
      return message.channel.send("I'm literally laughing so hard you can't hack yourself! Next time, mention someone OTHER than you.");

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Hack Status: Completed`)
      .setDescription(
        `Name: ${Member.user.username} | ID: ${
          Member.user.id
        }`
      )
      .setFooter(`If you think this is real then you're like- so dumb.`)
      .setTimestamp();

    await message.channel.send(`Starting to hack...`);

    await message.channel.send(`Username hacked: ${Member.user.username}`);

    await message.channel.send(`User ID hacked: ${Member.user.id}`);

    await message.channel.send(`Bypassing password.....`);

    await message.channel.send(`Password: Ecks-DeeRocks123`);

    await message.channel.send(`Bypassing security.....`);

    await message.channel.send(`Hacking files.....`);

    await message.channel.send(`Hacking emojis.....`);

    await message.channel.send(`Files and Emojis hacked!`);

    setTimeout(function() {
      message.channel.send(embed);
    }, 5000);

    //End
  }
};
