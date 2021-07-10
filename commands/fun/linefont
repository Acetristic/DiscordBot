const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const figlet = require("figlet");
const { promisify } = require("util");
const figletAsync = promisify(figlet);

module.exports = {
  name: "linefont",
  aliases: ["ascii", "textconverter", "linegenerator"],
  description: "Convert lines into font!",
  usage: "Linefont <Text>",
  run: async (client, message, args) => {
    //Start
    
    let Content = args.join(" ");

    if (!Content) return message.channel.send("I can't convert nothing into text, idot! Try again, but with text this time.");

    let Result = await figletAsync(Content);

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription("```" + Result + "```")
      .setTimestamp();

    if (Content.length > 20)
      return message.channel.send("Bruh, I can't convert stuff that long into linefont. Make it >20 characters.");

    message.channel.send(embed);

    //End
  }
};
