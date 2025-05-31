async function githubCommand(sock, chatId) {
    const repoInfo = `𝗠𝗢𝗦𝗘𝗦-𝗫𝗗

『 *ɢɪᴛʜᴜʙ*』
https://github.com/mrmosesclr/MOSES-XD

 𓆩ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ𓆪

https://whatsapp.com/channel/0029VaFdPojJkK70RWo2Bf1l
   
𓆩ғᴏʟʟᴏᴡ ᴏᴜʀ ɢʀᴏᴜᴘ𓆪

https://chat.whatsapp.com/JGmReDo55rvAAe9GhgV8YO

「 *ᴄʀᴇᴀᴛᴏʀ*」:
https://wa.me/message/NJ5BNQW4XLQNC1

> _#ғᴏʀᴋ ᴀɴᴅ sᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏsɪᴛᴏʀʏ_

𓆩ု᪳ᴍᴀᴅᴇ ʙʏ ᴍʀ ᴍᴏsᴇs ᴄʟʀှ᪳𓆪`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363203551855118@newsletter',
                    newsletterName: '𝗠𝗢𝗦𝗘𝗦-𝗫𝗗',
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