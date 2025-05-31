const settings = require("../settings");
const fs = require('fs');
const path = require("path");
async function helpCommand(_0x388974, _0x215cfa, _0x360cff) {
  const _0x27840d = `
  ➺ _𝐂𝐑𝐄𝐀𝐓𝐈𝐕𝐄 𝐌𝐈𝐍𝐃𝐒_
╭─────────────···◈ 
*┋*  🇿🇼ᴍᴀʀɪɴʏᴀᴍᴇ sᴛᴜᴅɪᴏs
*┋*  *ᴏᴡɴᴇʀ*: ${settings.botOwner}  
*┋*  *ᴠᴇʀsɪᴏɴ*: ${settings.version}
*┋*  *ᴘʀᴇғɪx:*"." 
╰─────────────╶╶···◈

> 🌴𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒:
╭─────────────···◈ 
┋      *ᴍᴏsᴇs-xᴅ*
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
├❍ .mrmoses
├❍ .github
├❍ .script
├❍ .clr
╰─────────────╶╶···◈

> 「 *ᴀɪ*」
╭─────────────···◈ 
┋        *ᴍᴏsᴇs-xᴅ*
├❍ .gpt <qstn>
├❍ .gemini <qstn>
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
├❍ .trivia
├❍ .answer
├❍ .truth
├❍ .dare
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
├❍ .instagram
├❍ .facebook
├❍ .tiktok
╰─────────────╶╶···◈
━━━━━━━━━━━━━━━━━━━━━
> _*ᴍᴀᴅᴇ ʙʏ ᴍʀ ᴍᴏsᴇs ᴄʟʀ*_
𓆩ု᪳ғᴏʟʟᴏᴡ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇsှ᪳𓆪
━━━━━━━━━━━━━━━━━━━━━
`;
  try {
    const _0x1b0cc6 = path.join(__dirname, "../assets/bot_image.jpg");
    if (fs.existsSync(_0x1b0cc6)) {
      const _0x486c9b = fs.readFileSync(_0x1b0cc6);
      await _0x388974.sendMessage(_0x215cfa, {
        'image': _0x486c9b,
        'caption': _0x27840d,
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': '120363203551855118@newsletter',
            'newsletterName': "𝗠𝗢𝗦𝗘𝗦-𝗫𝗗",
            'serverMessageId': -0x1
          }
        }
      });
    } else {
      console.error("Bot image not found at:", _0x1b0cc6);
      await _0x388974.sendMessage(_0x215cfa, {
        'text': _0x27840d,
        'contextInfo': {
          'forwardingScore': 0x1,
          'isForwarded': true,
          'forwardedNewsletterMessageInfo': {
            'newsletterJid': "120363203551855118@newsletter",
            'newsletterName': "𝗠𝗢𝗦𝗘𝗦-𝗫𝗗",
            'serverMessageId': -0x1
          }
        }
      });
    }
  } catch (_0x316384) {
    console.error("Error in help command:", _0x316384);
    await _0x388974.sendMessage(_0x215cfa, {
      'text': _0x27840d
    });
  }
}
module.exports = helpCommand;