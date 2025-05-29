const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
 ➺ _𝐂𝐑𝐄𝐀𝐓𝐈𝐕𝐄 𝐌𝐈𝐍𝐃𝐒_
╭─────────────···◈ 
*┋*  🇿🇼ᴍᴀʀɪɴʏᴀᴍᴇ sᴛᴜᴅɪᴏs
*┋*  *ᴏᴡɴᴇʀ*:◈ᴍʀ ᴍᴏsᴇs◈  
*┋*  *ᴠᴇʀsɪᴏɴ* v${settings.version}
*┋*  *ᴘʀᴇғɪx:*"." 
╰─────────────╶╶···◈

> 🌴𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:
╭─────────────···◈ 
┋      *ᴍᴏsᴇs-ᴍᴅ*
├❍ .menu/moses
├❍ .ping
├❍ .alive
├❍ .tts
├❍ .owner
├❍ .joke
├❍ .quote
├❍ .fact
├❍ .weather
├❍ .news
├❍ .attp
├❍ .lyrics
├❍ .8ball
├❍ .groupinfo
├❍ .admins 
├❍ .vv
├❍ .pair
├❍ .rent
╰─────────────╶╶···◈

> 「 *ɪᴍᴀɢᴇ-sᴛɪᴄᴋᴇʀ*」
╭─────────────···◈ 	
┋      *ᴍᴏsᴇs-ᴍᴅ*
├❍ .blur 
├❍ .simage 
├❍ .sticker
├❍ .tgsticker 
├❍ .meme
├❍ .take 
├❍ .emojimix
╰─────────────╶╶···◈

> 「 *ᴀᴅᴍɪɴ*」
╭─────────────···◈
┋      *ᴍᴏsᴇs-ᴍᴅ*
├❍ .ban
├❍ .promote
├❍ .demote
├❍ .mute
├❍ .unmute
├❍ .delete
├❍ .kick
├❍ .warnings
├❍ .warn
├❍ .antilink
├❍ .antibadword
├❍ .clear
├❍ .tag
├❍ .tagall
├❍ .chatbot
├❍ .resetlink
╰─────────────╶╶···◈

> 「 *ᴏᴡɴᴇʀ*」:
╭─────────────···◈ 
┋      *ᴍᴏsᴇs-ᴍᴅ*
├❍ .mode
├❍ .autostatus
├❍ .clearsession
├❍ .antidelete
├❍ .cleartmp
├❍ .setpp
├❍ .autoreact
╰─────────────╶╶···◈

> 「 *ɢɪᴛʜᴜʙ*」
╭─────────────···◈ 
┋     *ᴍᴏsᴇs-ᴍᴅ*
├❍ .mrmoses
├❍ .github
├❍ .script
├❍ .clr
╰─────────────╶╶···◈

> 「 *ᴀɪ*」
╭─────────────···◈ 
┋        *ᴍᴏsᴇs-ᴍᴅ*
├❍ .gpt <qstn>
├❍ .gemini <qstn>
╰─────────────╶╶···◈

> 「 *ғᴜɴ*」
╭─────────────···◈ 
┋       *ᴍᴏsᴇs-ᴍᴅ*
├❍ .compliment
├❍ .insult
├❍ .flirt 
├❍ .character
├❍ .wasted
├❍ .ship
├❍ .simp
├❍ .stupid
├❍ .tictactoe 
├❍ .hangman
├❍ .guess
├❍ .trivia
├❍ .answer
├❍ .truth
├❍ .dare
╰─────────────╶╶···◈

> 「 *ᴛᴇxᴛᴍᴀᴋᴇʀ*」
╭─────────────···◈ 
*┋*    *ᴍᴏsᴇs-ᴍᴅ*
├❍ .metallic
├❍ .ice 
├❍ .snow 
├❍ .impressive
├❍ .matrix
├❍ .light
├❍ .neon 
├❍ .devil 
├❍ .purple
├❍ .thunder
├❍ .leaves 
├❍ .1917
├❍ .arena 
├❍ .hacker 
├❍ .sand 
├❍ .blackpink
├❍ .glitch 
├❍ .fire 
├❍ .water
╰─────────────╶╶···◈

> 「 *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*」:
╭─────────────···◈ 
┋         *ᴍᴏsᴇs-ᴍᴅ*  
├❍ .play
├❍ .song
├❍ .mp3
├❍ .instagram
├❍ .facebook
├❍ .tiktok
╰─────────────╶╶···◈
━━━━━━━━━━━━━━━━━━
> _*ᴍᴀᴅᴇ ʙʏ ᴍʀ ᴍᴏsᴇs ᴄʟʀ*_
━━━━━━━━━━━━━━━━━━
`
     try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401903613460@newsletter',
                        newsletterName: '𝔪𝕒𝔯𝕚𝔫𝕪𝔞𝔪𝔢 𝕤𝔱𝕦𝔡𝕚𝔬𝕤',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401903613460@newsletter',
                        newsletterName: '𝔪𝕒𝔯𝕚𝔫𝕪𝔞𝔪𝔢 𝕤𝔱𝕦𝔡𝕚𝔬𝕤',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
