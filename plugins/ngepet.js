let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn ,text }) => {
    let __timers = (new Date - global.db.data.users[m.sender].lastngepet)
    let _timers = (300000 - __timers)
    let order = global.db.data.users[m.sender].ngepet
    let timers = clockString(_timers) 
let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let user = global.db.data.users[m.sender]
    let buttons = [
{buttonId: '.inv', buttonText: {displayText: 'Inventory'}, type: 1}, 
]
const buttonMessage = {
    contentText: `\nSepertinya Anda Terlalu sering ngepet mohon tunggu\n🕔 *${timers}*`,
    footerText: wm, 
    buttons: buttons,
    headerType: 1
}
    if (new Date - global.db.data.users[m.sender].lastngepet > 300000) {
let randomaku1 = `${Math.floor(Math.random() * 10)}`
let randomaku2 = `${Math.floor(Math.random() * 10)}`
let randomaku4 = `${Math.floor(Math.random() * 5)}`
let randomaku3 = `${Math.floor(Math.random() * 10)}`
let randomaku5 = `${Math.floor(Math.random() * 10)}`

.trim()

let rbrb1 = (randomaku1 * 2)
let rbrb2 = (randomaku2 * 10) 
let rbrb3 = (randomaku3 * 1)
let rbrb4 = (randomaku4 * 15729)
let rbrb5 = (randomaku5 * 120)


zero1 = `${rbrb1}`
zero2 = `${rbrb2}`
zero3 = `${rbrb3}`
zero4 = `${rbrb4}`
zero5 = `${rbrb5}`

dimas = `
🐖Berhasil Berubah Saatnya Mencari
mangsaa hahaha🐷, semoga lilinnya 
tidak padam 🕯️
`

dimas2 = `
🐷wah.. rumah ini banyak sekali uang, jangan sampai aku ketahuan warga..
pov:kseksek..ngokngok..

🐷saatnya balik ke rumah...
`

dimas3 = `
dalam perjalanan pulang:
warga: 😳woy ada babi anying
 eh iya ada babi..
tangkep woy tangkep😠
woy babgi ngepet jan lari lu😡

🐷wah ketahuan warga, larii🐖🐖.

dimas4 = `
🐷huftt untung nggak ketahuan warga🥴
💰*yeyeyye dapet cuan banyakk*💵💵🤑

*Ayok Daftarkan diri anda di babi ngepet, cara cepat mendapatkan uang yahahaha*
`

hsl = `
*—[ Hasil Ngepet ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])} ]—*

 🗿 💹 Uang = [ ${zero4} ]
 🗿 Exp = [ ${zero5} ] 		 
 🗿 Ngepet Berhasil = +1

 🐗Total Ngepet Sebelumnya : ${order}

${wm}
`
conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/4dd5a1ee3b6927441f002.jpg', m, { packname: "sticker by", author: "Anya" })



global.db.data.users[m.sender].money += rbrb4
global.db.data.users[m.sender].exp += rbrb5
global.db.data.users[m.sender].ngepet += 1


setTimeout(() => {
                     m.reply(`${hsl}`)
                     }, 27000) 
               
                     setTimeout(() => {
                     m.reply(`${dimas4}`)
                      }, 25000)
                
                     setTimeout(() => {
                     m.reply(`${dimas3}`)
                     }, 20000) 
                        
                     setTimeout(() => {
                     m.reply(`${dimas2}`)
                     }, 15000) 
                    
                     setTimeout(() => {
                     m.reply(`${dimas}`)
                     }, 10000) 
                     
                     setTimeout(() => {
                     m.reply('Waktunya Berubah!🧍🏻>🐖...')
                     }, 0) 
  user.lastngepet = new Date * 1
    } else conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage ,m )
}
handler.help = ['ngepet']
handler.tags = ['rpg']
handler.command = /^(ngepet|babingepet)$/i
handler.register = true

module.exports = handler

let wm = global.botwm

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}