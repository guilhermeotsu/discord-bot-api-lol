/** 
 * o modulo tem o nome e função execute que vai fazer a lógica
 */

module.exports = {
    name: '!ping',
    execute(message, args) { 
        message.channel.send('pong');
    }
};