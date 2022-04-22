let handler = async (m, { conn, text }) => {
	//yahaha santet onlen ges
    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Yang Ingin Di santet!', m)
	
  conn.reply(m.chat, `
*Santet Telah di Kirim kepada ${text}* 🔥👻

`.trim(), m)
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/17dca9163915730d769d2.jpg', m, { packname: "sticker by", author: "Anya" })
}
handler.help = ['santet <teks>']
handler.tags = ['tools']
handler.command = /^(santet)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
