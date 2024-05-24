import 'dotenv/config'
import { Client, IntentsBitField, ActivityType, EmbedBuilder } from 'discord.js'

export const bot = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})

bot.on('ready', (b) => {
    console.clear()

    bot.user.setActivity({
        name: 'Youtube.com',
        type: ActivityType.Watching
    })

    console.log(`${b.user.tag} is online.`)
})

bot.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return

    if (interaction.commandName == 'bot') {
        const embed = new EmbedBuilder()
            .setColor('Blue')
            // .setAuthor({ 
                // name: 'Svensson', 
                // iconURL: 'https://cdn.discordapp.com/avatars/885419091148550144/3857f7777bf9eef0673e40fb850d329a.webp?size=80'
            // })
            .setTitle('Information')
            .setDescription(`My name is **${bot.user.tag}**`)
            .setThumbnail('https://cdn.discordapp.com/avatars/1242199194035290193/79500f9417063b5ed80a4ffe40d10bf4.webp?size=80')
            .addFields(
                { name: '\u200A', value: '\u200A'},
                { name: '\u200A', value: '\u200A'},
                { name: 'Commands', value: '/bot\n/test\n/message\n/server', inline: true },
                { name: '\u200A', value: '\u200A', inline: true },
                { name: 'Additional', value: 'This bot is under construction.\nPlease feel free to suggest ideas.', inline: true },
                { name: '\u200A', value: '\u200A'}
            )
            // .setImage('https://cdn.discordapp.com/avatars/1242199194035290193/79500f9417063b5ed80a4ffe40d10bf4.webp?size=80')
            // .setTimestamp()
            // .setFooter({ 
                // text: 'Picture of Botsson', 
                // iconURL: 'https://cdn.discordapp.com/avatars/885419091148550144/3857f7777bf9eef0673e40fb850d329a.webp?size=80'
            // })
        
        interaction.reply({ embeds: [embed] })
    }

    if (interaction.commandName == 'test') {
        interaction.reply('Test.')
    }

    if (interaction.commandName == 'message') {
        interaction.reply(`<@${interaction.options.get('member').value}> ${interaction.options.get('template').value}`)
    }

    if (interaction.commandName == 'server') {
        const embed = new EmbedBuilder()
            .setColor('Orange')
            .setTitle('Server info')
            .setDescription('A server for the Founding Fathers of Albania and everyone in between.')
            .setFields(
                { name: '\u200A', value: '\u200A'},
                { name: 'Statistics', value: `

Member count: ${interaction.guild.memberCount}
Members with Nitro: ${interaction.guild.premiumSubscriptionCount}
Nsfw level: ${interaction.guild.nsfwLevel}

                `},
                { name: '\u200A', value: '\u200A'},
                { name: 'Date of creation', value: `
                
${interaction.guild.createdAt}

                `},
                { name: '\u200A', value: '\u200A'}
            )
        
        interaction.reply({ embeds: [embed] })
    }
})

bot.login(process.env.TOKEN)