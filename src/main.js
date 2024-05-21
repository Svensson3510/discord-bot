import 'dotenv/config'
import { Client, IntentsBitField } from 'discord.js'

const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ]
})

bot.on('ready', (b) => {
    console.log(`${b.user.tag} is online.`)
})

bot.on('messageCreate', (message) => {
    if (message.author.bot) {
        return
    }
    if (message.content == 'Bot') {
        message.reply(`Hello dear friend. My name is ${bot.user.tag}!`)
    }
    if (message.content == 'Nameer') {
        for (let i = 0; i < 3; i++) {
            message.reply(`<@${591944715323179008n}>`)
        }
    }
})

bot.login(process.env.TOKEN)