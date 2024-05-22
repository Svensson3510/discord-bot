import 'dotenv/config'
import { REST, Routes, ApplicationCommandOptionType } from 'discord.js'
import { greetMessage, playMessage } from '../templates/messages.js'
import { 
    alexanderID, 
    antonID, 
    billyID, 
    gabrielID, 
    malteID, 
    maxID, 
    mikaelID, 
    nameerID, 
    williamID 
} from '../private/members.js'

const commands = [
    {
        name: 'test',
        description: 'Test'
    },
    {
        name: 'message',
        description: 'Send a message to a member',
        options: [
            {
                name: 'template',
                description: 'Message template',
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: 'play',
                        value: playMessage
                    },
                    {
                        name: 'greet',
                        value: greetMessage
                    }
                ]
            },
            {
                name: 'member',
                description: 'Message receiver',
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: 'nameer',
                        value: nameerID
                    },
                    {
                        name: 'malte',
                        value: malteID
                    },
                    {
                        name: 'alexander',
                        value: alexanderID
                    },
                    {
                        name: 'mikael',
                        value: mikaelID
                    },
                    {
                        name: 'billy',
                        value: billyID
                    },
                    {
                        name: 'anton',
                        value: antonID
                    },
                    {
                        name: 'gabriel',
                        value: gabrielID
                    },
                    {
                        name: 'max',
                        value: maxID
                    },
                    {
                        name: 'william',
                        value: williamID
                    }
                ]
            }
        ]
    }
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