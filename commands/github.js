async function githubCommand(sock, chatId) {
    const repoInfo = `

────●●►
> *➺ ᴛʜɪs ɪs 🌴ᴍᴏsᴇs-ᴍᴅ🌴 ᴛʏᴘᴇ .ᴍᴇɴᴜ ᴛᴏ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ✅*

> ❁ ᴊᴏɪɴ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ
*https://chat.whatsapp.com/JGmReDo55rvAAe9GhgV8YO*

> ❁ғᴏʟʟᴏᴡ ᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs 

*https://whatsapp.com/channel/0029VaFdPojJkK70RWo2Bf1l*

ᴍᴀᴅᴇ ʙʏ ᴍʀ ᴍᴏsᴇs ᴄʟʀ

╰──────────────●●►
`

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363401903613460@newsletter',
                    newsletterName: '🌴ᴍᴏsᴇs-ᴍᴅ🌴',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 