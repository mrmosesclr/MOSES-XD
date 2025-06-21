const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
*╭━━━[ᴍᴀʀɪɴʏᴀᴍᴇ sᴛᴜᴅɪᴏs]━━━╮*
*┋*▧ *ʙᴏᴛɴᴀᴍᴇ*: ${settings.botName}
*┋*▧ *ᴏᴡɴᴇʀ*: ${settings.botOwner}
*┋*▧ *ᴠᴇʀsɪᴏɴ*: ${settings.version}
*┋*▧ *ᴛᴏᴛᴀʟ ᴄᴍᴅs*: [100]
*┋*▧ *ᴍᴏᴅᴇ*: Public
*┋*▧ *ᴘʀᴇғɪx*: "."
╰─────────────╶╶···◈


╭─────[ 𝐆𝐄𝐍𝐄𝐑𝐀𝐋 ]───···◈
┋      *ᴍᴏsᴇs-xᴅ*
├❍ .menu
├❍ .xd
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
┋      *ᴍᴏsᴇs-xᴅ*
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
┋      *ᴍᴏsᴇs-xᴅ*
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
┋      *ᴍᴏsᴇs-xᴅ*
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
┋     *ᴍᴏsᴇs-xᴅ*
├❍ .xd2
├❍ .github
├❍ .script
├❍ .repo
╰─────────────╶╶···◈

> 「 *ᴀɪ*」
╭─────────────···◈ 
┋        *ᴍᴏsᴇs-xᴅ*
├❍ .gpt <qstn>
├❍ .gemini <qstn>
├❍ .imagine <prompt>
├❍ .flux <prompt>
╰─────────────╶╶···◈

> 「 *ғᴜɴ*」
╭─────────────···◈ 
┋       *ᴍᴏsᴇs-xᴅ*
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
├❍ .shayari
├❍ .trivia
├❍ .answer
├❍ .truth
├❍ .dare
├❍ .roseday
├❍ .goodnight 
╰─────────────╶╶···◈

> 「 *ᴛᴇxᴛᴍᴀᴋᴇʀ*」
╭─────────────···◈ 
*┋*    *ᴍᴏsᴇs-xᴅ*
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
┋         *ᴍᴏsᴇs-xᴅ*  
├❍ .play
├❍ .song
├❍ .mp3
├❍ .audio
├❍ .instagram
├❍ .mp4
├❍ .facebook
├❍ .tiktok
├❍ .video
╰─────────────╶╶···◈
━━━━━━━━━━━━━━━━━━━━━
> _*ᴍᴀᴅᴇ ʙʏ ᴍʀ ᴍᴏsᴇs ᴄʟʀ*_
━━━━━━━━━━━━━━━━━━━━━
`;

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
                        newsletterJid: '120363203551855118@newsletter',
                        newsletterName: '𝗠𝗢𝗦𝗘𝗦-𝗫𝗗',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
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
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
