var Piece   = require.main.require('./piece.js')
var Discord = require('discord.js')

class BladeAndSoul extends Piece {

    key() {
        return ''
    }

    hmcToGold(hmc, rate) {
        return Math.ceil( Math.ceil(hmc / 0.9) / rate)
    }

    initialize() {

        /**
         * Reloads all of the bots' pieces
         */
        this.addCommand('exchange|hmc <hmc> <rate>', (data, context) => {
            let hmc     = parseInt(data.hmc)
            let rate    = parseFloat(data.rate)

            let realHmc = Math.ceil(hmc / 0.9)
            let gold    = Math.ceil(realHmc / rate)

            let message   = `You need to sell **${realHmc}** hmc for **${gold}** <:gold:310707860705116160>`
            let footer    = `For ${hmc} hmc at ${rate} rate`

            const embed = new Discord.RichEmbed()
                .setColor(0xffdc30)
                .setDescription(message)
                .setAuthor('Currency exchange', 'https://cdn.discordapp.com/attachments/226091519805882370/310695069579739136/currency.png')
                .setThumbnail('https://cdn.discordapp.com/attachments/226091519805882370/310695069579739136/currency.png')

            context.message.channel.send('', {
                embed: embed
            })
        })

    }

}

module.exports = BladeAndSoul