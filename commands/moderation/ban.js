const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ban",
  aliases: [],
  description: "Bans a member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("Lol you don't have perms to use this command- its only for gooddoers. Come back when you're 13.");

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        "Dude, mention a member that you want to ban next time, k?"
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send("Please mention a valid user!");

    if (Member.id === message.author.id)
      return message.channel.send("You can't ban yourself LMAO");

    if (Member.id === client.user.id)
      return message.channel.send("BRO WHY WOULD YOU WANT TO BAN ME F*CK YOU");

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send("You can't ban the owner. He's too supreme and cool.");

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);

    if (!User.bannable) return message.channel.send(`I Can't Ban That Member!`);

    try {
      console.log(`Member Is Going To Get Ban!`);
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Member Banned!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Banned Member`, `${Member.tag} (${Member.id})`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `You've just been banned from **${message.guild.name}** for ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) just got banned from ${
          message.guild.name
        } for ${Reason || "No Reason Provided!"}`
      );
    } catch (error) {
      return message.channel
        .send("OOOOF I can't ban that given member, maybe my role is lower than given member's, or its not destined to be.")
        
        .then(() => console.log(error));
    }

    //End
  }
};
