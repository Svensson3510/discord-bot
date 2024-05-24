import 'dotenv/config'
import { REST, Routes } from 'discord.js'
import { testCommand } from '../commands/test.js'
import { messageCommand } from '../commands/message.js'
import { serverCommand } from '../commands/server.js'
import { botCommand } from '../commands/bot.js'

const commands = [
    botCommand,
    testCommand,
    messageCommand,
    serverCommand
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {

        console.log('Command registration started...')

        await rest.put(
            Routes.applicationGuildCommands(
                process.env.BOT_ID, 
                process.env.GUILD_ID),
                { body: commands }
            )
            
        console.log('Commands were registered successfully!')

    } catch (error) {
        console.log('An error occurred', error)
    }
})()
