const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const text2png = require('text2png');
const config = require("./config.json");
client.on("ready", () => {
  console.log("I am ready!");
});

const prefix = config.prefix;
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "color" || prefix + "c" )) {
    let date = Date.now() + ""
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const [com, color, ...note] = args
    const name = date + '.png'
    fs.writeFileSync(name, text2png(note.join(" "), {
      font: '16px Whitney Bold',
      textColor: color,
      bgColor: '#36393e',
      lineSpacing: 10,
      padding: 0
    }));
    message.channel.send(message.author.username " said:", {
      file: name // Or replace with FileOptions object
    });
    message.delete()
  } else
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
});

client.login(config.token);
