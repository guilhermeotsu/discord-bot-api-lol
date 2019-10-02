/**
 * dar export permite que vc de require onde quiser 
 */
module.exports = { 
    name: '!server',
    execute(message, args) { 
        message.channel.send(
            `O nome do servidor é ${message.guild.name}`
        )
    }
}