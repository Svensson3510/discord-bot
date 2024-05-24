import { ApplicationCommandOptionType } from 'discord.js'
import { greetMessage, playMessage, skolkMessage } from '../templates/messages.js'
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

export const messageCommand = {
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
                },
                {
                    name: 'skolk',
                    value: skolkMessage
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