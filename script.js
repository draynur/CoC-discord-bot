const axios = require("axios")
require("dotenv").config()
const {Client, MessageEmbed} = require("discord.js")

const client = new Client()

const config = {
  headers: {
    Authorization: process.env.SECRET
  }
}

client.on("ready", () => {
  console.log("Made it home!")
})

client.on("message", (message) => {
  const words = message.content.split(" ");
  if (words[0] == ".coc") {
    axios.get("http://localhost:5001/clash-of-clans-bot-64c16/us-central1/cocData", config).then(response=>{
      // message.channel.send(response.data);
      console.log(response.data)
    })
  }
});

// eslint-disable-next-line max-len
client.login(process.env.TOKEN);