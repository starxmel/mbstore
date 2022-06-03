const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

let setting = JSON.parse(fs.readFileSync('./setting.json'))
prefix = setting.prefix

module.exports = welcome = async (Ramdani, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await Ramdani.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await Ramdani.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
          }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(Ramdani.user.jid)) {
             const mdata = await Ramdani.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await Ramdani.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await Ramdani.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let w = Ramdani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `Hi @${num.split('@')[0]}, \n┌Nomor : ${num.split('@')[0]}\n├Bɪᴏ : ${thu.status}\n└Mᴇᴍʙᴇʀs : ${memeg}\n\n Selamat Datang di ${mdata.subject}`
                tekss = `🕰️ : ${time_wel} - 🗓️ : ${time_welc}`
                welcomeBut = [{buttonId:`#intro`,buttonText:{displayText:'Wellcome 👋'},type:1}]
                welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                Ramdani.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(Ramdani.user.jid)) {
                const mdata = await Ramdani.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await Ramdani.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = Ramdani.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `Selamat Tinggal 👋 @${num.split('@')[0]}`
                goodbyeBut = [{buttonId:` `,buttonText:{displayText:'Selamat Tinggal 👋'}, type:1}]
                goodbyeButt = { contentText: `${out}`, footerText: `1 MEMBER KELUAR `, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                Ramdani.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
}
	}