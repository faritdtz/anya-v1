let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/cc0f644687ad3e4ccd972.png', m, { packname: "okeh", author: "Anya" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
