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

bot.on('interactionCreate', async (interaction) => {
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
                { name: '\u200A', value: '\u200A' },
                { name: '\u200A', value: '\u200A' },
                { name: 'Commands', value: '/bot\n/test\n/message\n/server', inline: true },
                { name: '\u200A', value: '\u200A', inline: true },
                { name: 'Additional', value: 'This bot is under construction.\nPlease feel free to suggest ideas.', inline: true },
                { name: '\u200A', value: '\u200A' }
            )
            // .setImage('https://cdn.discordapp.com/avatars/1242199194035290193/79500f9417063b5ed80a4ffe40d10bf4.webp?size=80')
            // .setTimestamp()
            // .setFooter({ 
                // text: 'Picture of Botsson', 
                // iconURL: 'https://cdn.discordapp.com/avatars/885419091148550144/3857f7777bf9eef0673e40fb850d329a.webp?size=80'
            // })
        
        interaction.reply({ embeds: [embed], ephemeral: true })
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
            .setAuthor({
                name: `Owner: ${(await interaction.guild.fetchOwner()).user.displayName}`,
                iconURL: (await interaction.guild.fetchOwner()).user.avatarURL({ size: 256 })
            })
            .setThumbnail(interaction.guild.iconURL({ size: 512 }))
            .setTitle(`:flag_al: ${interaction.guild.name} :flag_al:`)
            .setDescription('A server for the Founding Fathers of Albania and everyone in between.')
            .setFields(
                { name: '\u200A', value: '\u200A' },
                { name: 'Member count', value: `[ ${interaction.guild.memberCount} ]`, inline: true },
                { name: 'Text channels', value: `[ ${interaction.guild.channels.cache.filter((c) => c.type == 0).toJSON().length} ]`, inline: true },
                { name: 'Voice channels', value: `[ ${interaction.guild.channels.cache.filter((c) => c.type == 4).toJSON().length} ]`, inline: true },
                { name: 'Nsfw level', value: `[ ${interaction.guild.nsfwLevel} ]`, inline: true },
                { name: 'Server boosts', value: `[ ${interaction.guild.premiumSubscriptionCount} ]`, inline: true },
                { name: 'Server tier', value: `[ ${interaction.guild.premiumTier} ]`, inline: true },
                { name: '\u200A', value: '\u200A' },
                { name: 'Members', value: (await interaction.guild.members.fetch()).toJSON().join(', ') },
                { name: '\u200A', value: '\u200A' },
                { name: 'Roles', value: interaction.guild.roles.cache.toJSON().join(', ') },
                { name: '\u200A', value: '\u200A' },
                // { name: 'Boosters', value: interaction.guild.roles.cache.get('1174684116889911396').members.toJSON().join(', ')},
                { name: '\u200A', value: '\u200A' },
                { name: 'Date of creation', value: `
                
${interaction.guild.createdAt}

**ID:** ${interaction.guildId}

                `}
            )
        
        interaction.reply({ embeds: [embed], ephemeral: true })
    }
})

bot.login(process.env.TOKEN)