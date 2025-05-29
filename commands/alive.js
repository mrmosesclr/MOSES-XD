const settings = require("../settings");
async function aliveCommand(sock, chatId) {
    try {
        const message = ` ────●●►
> *➺ ʙᴏᴛ ɪs ᴀʟɪᴠᴇ ᴛʏᴘᴇ .ᴍᴇɴᴜ ᴛᴏ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ✅*

> ❁ ᴊᴏɪɴ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ
*https://chat.whatsapp.com/JGmReDo55rvAAe9GhgV8YO*

> ❁ғᴏʟʟᴏᴡ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs 

*https://whatsapp.com/channel/0029VaFdPojJkK70RWo2Bf1l*

ᴍᴀᴅᴇ ʙʏ ᴍʀ ᴍᴏsᴇs ᴄʟʀ

╰──────────────●●►
`
        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401903613460@newsletter',
                    newsletterName: 'ᴍᴏsᴇs-ᴍᴅ',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;