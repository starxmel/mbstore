const {
   WAConnection,
   MessageType,
   Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const moment = require('moment-timezone')
const speed = require('performance-now')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const os = require('os')
const hx = require('hxz-api')
const yts = require( 'yt-search')
const { exec } = require('child_process')

//LIB
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/index')
const { runtime, sleep } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { asupanapi } = require('./lib/asupan')
const { asupanapi2 } = require('./lib/asupan2')
const { scraper } = require('./lib/scraper')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { pinterest } = require('./lib/pinterest')
const { bahasa } = require('./lib/kodebahasa')
const { negara } = require('./lib/kodenegara')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const afk = require("./lib/afk");

//DATABASE
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const dewasa = JSON.parse(fs.readFileSync('./database/user/dewasa.json'))
const _welcome = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const  _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const _banned = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'))
const _mute = JSON.parse(fs.readFileSync('./database/group/mute.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const _antivirus = JSON.parse(fs.readFileSync('./database/group/antivirus.json'))
const _badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const scommand = JSON.parse(fs.readFileSync("./database/bot/scommand.json"));

//------------------------ < S T I C K E R  W M > ------------------------\\
const Exif = require('./lib/exif');
const exif = new Exif();

//MESSAGE
const { mess } = require('./message/mess')
const { downloadmenu, asupanmenu, cecanmenu, nsfwmenu, stickermenu, kodemenu, vnmenu, convertermenu, toolsmenu, hiburanmenu, groupmenu, ownermenu } = require('./message/help')

//TEMP
let setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
let imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
let videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
let audionye = JSON.parse(fs.readFileSync('./temp/vn.json'));

//CONFIG
const apikey = JSON.parse(fs.readFileSync('./apikey.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//APIKEY
ramdaniapi = apikey.RamdaniKey
danzzapi = apikey.DanzzKey
hardiantoapi = apikey.HardiantoKey
lolhumanapi = apikey.LolHumanKey
lolapi = apikey.LolKey
lolhuman = apikey.Lolhumangame

//SETTINGS
namabot = setting.NamaBot
namaowner = setting.NamaOwner
nomorbot = setting.NomorBot
nomorowner = setting.NomorOwner
nomorowner2 = setting.NomorOwner2
gayamenu = setting.GayaMenu
prefixx = setting.Prefix

//DONASI
gopay = setting.Gopay
dana = setting.Dana
ovo = setting.Ovo
pulsa = setting.Pulsa
urlqris = setting.Qris
saweria = setting.Saweria

//WATERMARK
wmstick = setting.WmStick
wmreply = setting.WmReply
wmtroli = setting.WmTroli
wmtext = setting.WmText

//REPLY
done = "_success kak jangan lupa follow_ : https://instagram.com/mballstore",

//TRUE AND FALSE
public = true
self = false

//PICTURE
randompicture = ['photo1','photo2','photo3','photo4','photo5','photo6']
const randompoto = randompicture[Math.floor(Math.random() * (randompicture.length))]
const photo1 = fs.readFileSync("./media/picture/photo1.jpg");
const photo2 = fs.readFileSync("./media/picture/photo2.jpg");
const photo3 = fs.readFileSync("./media/picture/photo3.jpg");
const photo4 = fs.readFileSync("./media/picture/photo4.jpg");
const photo5 = fs.readFileSync("./media/picture/photo5.jpg");
const photo6 = fs.readFileSync("./media/picture/photo6.jpg");
const thumb = fs.readFileSync(`./media/picture/${randompoto}.jpg`)

//AUDIO
randommp3 = ['males','buatapa','anjing','apa','araara','wataisi','arigatou','mastah']
const randomaudio = randommp3[Math.floor(Math.random() * (randommp3.length))]
const males = fs.readFileSync("./media/audio/males.mp3");
const buatapa = fs.readFileSync("./media/audio/buatapa.mp3");
const anjing = fs.readFileSync("./media/audio/anjing.mp3");
const apa = fs.readFileSync("./media/audio/apa.mp3");
const araara = fs.readFileSync("./media/audio/araara.mp3");
const wataisi = fs.readFileSync("./media/audio/wataisi.mp3");
const arigatou = fs.readFileSync("./media/audio/arigatou.mp3");
const mastah = fs.readFileSync("./media/audio/mastah.mp3");

//ADD CMD
const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null;
Object.keys(scommand).forEach((i) => {
if (scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return scommand[position].chats;
}
};
//REGISTRASI
const addRegist = (registid, sender, age, time, serials) => {
const reg = { id: registid, name: sender, age: age, time: time, serial: serials }
register.push(reg)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const addSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekRegist = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}
//DEWASA
const addDewasa = (dewasaid, sender, age, time, serimek) => {
const dew = { id: dewasaid, name: sender, age: age, time: time, serimek: serimek }
dewasa.push(dew)
fs.writeFileSync('./database/user/dewasa.json', JSON.stringify(dewasa))
}
const addSerimek = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
const cekDewasa = (sender) => {
let status = false
Object.keys(dewasa).forEach((i) => {
if (dewasa[i].id === sender) {
status = true
}
})
return status
} 
    function danz(seconds){
    function pad(s){
    return (s < 10 ? '0' : '') + s;
    }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
module.exports = Ramdani = async (Ramdani, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const ar = args.map((v) => v.toLowerCase())
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const botNumber = Ramdani.user.jid
			const ownerNumber = setting.NomorOwner2
			const isGroup = from.endsWith('@g.us')
			let sender = isGroup ? mek.participant : mek.key.remoteJid
			let senderr = mek.key.fromMe ? Ramdani.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
			const conts = mek.key.fromMe ? Ramdani.user.jid : Ramdani.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const totalchat = await Ramdani.chats.all()
            const pushname = mek.key.fromMe ? Ramdani.user.name : conts.notify || conts.vname || conts.name || '-'
			const groupMetadata = isGroup ? await Ramdani.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isAfkOn = afk.checkAfkUser(sender, _afk)
			const isMuted = isGroup ? _mute.includes(from) : false
			const isAntiLink = isGroup ? _antilink.includes(from) : false
			const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isBanned = _banned.includes(sender)
			const isPremium= _premium.includes(sender)
			const isRegister = cekRegist(sender)
			const isDewasa = cekDewasa(sender)
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelcome = isGroup ? _welcome.includes(from) : false
            const isAntivirus = isGroup ? _antivirus.includes(from) : false
			const isBot = botNumber.includes(senderr)
			const isOwner = ownerNumber.includes(senderr)
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Ramdani.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "© By MB Offcial","listType": "SINGLE_SELECT","sections": list}}, {})
            return Ramdani.relayWAMessage(po, {waitForAck: true})
        }
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
const reply = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
const reply2 = (teks) => {
Ramdani.sendMessage(from, teks, text, { thumbnail: thumb, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${wmtroli}`,body:"Meng F",previewType:"PHOTO",thumbnail:thumb,sourceUrl:`https://youtube.com/c/RamdaniOfficial`}}})
}
const freply = (teks) => {
Ramdani.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${ucapanWaktu}`,
                "body": `${wmtroli}`,
                "mediaType": "10",
                "mediaUrl": `https://instagram.com/mballstore`,
                "thumbnailUrl": "https://instagram.com/mballstore",
                "thumbnail": thumb,
                "sourceUrl": `https://instagram.com/mballstore`,
},mentionedJid:[sender]}, quoted : mek})
};
			const sendMess = (hehe, teks) => {
				Ramdani.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Ramdani.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Ramdani.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				freply(` *GROUP LINK DETECTOR 📣*\nKamu Terdeksi Mengirim Link🔗`)
				setTimeout(() => {
				Ramdani.groupRemove(from, [kic]).catch((e) => { freply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			   }
			//FAKE TROLI

           const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanWaktu}`, pageCount: 0, fileName: `Ramdani Botz`, jpegThumbnail: fs.readFileSync(`./media/picture/${randompoto}.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync(`./media/picture/${randompoto}.jpg`) }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `${wmtroli} \nRp. 999.999.999`, 
                            orderTitle: `${wmtroli}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `${wmtroli}`, 
                            orderTitle: `${wmtroli}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftroli = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 999999999,
                            status: 1,
                            surface : 1,
                            message: `${wmtroli}`, 
                            orderTitle: `${wmtroli}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           Ramdani.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync(`./media/picture/${randompoto}.jpg`),
                                  "itemCount":999999999,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}


	Ramdani.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	Ramdani.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              


    const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await Ramdani.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    Ramdani.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await Ramdani.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Ramdani.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               Ramdani.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": thumb
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }          
      
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Ramdani.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    const add = function(from, orangnya){
	       Ramdani.groupAdd(from, orangnya)
}
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      Ramdani.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    };
    const hideTag = async function(from, text){
	       let anu = await Ramdani.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}

	       Ramdani.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync(`media/picture/${randompoto}.jpg`)}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
    const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return freply(`${err}`)
           exec(`webpmux -set exif ./media/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return freply(`${error}`)
           Ramdani.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  freply("No target..") }
           let g = await Ramdani.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Ramdani.groupMakeAdmin(to, [i])
           freply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  freply("No target..") }
           let g = await Ramdani.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = Ramdani.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await Ramdani.groupDemoteAdmin(to, [i])
           freply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
                download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           Ramdani.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       Ramdani.sendMessage(from, hasil, type, options).catch(e => {
	       Ramdani.sendMessage(from, { url : link }, type, options).catch(e => {
	       freply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}



			colors = ['red','white','black','blue','yellow','aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = Ramdani.contacts[from] != undefined ? Ramdani.contacts[from].vname || Ramdani.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 99999, status: 200, thumbnail: thumb, surface: 200, message: wmtroli, orderTitle: 'Ramdani Store', sellerJid: '0@s.whatsapp.net'} } }
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Bot'; if (!author) author = 'By Mb Official';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/sticker/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/sticker/${name}.exif`, buffer, (err) => {	
					return `./media/sticker/${name}.exif`	
				})	
	          }
Ramdani.updatePresence(from, Presence.composing)
if (!public) {
if (!isOwner && !mek.key.fromMe) return
}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night🌃'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon🌉'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon🌆'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon🌇'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night🌃'
 }
const fdanz = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${wmtroli}`,
                 "title": `${wmtroli}`,
                 'jpegThumbnail': fs.readFileSync(`./media/picture/${randompoto}.jpg`),
                        }
	                  } 
                     }
//Buat fake info bot
//DI UBAH YATIM
danzrun = process.uptime() 
           Ramdani.setStatus(`${namabot} Aktif Selama ${(danzrun)} © Creator By MB Store`).catch((_)=>_); //DI UBAH YATIMM
          settingstatus = new Date() * 1;
const jmn = moment.tz('Asia/Jakarta').format('HH.mm')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const fakeText = (teks) => {
Ramdani.sendMessage(from, teks, text, {quoted: troli })
}
const math = (teks) => {
           return Math.floor(teks)
       }
switch(command) {
case 'verify':
case 'daftar':
if (isBanned) return freply(mess.banned)
freply(mess.wait)
const serials = addSerial(20)
try {
ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg' 
veri = sender
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
addRegist(sender, serials)
textt = `┌─ ❑ *Pendaftaran Berhasil!*
├ Nama: ${pushname}
├ Seri: ${serials}
├ Nomor: ${sender.split('@')[0]}
├ Tag: @${sender.split('@')[0]}
├ Pada: ${Tanggal}
├ Pukul: ${jam}
└─ ❑`
let buff = await getBuffer(`${ppimg}`)
footer = `${wmtext}`
but = [{ buttonId: `menu`, buttonText: { displayText: 'Menu' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'Donasi' }, type: 1 }]
/*Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: textt, contextInfo: {'mentionedJid': [sender]}})*/
sendButImage(from, textt, footer, buff, but, {quoted: mek, caption: textt, contextInfo: {'mentionedJid': [sender]}})
break
//DEWASA
case 'saya18':
case 'my18':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
const serimek = addSerimek(20)
try {
ppimg = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
imglu = 'https://mekpa-result.herokuapp.com/bgverify.jpeg'
veri = sender
fs.writeFileSync('./database/user/dewasa.json', JSON.stringify(dewasa))
addDewasa(sender, serimek)
const texttt = `
┌─ ❑ *Verifykasi Berhasil!*
├ Nama: ${pushname}
├ Usia: 18
├ Seri: ${serimek}
├ Nomor: ${sender.split('@')[0]}
├ Tag: @${sender.split('@')[0]}
├ Pada: ${Tanggal}
├ Pukul: ${jam}
└─ ❑ `
let bufff = await getBuffer(`${ppimg}`)
footer = `${wmtext}`
butt = [{ buttonId: `menu`, buttonText: { displayText: 'Menu' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'Donasi' }, type: 1 },{ buttonId: `Store`, buttonText: { displayText: 'Donasi' }, type: 1 }]
/*Ramdani.sendMessage(from, buff, MessageType.image, {quoted: mek, caption: textt, contextInfo: {'mentionedJid': [sender]}})*/
sendButImage(from, texttt, footer, bufff, butt, {quoted: mek, caption: texttt, contextInfo: {'mentionedJid': [sender]}})
break
//BOCIL
case 'my11':
case 'my12':
case 'my13':
case 'my14':
case 'my15':
case 'my16':
case 'my17':
//
case 'saya11':
case 'saya12':
case 'saya13':
case 'saya14':
case 'saya15':
case 'saya16':
case 'saya17':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`*SKIP LU MASIH BOCIL :V*`)
break
//MENU
case 'menu':
case 'help':
case 'h':
case 'm':
case 'danz':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
teks =`
*Hi Aku MB Store BOT 👋, Siap melayani*
*kebutuhan Topup Game Online & Sosmed*
*serta kebutuhan lainnya.*

 *Nama Owner* : ${namaowner}
 *Name Bot* : ${namabot}
 *Tanggal* : ${tanggal}/${bulan}/${tahun}
 *Prefix* : #Menu
 *Jam* : ${jam}
 *Version* : 3.1

 ❏ #ownermenu
 ❏ #downloadmenu
 ❏ #groupmenu
 ❏ #storemenu
 ❏ #nsfwmenu
 ❏ #stickermenu
 ❏ #kodemenu
 ❏ #hiburanmenu`

img = fs.readFileSync(`./media/picture/thumb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `Donasi`, buttonText: { displayText: 'Donasi' }, type: 1 },{ buttonId: `list`, buttonText: { displayText: 'Store' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'list':
if (isBanned) return freply(mess.banned)
teks =`\`\`\`SILAHKAN PILIH MENU STORE\`\`\`

➥ \`\`\`List Harga\`\`\` http://bit.ly/PricelistMBStore 
➥ \`\`\`List Antrian\`\`\` https://bit.ly/ListAntrianMBStore
➥ \`\`\`Instagram & Testimoni\`\`\` https://instagram.com/mballstore
➥ \`\`\`Link Group\`\`\` https://chat.whatsapp.com/JLXS2Swr3IgCPm7GhF2ibg`
img = fs.readFileSync(`./media/picture/thumb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'VIP MEMBER' }, type: 1 },{ buttonId: `memberuser`, buttonText: { displayText: 'MEMBER' }, type: 1 },{ buttonId: `pecahanml`, buttonText: { displayText: 'PECAHAN DIAMOND' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
//ALLMENU
break
case 'hidenmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
teks = `*Hallo Kak ${pushname}👋 ${ucapanWaktu}*

*⌜ Download Menu ⌟* 
${gayamenu} ${prefix}play <query>
${gayamenu} ${prefix}ytmp3 <link>
${gayamenu} ${prefix}ytmp4 <link>
${gayamenu} ${prefix}tiktok <link>
${gayamenu} ${prefix}tiktoknowm <link>
${gayamenu} ${prefix}tiktokmusic <link>
${gayamenu} ${prefix}pinterest <query>

*⌜ Asupan Menu ⌟* 
${gayamenu} ${prefix}asupan1
${gayamenu} ${prefix}asupan2
${gayamenu} ${prefix}santuy
${gayamenu} ${prefix}hijaber
${gayamenu} ${prefix}ukhty
${gayamenu} ${prefix}bocil
${gayamenu} ${prefix}gheayuby
${gayamenu} ${prefix}rikagusriani

*⌜ Cecan Menu ⌟* 
${gayamenu} ${prefix}randomcecan
${gayamenu} ${prefix}cecan

*⌜ Nsfw Menu ⌟* 
${gayamenu} ${prefix}hentai
${gayamenu} ${prefix}art
${gayamenu} ${prefix}bts
${gayamenu} ${prefix}exo
${gayamenu} ${prefix}elf
${gayamenu} ${prefix}loli
${gayamenu} ${prefix}neko
${gayamenu} ${prefix}waifu
${gayamenu} ${prefix}shota
${gayamenu} ${prefix}husbu
${gayamenu} ${prefix}sagiri
${gayamenu} ${prefix}shinobu
${gayamenu} ${prefix}megumin
${gayamenu} ${prefix}wallnime

*⌜ Sticker Menu ⌟* 
${gayamenu} ${prefix}ttp <text>
${gayamenu} ${prefix}attp <text> 
${gayamenu} ${prefix}sticker <reply stick>
${gayamenu} ${prefix}stickgif <reply gif>
${gayamenu} ${prefix}toimg <reply stick>

*⌜ Kode Menu ⌟* 
${gayamenu} ${prefix}kodenegara <country>
${gayamenu} ${prefix}kodebahasa <sountry>

*⌜ Vn Menu ⌟* 
${gayamenu} ${prefix}tts <code country> <text>

*⌜ Converter Menu ⌟*
${gayamenu} ${prefix}tourl <reply img/video>
${gayamenu} ${prefix}imagetourl <reply img>
${gayamenu} ${prefix}videotourl <reply vid>
${gayamenu} ${prefix}toimg <reply stick>
${gayamenu} ${prefix}tomp3 <reply vn>
${gayamenu} ${prefix}tovideo <reply stick>
${gayamenu} ${prefix}togif <reply stick>

*⌜ Tools Menu ⌟* 
${gayamenu} ${prefix}ssweb <link>

*⌜ Hiburan Menu ⌟*
${gayamenu} ${prefix}cekwatak
${gayamenu} ${prefix}cekmati <nama>
${gayamenu} ${prefix}wangy <nama>
${gayamenu} ${prefix}citacita
${gayamenu} ${prefix}toxic
${gayamenu} ${prefix}truth
${gayamenu} ${prefix}dare
${gayamenu} ${prefix}apakah
${gayamenu} ${prefix}bisakah
${gayamenu} ${prefix}kapankah
${gayamenu} ${prefix}rate
${gayamenu} ${prefix}jadian
${gayamenu} ${prefix}cantik
${gayamenu} ${prefix}ganteng
${gayamenu} ${prefix}beban
${gayamenu} ${prefix}babi
${gayamenu} ${prefix}cekganteng
${gayamenu} ${prefix}cekcantik

*⌜ Group Menu ⌟*
${gayamenu} ${prefix}afk <alasan>
${gayamenu} ${prefix}groupsetting
${gayamenu} ${prefix}ceksewa
${gayamenu} ${prefix}kickall
${gayamenu} ${prefix}infogrup
${gayamenu} ${prefix}promote
${gayamenu} ${prefix}demote
${gayamenu} ${prefix}listonline
${gayamenu} ${prefix}tagall <text>
${gayamenu} ${prefix}leave
${gayamenu} ${prefix}kick <reply>
${gayamenu} ${prefix}add <+62xxxxxx>
${gayamenu} ${prefix}setnamegc
${gayamenu} ${prefix}setppgc
${gayamenu} ${prefix}setdeskgc
${gayamenu} ${prefix}sider <reply chat bot>
${gayamenu} ${prefix}hidetag <text/reply text>
${gayamenu} ${prefix}linkgc

*⌜ Owner Menu ⌟* 
${gayamenu} ${prefix}broadcast <text>            
${gayamenu} ${prefix}public 
${gayamenu} ${prefix}self
${gayamenu} ${prefix}setppbot <reply img>
${gayamenu} ${prefix}banned <user>
${gayamenu} ${prefix}unbanned <user>
${gayamenu} ${prefix}delete 
${gayamenu} ${prefix}clearall 
${gayamenu} ${prefix}exif <pack | author>
${gayamenu} ${prefix}join <url>
${gayamenu} ${prefix}leaveall 
${gayamenu} ${prefix}eval <text>
${gayamenu} ${prefix}start 
${gayamenu} ${prefix}restart`
img = fs.readFileSync(`./media/picture/${randompoto}.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `donasi`, buttonText: { displayText: 'Donasi' }, type: 1 },{ buttonId: `owner`, buttonText: { displayText: 'Owner' }, type: 1 },{ buttonId: `store`, buttonText: { displayText: 'Store' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: fhidetag})

break
case 'memberuser':
case 'pricelist':
if (isBanned) return freply(mess.banned)
 listMsg = {
 buttonText: 'PILIH MENU',
 footerText: '2022 © Copyright MB Store',
 description: `*PILIH MENU DI BAWAH INI* @${sender.split('@')[0]}`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "RULES MB STORE ⚠️",
                        "description" :"Rules Group MB Store",
                       "rowId": `${prefix}rules`
                           },
                           {                         
                              "title": "PAYMENT 💳",
                              "description" :"Metode Pembayaran",
                              "rowId": `${prefix}payment`
                           },
                           {                         
                              "title": "JOIN VIP ♾️",
                              "description" :"Join Reseller/VIP Member MB Store",
                              "rowId": `${prefix}joinvip`
                           },
                           {                         
                              "title": "LAYANAN PREMIUM 🎥",
                              "description" :"Layanan Siaran Premium",
                              "rowId": `${prefix}l-premium`
                          },
                                                                               {                         
                              "title": "E-MONEY 💳",
                              "description" :"Top Up Saldo E-Money",
                              "rowId": `${prefix}topupsaldo`
                           },
                           {                         
                              "title": "PO TRANSFORMERS 📅",
                              "description" :"Pre-order Event Transformers",
                              "rowId": `${prefix}promo`
                           },
                                                      {                         
                              "title": "PO SKIN 📅",
                              "description" :"Pre-order Gift Skin",
                              "rowId": `${prefix}poskin`
                           },
                                                      {                         
                              "title": "PO STARLIGHT 📅",
                              "description" :"Pre-order Starlight Juni",
                              "rowId": `${prefix}postar`
                           },
                           {
                        "title": "MOBILE LEGENDS A 💎",
                        "description" :"Mobile Legends Fast Paket A",
                       "rowId": `${prefix}mla`
                           },
                           {
                        "title": "MOBILE LEGENDS B 💎",
                        "description" :"Mobile Legends Fast Paket B",
                       "rowId": `${prefix}mlb`
                           },
                           {                         
                              "title": "MOBILE LEGENDS C 💎",
                              "description" :"Mobile Legends Semi Paket C",
                              "rowId": `${prefix}mlc`
                           },
                           {
                        "title": "MOBILE LEGENDS SLOW ⏳",
                        "description" :"Mobile Legends Paket Slow",
                       "rowId": `${prefix}mlslow`
                           },
                           {
                        "title": "MOBILE LEGENDS VILOG 📝",
                        "description" :"Mobile Legends Via Login Moonton",
                       "rowId": `${prefix}vlog`
                           },
                                                    {                         
                              "title": "CRYSTAL OF AURORA 🌟",
                              "description" :"Langganan Crystal Of Aurora Mobile Legends",
                              "rowId": `${prefix}coa`
                          },
                                                   {                         
                              "title": "MOBILE LEGENDS GIFT 🎁",
                              "description" :"Gift Skin, Item, & Charisma Mobile Legends",
                              "rowId": `${prefix}gift`
                          },
                           {                         
                              "title": "ROOMTOUR MOBILE LEGENDS 📌",
                              "description" :"Sewa Roomtour Mobile Legends",
                              "rowId": `${prefix}roomtour`
                          },
                          {                         
                              "title": "SQUAD VERIF MOBILE LEGENDS ✅",
                              "description" :"Sewa Squad Verif Mobile Legends",
                              "rowId": `${prefix}sqverif`
                          },
                                                    {                         
                              "title": "APEX LEGENDS MOBILE 🪙",
                              "description" :"Paket Apex Legends",
                              "rowId": `${prefix}apex`
                          },
                          
                                                    {                         
                              "title": "ARENA OF VALOR 🎟️",
                              "description" :"Paket Arena Of Valor",
                              "rowId": `${prefix}aov`
                          },
                                                    {                         
                              "title": "CALL OF DUTY MOBILE 🪙",
                              "description" :"Paket Call of Duty Mobile",
                              "rowId": `${prefix}cod`
                          },
                          {                         
                              "title": "FREE FIRE 💎",
                              "description" :"Paket Free Fire",
                              "rowId": `${prefix}dmff`
                          },
                                                    {                         
                              "title": "GENSHIN IMPACT 💎",
                              "description" :"Paket Genshin Impact",
                              "rowId": `${prefix}genshin`
                          },
                                                    {                         
                              "title": "POINT BLANK 🪙",
                              "description" :"Paket Point Blank",
                              "rowId": `${prefix}pointblank`
                          },
                          {                         
                              "title": "PUBG A 💸",
                              "description" :"PUBG Mobile Fast Paket A",
                              "rowId": `${prefix}pubga`
                          },
                          {                         
                              "title": "PUBG B 💸",
                              "description" :"PUBG Mobile Semi Paket B",
                              "rowId": `${prefix}pubgb`
                          },
                          {                         
                              "title": "RAGNAROK X 💎",
                              "description" :"Paket Ragnarok X Next Generation",
                              "rowId": `${prefix}ragnarokx`
                          },
                          {                         
                              "title": "RAGNAROK M 🪙",
                              "description" :"Paket Ragnarok M Eternal Love",
                              "rowId": `${prefix}ragnarokm`
                          },
                          {                         
                              "title": "SAUSAGE MAN 🍬",
                              "description" :"Paket Sausage Man",
                              "rowId": `${prefix}sausage`
                          },
                          {                         
                              "title": "VALORANT A 🪙",
                              "description" :"Paket Valorant A",
                              "rowId": `${prefix}valorantb`
                          },
                          {                         
                              "title": "VALORANT B 🪙",
                              "description" :"Paket Valorant B",
                              "rowId": `${prefix}valoranta`
                          },                          
                          {                         
                              "title": "ZEPETO 🪙",
                              "description" :"Paket Zepeto",
                              "rowId": `${prefix}zepeto`
                          },                                         
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
break
case 'vipmember':
case 'pricelistvip':
if (isBanned) return freply(mess.banned)
if (!isPremium) return freply(mess.only.premium)
 listMsg = {
 buttonText: 'PILIH MENU',
 footerText: '2022 © Copyright MB Store',
  description: `*PILIH MENU DI BAWAH INI* @${sender.split('@')[0]}`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                                                      {
                        "title": "RULES MB STORE ⚠️",
                        "description" :"Rules Group MB Store",
                       "rowId": `${prefix}rulesm`
                           },
                           {                         
                              "title": "PAYMENT 💳",
                              "description" :"Metode Pembayaran",
                              "rowId": `${prefix}paymentm`
                           },
                                                     {                         
                              "title": "LAYANAN PREMIUM 🎥",
                              "description" :"Layanan Siaran Premium",
                              "rowId": `${prefix}l-premiumm`
                          },
                                                     {                         
                              "title": "E-MONEY 💳",
                              "description" :"Top Up Saldo E-Money",
                              "rowId": `${prefix}topupsaldo`
                           },
                           {                         
                              "title": "PO TRANSFORMERS 📅",
                              "description" :"Pre-order Event Transformers",
                              "rowId": `${prefix}promom`
                           },
                                                                                 {                         
                              "title": "PO SKIN 📅",
                              "description" :"Pre-order Gift Skin",
                              "rowId": `${prefix}poskinm`
                           },
                                                      {                         
                              "title": "PO STARLIGHT 📅",
                              "description" :"Pre-order Starlight Juni",
                              "rowId": `${prefix}postarm`
                           },
                           {
                        "title": "MOBILE LEGENDS A 💎",
                        "description" :"Mobile Legends Fast Paket A",
                       "rowId": `${prefix}mlam`
                           },
                           {
                        "title": "MOBILE LEGENDS B 💎",
                        "description" :"Mobile Legends Fast Paket B",
                       "rowId": `${prefix}mlbm`
                           },
                           {                         
                              "title": "MOBILE LEGENDS C 💎",
                              "description" :"Mobile Legends Semi Paket C",
                              "rowId": `${prefix}mlcm`
                           },
                           {
                        "title": "MOBILE LEGENDS SLOW ⏳",
                        "description" :"Mobile Legends Paket Slow",
                       "rowId": `${prefix}mlslowm`
                           },
                           {
                        "title": "MOBILE LEGENDS VLOG 📝",
                        "description" :"Mobile Legends Via Login Moonton",
                       "rowId": `${prefix}vlogm`
                           },
                           {                         
                              "title": "CRYSTAL OF AURORA 🌟",
                              "description" :"Langganan Crystal Of Aurora Mobile Legends",
                              "rowId": `${prefix}coam`
                          },
                          {                         
                              "title": "MOBILE LEGENDS GIFT 🎁",
                              "description" :"Gift Skin, Item, & Charisma Mobile Legends",
                              "rowId": `${prefix}giftm`
                          },
                           {                         
                              "title": "ROOMTOUR MOBILE LEGENDS 📌",
                              "description" :"Sewa Roomtour Mobile Legends",
                              "rowId": `${prefix}roomtourm`
                          },
                          {                         
                              "title": "SQUAD VERIF MOBILE LEGENDS ✅",
                              "description" :"Sewa Squad Verif Mobile Legends",
                              "rowId": `${prefix}sqverifm`
                          },
                          {                         
                              "title": "APEX LEGENDS MOBILE 🪙",
                              "description" :"Paket Apex Legends",
                              "rowId": `${prefix}apexm`
                          },
                          {                         
                              "title": "ARENA OF VALOR 🎟️",
                              "description" :"Paket Arena Of Valor",
                              "rowId": `${prefix}aovm`
                          },
                           {                         
                              "title": "FREE FIRE 💎",
                              "description" :"Paket Free Fire",
                              "rowId": `${prefix}dmffm`
                          },
                          {                         
                              "title": "GENSHIN IMPACT 💎",
                              "description" :"Paket Genshin Impact",
                              "rowId": `${prefix}genshinm`
                          },
                           {                         
                              "title": "POINT BLANK 🪙",
                              "description" :"Paket Point Blank",
                              "rowId": `${prefix}pointblankm`
                          },
                          {                         
                              "title": "PUBG A 💸",
                              "description" :"PUBG Mobile Fast Paket A",
                              "rowId": `${prefix}pubgam`
                          },
                          {                         
                              "title": "PUBG B 💸",
                              "description" :"PUBG Mobile Semi Paket B",
                              "rowId": `${prefix}pubgbm`
                          },
                          {                         
                              "title": "RAGNAROK X 💎",
                              "description" :"Paket Ragnarok X Next Generation",
                              "rowId": `${prefix}ragnarokxm`
                          },
                          {                         
                              "title": "RAGNAROK M 🪙",
                              "description" :"Paket Ragnarok M Eternal Love",
                              "rowId": `${prefix}ragnarokmm`
                          },
                          {                         
                              "title": "SAUSAGE MAN 🍬",
                              "description" :"Paket Sausage Man",
                              "rowId": `${prefix}sausagem`
                          },
                          {                         
                              "title": "VALORANT A 🪙",
                              "description" :"Paket Valorant A",
                              "rowId": `${prefix}valorantam`
                          },
                          {                         
                              "title": "VALORANT B 🪙",
                              "description" :"Paket Valorant B",
                              "rowId": `${prefix}valorantbm`
                          },                          
                          {                         
                              "title": "ZEPETO 🪙",
                              "description" :"Paket Zepeto",
                              "rowId": `${prefix}zepetom`
                          },                                         
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
break
case 'topups':
case 'topupsaldo':
if (isBanned) return freply(mess.banned)
 listMsg = {
 buttonText: 'PILIH MENU',
 footerText: '2022 © Copyright MB Store',
 description: `*PILIH MENU DI BAWAH INI* @${sender.split('@')[0]}`,
 sections: [
                     {
                      "title": `${timeWib} ${timeWita} - ${timeWib}`,
 rows: [
                           {
                        "title": "GOPAY 💵",
                       "description" :"List Menu Top Up Gopay",
                       "rowId": `${prefix}topupgopay`
                           },
                           {                         
                              "title": "DANA 💵",
                              "description" :"List Menu Top Up Dana",
                              "rowId": `${prefix}topupdana`
                          },
                          {
                        "title": "OVO 💵",
                       "description" :"List Menu Top Up Ovo",
                       "rowId": `${prefix}topupovo`
                           },
                           {                         
                              "title": "SHOPEEPAY 💵",
                              "description" : "List Menu Top Up Shopeepay",
                              "rowId": `${prefix}shoppe`
                           },
                           {                         
                              "title": "GRAB 💵",
                              "description" : "List Menu Top Up Grab",
                              "rowId": `${prefix}grab`
                           },
                                                       {                         
                              "title": "MANDIRI E-TOLL 💵",
                              "description" : "List Menu Top Up Mandiri E-Toll",
                              "rowId": `${prefix}mandiri`
                           },
                                                      {                         
                              "title": "BRI BRIZZI 💵",
                              "description" : "List Menu Top Up BRI Brizzi",
                              "rowId": `${prefix}bribrizzi`
                           },
                                                      {                         
                              "title": "TIX ID 💵",
                              "description" : "List Menu Top Up TIX ID",
                              "rowId": `${prefix}tixid`
                           }, 
                                                       {                         
                              "title": "TAP CASH BNI 💵",
                              "description" : "List Menu Top Up Tap Cash BNI",
                              "rowId": `${prefix}bni`                              
                           }, 
                                                      {                         
                              "title": "DOKU 💵",
                              "description" : "List Menu Top Up Doku",
                              "rowId": `${prefix}doku`
                           },   
                                                     {                         
                              "title": "MAXIM DRIVER 💵",
                              "description" : "List Menu Top Up Maxim Driver",
                              "rowId": `${prefix}maxim`                           
                           }, 
                                                      {                         
                              "title": "LINK AJA 💵",
                              "description" : "List Menu Top Up Link Aja",
                              "rowId": `${prefix}linkaja`
                           },                                                                                                                                              
                        ]
                     }],
 listType: 1
}
Ramdani.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:troli})
break
case 'pecahanml':
if (isBanned) return freply(mess.banned)
teks = `━━━━━━━━━━━━━━━━━━
*PECAHAN DIAMOND ML* ✅
━━━━━━━━━━━━━━━━━━
⚪️ *MOBILE LEGENDS A*
\`\`\`➤ 86   💎  =  78 + Bonus 8
➤ 172  💎  =  156 + Bonus 16
➤ 257  💎  =  234 + Bonus 23
➤ 344  💎  =  312 + Bonus 32
➤ 429  💎  =  390 + Bonus 39
➤ 514  💎  =  468 + Bonus 46
➤ 600  💎  =  546 + Bonus 54
➤ 706  💎  =  625 + Bonus 81
➤ 792  💎  =  703 + Bonus 89
➤ 878  💎  =  781 + Bonus 97
➤ 963  💎  =  859 + Bonus 104
➤ 1050 💎  =  937 + Bonus 113
➤ 1412 💎  =  1250 + Bonus 162
➤ 2195 💎  =  1860 + Bonus 335
➤ 3688 💎  =  3099 + Bonus 589
➤ 4032 💎  =  3411 + Bonus 591
➤ 5532 💎  =  4649 + Bonus 883
➤ 6238 💎  =  5274 + Bonus 964
➤ 9288 💎  =  7740 + Bonus 1548\`\`\`
━━━━━━━━━━━━━━━━━━
⚪️ *MOBILE LEGENDS B*
\`\`\`➤ 3     💎  =  3 + Bonus 0
➤ 5     💎  =  5 + Bonus 0
➤ 14    💎  =  13 + Bonus 1
➤ 28    💎  =  26 + Bonus 2
➤ 42    💎  =  38 + Bonus 4
➤ 56    💎  =  51 + Bonus 5
➤ 70    💎  =  64 + Bonus 6
➤ 114   💎  =  104 + Bonus 10
➤ 140   💎  =  127 + Bonus 13
➤ 285   💎  =  260 + Bonus 25
➤ 372   💎  =  338 + Bonus 34
➤ 457   💎  =  416 + Bonus 41
➤ 556   💎  =  506 + Bonus 50
➤ 570   💎  =  519 + Bonus 51
➤ 720   💎  =  638 + Bonus 82
➤ 977   💎  =  872 + Bonus 105
➤ 1163  💎  =  1041 + Bonus 122
➤ 1454  💎  =  1288 + Bonus 166
➤ 2012  💎  =  1796 + Bonus 216
➤ 5883  💎  =  4959 + Bonus 924
➤ 7376  💎  =  6198 + Bonus 1178
➤ 8339  💎  =  7057 + Bonus 1282
➤ 9302  💎  =  7822 + Bonus 1480
➤ 10000 💎  =  8448 + Bonus 1552
➤ 12456 💎  =  10546 + Bonus 1910
➤ 17290 💎  =  14568 + Bonus 2722\`\`\`
━━━━━━━━━━━━━━━━━━
⚪️ *MOBILE LEGENDS C*
\`\`\`➤ 42    💎  =  38 + Bonus 4
➤ 70    💎  =  64 + Bonus 6
➤ 140   💎  =  127 + Bonus 13
➤ 284   💎  =  254 + Bonus 30
➤ 355   💎  =  317 + Bonus 38
➤ 429   💎  =  383 + Bonus 46
➤ 569   💎  =  510 + Bonus 59
➤ 716   💎  =  633 + Bonus 83
➤ 1446  💎  =  1252 + Bonus 194
➤ 2976  💎  =  2501 + Bonus 475
➤ 7502  💎  =  6252 + Bonus 1250\`\`\`
━━━━━━━━━━━━━━━━━━
⛔️ *BONUS TIDAK TERHITUNG PADA MISI EVENT*`
img = fs.readFileSync(`./media/picture/thumb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'VIP MEMBER' }, type: 1 },{ buttonId: `memberuser`, buttonText: { displayText: 'MEMBER' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'rules':
teks =`┏━━━━━━━━━━━━━━⬣
┃「 ⛔️ *RULES MB STORE* ⛔️ 」
⬣ ━━━━━━━━━━━━━━⬣
┃⚠️ *PENTING!!!*
┃⚠️ *JANGAN MALAS BACA!!!*
┏━━━━━━━━━━━━━━⬣
┃▫️ *_RULES GIFT SKIN_*
┃
┃1. Dilarang ganti akun setelah masuk ┃antrian
┃2. Dilarang ganti nickname setelah ┃masuk antrian
┃3. Dilarang ganti skin setelah masuk ┃antrian
┃4. Dilarang unfriend setelah masuk list ┃antrian
┃5. Tidak bisa refund
┃
┃MELANGGAR? AUTO HANGUS ❌
┃
┃_Sistem :_
┃- Kirim format -> Tf lunas -> Add ID ┃yang diberi admin -> Tunggu 7 hari 
┃- Proses 7 hari + Antrian
┗━━━━━━━━━━━━━━⬣
┃▫️ *_RULES DM SLOW_*
┃
┃1. Dilarang untuk menyebarkan ┃screenshot diamond masuk di ┃Inbox, testi buyer dll, jika ketahuan ┃akan di kick dan di blacklist, serta ┃akan mendapatkan resiko lainnya.
┃
┃2. Per akun maximal 2695 DM per ID ┃dalam satu minggu, lebih dari itu ┃masuk antrian minggu depannya lagi.
┃
┃3. Dilarang untuk para reseller ┃menyantumkan tanggal kapan turun ┃diamondnya bilang saja estimasi 7-14 ┃hari maximal 21 hari (jika ada kendala/┃trouble)
┃
┃4. Jika Diamond belum masuk, ┃konfirmasi komplain hari senin mulai ┃dari jam 18:00 sampai jam 23:59 WIB.
┃
┃5. Transaksi via ID Diamonds Legal ┃from Montoon (jangan melanggar ┃rules jika tidak mau beresiko)
┃
┃6. Kesalahan ID dan Server ┃ditanggung pembeli
┃
┃7. Jika ingin laporan Diamond tidak ┃masuk, berikan bukti video dan foto ┃pada hari yang sama, batas waktu ┃memberikan video dan foto sampai ┃hari selasa, jika dihari lain komplain ┃akan di tolak.
┃
┃8. Patuhi rules jika tidak ingin ┃adanya resiko dari kami!
┃
┃9. Pesanan yang telah masuk list ┃tidak dapat di Cancel/Refund (kecuali ┃dari pihak kami)
┃
┃_Catatan:_
┃- Diamond biasanya di kirim setiap ┃hari senin, jadi kamu bisa cek secara ┃berkala setiap hari senin di waktu ┃7-14 hari dan maximal 21 hari jika ┃ada kendala/trouble dari pusat.
┃- Yang bilang lama atau lambat tidak ┃usah order! Bagi yang paham saja ┃(Rata-rata di pasaran ML Slow 14-21 ┃Hari! Rate 160 - 170) Cara hitung ┃Rate : Diamond x Rate = Harga (ex : ┃1225dm x 158 = 193.550)
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *🗒NOTE * 」━━━━━━⬣
┃*JIKA ADA KEJADIAN ORDERAN*
┃*HANGUS ATAS KESALAHAN*
┃*BUYER YANG TIDAK MEMBACA/┃MELANGGAR RULES, MAKA ITU*
┃*BUKAN TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'payment':
teks = `━━━━━━━━━━━━━━━━━━
*PAYMENT* ✅
━━━━━━━━━━━━━━━━━━
*E-WALLET* ☑️
💳 *DANA*
➤ Melvie        =  \`\`\`081212303462\`\`\`
➤ Bintang      =  \`\`\`081212303461\`\`\`
💳 *GOPAY*
➤ Melvie        =  \`\`\`081212303462\`\`\`
💳 *OVO*
➤ Melvie        =  \`\`\`081212303462\`\`\`
➤ Bintang      =  \`\`\`081212303461\`\`\`
💳 *SHOPEEPAY*
➤ Lesti           =  \`\`\`081212303462\`\`\`
━━━━━━━━━━━━━━━━━━
*ATM* ☑️
🏦 BCA
➤ Melvie        =  \`\`\`6520680916\`\`\`
➤ Bintang      =  \`\`\`8692231651\`\`\`
━━━━━━━━━━━━━━━━━━
*NO VIRTUAL DANA* ☑️
\`\`\`🏦 BCA     = 3901081212303462
🏦 BRI     = 88810081212303462
🏦 BNI     = 8810081212303462
🏦 MANDIRI = 895008081212303462
🏦 BTPN    = 8000009081212303462
🏦 PERMATA = 8528081212303462
🏦 BNC     = 8528081212303462\`\`\`
━━━━━━━━━━━━━━━━━━
⛔️ *JANGAN SAMPAI SALAH INPUT!!! JIKA TERJADI KESALAHAN TRANSAKSI SELAIN NO TUJUAN DIATAS, MAKA 100% BUKAN TANGGUNG JAWAB ADMIN (HANGUS).*`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})

break
case 'joinvip':
teks = `┏━━━━━━━━━━━━━━⬣
┃       「 ⛔️ *JOIN VIP* ⛔️ 」
⬣ ━━━━━━━━━━━━━━⬣
┃▫️1 Bulan = Rp15.000
┃▫️1 Tahun = Rp50.000
┃▫️Permanent = Rp150.000
┗━━━━━━━━━━━━━━━━⬣
┃        ⚠️ *KEUNTUNGAN* ⚠️
⬣ ━━━━━━━━━━━━━━⬣
┃• Harga Lebih Murah Dibanding
┃MEMBER
┃ • Banyak Promo khusus VIP
┃ • Bayar Sekali Untungnya Seumur
┃Hidup!
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/thumb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Join' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})

break
case 'mla':
teks = `━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS A* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 86   💎  =  Rp19.825
➤ 172  💎  =  Rp39.650
➤ 257  💎  =  Rp59.475
➤ 344  💎  =  Rp79.300
➤ 429  💎  =  Rp99.125
➤ 514  💎  =  Rp118.950
➤ 600  💎  =  Rp138.775
➤ 706  💎  =  Rp158.600
➤ 792  💎  =  Rp178.425
➤ 878  💎  =  Rp198.250
➤ 963  💎  =  Rp218.075
➤ 1050 💎  =  Rp237.900
➤ 1412 💎  =  Rp317.200
➤ 2195 💎  =  Rp475.800
➤ 3688 💎  =  Rp793.000
➤ 4032 💎  =  Rp872.300
➤ 5532 💎  =  Rp1.189.500
➤ 6238 💎  =  Rp1.348.100
➤ 9288 💎  =  Rp1.982.500

➤ ⭐️ SL/TW FAST = Rp130.845
➤ ⭐️ SL SLOW = Rp115.000
➤ ⭐️ SL PLUS = Rp297.375\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Server :
Order dm :
Paket : ML A
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID & SERVER 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})

break
case 'mlb':
teks = `━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS B* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━
\`\`\`➤ 3     💎  =  Rp1.267
➤ 5     💎  =  Rp1.445
➤ 14    💎  =  Rp3.602
➤ 28    💎  =  Rp7.204
➤ 42    💎  =  Rp10.806
➤ 56    💎  =  Rp14.408
➤ 70    💎  =  Rp18.010
➤ 114   💎  =  Rp28.816
➤ 140   💎  =  Rp36.020
➤ 285   💎  =  Rp68.693
➤ 372   💎  =  Rp89.223
➤ 457   💎  =  Rp109.752
➤ 556   💎  =  Rp133.835
➤ 570   💎  =  Rp137.387
➤ 720   💎  =  Rp167.790
➤ 977   💎  =  Rp229.379
➤ 1163  💎  =  Rp273.990
➤ 1454  💎  =  Rp339.131
➤ 2012  💎  =  Rp472.966
➤ 4394  💎  =  Rp987.028
➤ 5883  💎  =  Rp1.316.304
➤ 6589  💎  =  Rp1.480.542
➤ 7376  💎  =  Rp1.645.580
➤ 8339  💎  =  Rp1.871.407
➤ 9302  💎  =  Rp2.097.234
➤ 10000 💎  =  Rp2.240.943
➤ 12456 💎  =  Rp2.796.046
➤ 17290 💎  =  Rp3.865.993

➤ ⭐️ SL+💎/TW FAST = Rp129.500
➤ ⭐️ SL+💎/TW SLOW = Rp115.000
➤ ⭐️ SL PLUS  = Rp289.500\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Server :
Order dm :
Paket : ML B
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID & SERVER 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'mlslow':
teks = `┏━━━━━━━━━━━━━━⬣
┃        「 💎 *LIST DIAMOND* 」
┃「🎮 *MOBILE LEGENDS SLOW* 」
┃       「✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*7-14 HARI MAX 21 HARI*
┃⏱*OPEN JAM 09.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃⚠️ *WARNING* ⚠️
┃SEBELUM ORDER WAJIB BACA ┃RULES TERLEBIH DAHULU DI ┃http://bit.ly/PricelistMBStore
┃TIDAK MEMBACA/MELANGGAR ┃RULES = HANGUS + BLACKLIST ❌
┏━━━━━━━━━━━━━━⬣
┃💰RATE = 160
┃
┃980💎 = Rp156.800
┃1225💎 = Rp196.000
┃1470💎 = Rp235.200
┃1715💎 = Rp274.400
┃1960💎 = Rp313.600
┃2205💎 = Rp352.800
┃2450💎 = Rp392.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Server :
┃Order dm :
┃Paket : ML Slow
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *NOTE * 」━━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'vlog':
teks =`━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS VILOG* ✅
⏳ _1 x 24 JAM MAX 3 HARI_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 1100 🌟   =  Rp75.000
➤ 1100 🌟 + 112 💎 = Rp100.500
➤ 6000  💎  =  Rp1.070.000
➤ 12000 💎  =  Rp2.140.000
➤ 18000 💎  =  Rp3.210.000
➤ 24000 💎  =  Rp4.280.000\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Email :
Password :
Paket : ML Vilog
_Pastikan matikan verif_
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA PESANAN MASIH DALAM PROSES DAN AKUN DITABRAK MAKA REFUND 50%. KESALAHAN BUYER BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'coa':
teks =`━━━━━━━━━━━━━━━━━━
*CRYSTAL OF AURORA* ✅
⏳ _1-3 JAM MAX 24 JAM_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 1100 🌟 = Rp75.000\`\`\`
━━━━━━━━━━━━━━━━━━
_*KETENTUAN CRYSTAL OF AURORA :*_
1. Mendapatkan total 1100 Coa
2. Proses 1 jam max 3 jam
3. Dalam antrian 1-3 hari
4. Ketika akan di proses, admin akan infokan (Supaya tidak ditabrak)
5. Ketika status proses, jangan log-in terlebih dahulu (supaya tidak ditabrak)
6. Dibutuhkan 3-5 x classic menggunakan hero non wr
7. Cantumkan hero yang tidak boleh/boleh dipakai (Jika ada)
8. Via log-in (Log-in diutamakan via MOONTON
━━━━━━━━━━━━━━━━━━
_*JIKA AKUN DALAM PROSES DITABRAK :*_
1. Proses dilanjut +13.000
2. Proses tidak dilanjut refund 60%
━━━━━━━━━━━━━━━━━━
_*KEGUNAAN CRYSTAL OF AURORA :*_
1. Gatcha Zodiac Summon
2. Gatcha Magic Whell
3. Gatcha Collector
4. Gatcha Aurora Summon
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Email :
Password :
Order : COA
_Pastikan matikan verif_
━━━━━━━━━━━━━━━━━━
⛔️ *KESALAHAN BUYER BUKAN TANGGUNG JAWAB ADMIN. PATUHI RULES JIKA TIDAK INGIN ADANYA RESIKO DARI KAMI!!*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'gift':
teks = `┏━━━━━━━━━━━━━━⬣
┃「 💎*LIST GIFT SKIN & ITEM* 」
┃    「🎮 *MOBILE LEGENDS* 」
┃   「✅ *VIA ID & NICKNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*DELAY 7 HARI PERTEMANAN*
┃⛔️ *DIKIRIM SESUAI ANTRIAN*
┃⏱*OPEN JAM 09.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃⚠️ *WARNING* ⚠️
┃SEBELUM ORDER WAJIB BACA ┃RULES TERLEBIH DAHULU DI ┃http://bit.ly/PricelistMBStore
┃TIDAK MEMBACA/MELANGGAR ┃RULES = HANGUS ❌
┏━━━━━━━━━━━━━━⬣
┃💰RATE = 145
┃
┃_*GIFT SKIN*_
┃NORMAL 269💎 = Rp39.005
┃NORMAL 299💎 = Rp43.355
┃ELITE 399💎 = Rp57.855
┃ELITE 599💎 = Rp86.855
┃SPECIAL 749💎 = Rp108.605
┃EPIC 899💎 = Rp130.355
┃LIGHTBORN 1089💎 = Rp157.905
┃
┃_*SKIN SEBELUM RILIS (DISKON 30%)*_
┃NORMAL 188💎 = Rp27.260
┃ELITE 419💎 = Rp60.755
┃SPECIAL 524💎 = Rp75.980
┃EPIC 629💎 = Rp91.205
┃
┃_*GIFT ITEM*_
┃EMOTE 79💎 = Rp11.445
┃EMOTE 109💎 = Rp15.805
┃PARADISE ISLAND 499💎 = ┃Rp72.355
┃FLAG CARD 1000💎 = Rp145.000
┃CHANGE NAME 239💎 = Rp34.655
┃SQ CN 299💎 = Rp43.355
┃SL CARD 550💎 = Rp79.750
┃
┃*_GIFT CHARISMA_*
┃COKLAT LAYLA 8💎 = Rp1.160
┃ANGELA DOLL 20💎 = Rp2.900
┃ANGEL ARK 499💎 = Rp72.355
┃BLESSING LANTERN 999💎 = ┃Rp144.855
┃
┃_*CREATE SQ*_
┃CREATE SQUAD 199💎 = Rp28.855
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Server :
┃Order dm :
┃Paket : ML Slow
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *NOTE * 」━━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'sqverif':
teks = `┏━━━━━━━━━━━━━━⬣
┃ 「⚙️ *LIST SEWA SQ VERIF* 」
┃   「🎮 *MOBILE LEGENDS* 」
┃       「✅ *VIA ID & NICK* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*PROSES 10 - 180 MENIT*
┃⏱*CLOSE 21.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃5 HARI = Rp29.500
┃7 HARI = Rp41.000
┃10 HARI = Rp52.000
┃14 HARI = Rp82.000
┃20 HARI = Rp98.000
┃1 BULAN = Rp124.000
┃2 BULAN = Rp225.000
┃3 BULAN = Rp325.000
┃4 BULAN = Rp433.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Tanggal : 
┃Lama Sewa :
┃Nama Squad :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*KESALAHAN BUYER 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'apex' :
teks = `━━━━━━━━━━━━━━━━━━
*APEX LEGENDS* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 90    🪙  =  Rp14.714
➤ 280   🪙  =  Rp32.503
➤ 500   🪙  =  Rp60.577
➤ 1050  🪙  =  Rp119.124
➤ 2150  🪙  =  Rp239.072
➤ 5650  🪙  =  Rp576.200
➤ 11500 🪙  =  Rp1.154.469
➤ 23500 🪙  =  Rp2.309.762\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Order SG :
Sisa SG :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/thumb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'aov' :
teks = `┏━━━━━━━━━━━━━━⬣
┃      「 🎟 *LIST VOUCHER* 」
┃   「 🎮 *ARENA OF VALOR* 」
┃ 「 ✅ *VIA ID & NICKNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳ *5 - 15 MENIT MAX 60 MENIT*
┃⏱ *OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃40🎟 = Rp9.500
┃90🎟 = Rp18.500
┃230🎟 = Rp46.000
┃470🎟 = Rp91.500
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Order Voucher :
┃Sisa Voucher :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/aov.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'genshin':
teks = `┏━━━━━━━━━━━━━━⬣
┃「 💎 *LIST GENESIS CRYSTAL* 」
┃     「 🎮 *GENSHIN IMPACT* 」
┃     「 ✅ *VIA UID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳ *10 - 20 MENIT MAX 60 MENIT*
┃⏱ *OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃60 💎 = Rp12.600
┃300 + 30 💎 = Rp63.500
┃980 + 110 💎 = Rp187.000
┃1980 + 260 💎 = Rp406.000
┃3280 + 600 💎 = Rp644.000
┃6480 + 1600 💎 = Rp1.239.500
┃
┃BLESSING CARD = Rp68.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃UID :
┃Server :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *UID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/genshin.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'pointblank':
teks = `┏━━━━━━━━━━━━━━⬣
┃          「 🪙 *LIST CASH* 」
┃       「 🎮 *POINT BLANK* 」
┃         「 ✅ *VIA USER ID* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 120 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃1200🪙 = Rp9.750
┃2400🪙 = Rp18.900
┃6000🪙 = Rp47.000
┃12000🪙 = Rp93.500
┃3600🪙 = Rp281.000
┃6000🪙 = Rp470.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Order Voucher :
┃Sisa Voucher :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN USER ID*
┃*100% BUKAN TANGGUNG JAWAB*
┃*ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/pb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'ragnarokx':
teks = `┏━━━━━━━━━━━━━━⬣
┃      「💎 *LIST DIAMOND* 」
┃       「 🎮 *RAGNAROK X* 」
┃    「 *NEXT GENERATION* 」
┃    「 ✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10 - 180 MENIT MAX 24 JAM*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃2580💎 = Rp
┃5150💎 = Rp
┃12900💎 = Rp
┃26780💎 = Rp
┃39780💎 = Rp
┃54100💎 = Rp
┃108190💎 = Rp
┃132600💎 = Rp
┃151460💎 = Rp
┃151460 x 3💎 = Rp
┃151460 x 5💎 = Rp
┃
┃KAFRA’S TRIAL CARD = Rp
┃KAFRA’S VIP CARD = Rp
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Role ID :
┃Server :
┃Order DM :
┃Sisa DM :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *🗒NOTE * 」━━━━⬣
┃  *JIKA ADA KESALAHAN ID &*
┃  *SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ragnarok.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'ragnarokm':
teks = `┏━━━━━━━━━━━━━━⬣
┃ 「🪙 *LIST BIG CAT COINS* 」
┃       「 🎮*RAGNAROK M* 」
┃        「 *ETERNAL LOVE* 」
┃    「 ✅*VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10 - 180 MENIT MAX 24 JAM*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃6🪙 = Rp
┃12🪙 = Rp
┃18🪙 = Rp
┃24🪙 = Rp
┃36🪙 = Rp
┃145🪙 = Rp
┃373🪙 = Rp
┃748🪙 = Rp
┃929🪙 = Rp
┃1532🪙 = Rp
┃3993🪙 = Rp
┃
┃PREMIUM  = Rp
┃ALL PACK🪙  = Rp
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃User ID :
┃Server :
┃Order BCC :
┃Sisa BCC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ragnarok.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'sausage':
teks = `┏━━━━━━━━━━━━━━⬣
┃        「 🍬 *LIST CANDY* 」
┃     「 🎮 *SAUSAGE MAN* 」
┃    「 ✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃60🍬 = Rp13.280
┃180🍬 = Rp40.670
┃316🍬 = Rp65.570
┃718🍬 = Rp131.970
┃1368🍬 = Rp273.070
┃2118🍬 = Rp397.570
┃3548🍬 = Rp663.170
┃7048🍬 = Rp1.327.170
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Server :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/sausage.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'valoranta':
teks = `┏━━━━━━━━━━━━━━⬣
┃             「 🪙 *LIST VP* 」
┃        「 🎮 *VALORANT A* 」
┃      「 ✅ *VIA USERNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃125🪙 = Rp14.775
┃420🪙 = Rp49.050
┃700🪙 = Rp78.500
┃1375🪙 = Rp147.250
┃2400🪙 = Rp245.750
┃4000🪙 = Rp394.000
┃8150🪙 = Rp786.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Username Riot :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/valorant.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'valorantb':
teks = `┏━━━━━━━━━━━━━━⬣
┃             「 🪙*LIST VP* 」
┃        「 🎮*VALORANT B* 」
┃      「 ✅*VIA USERNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃300🪙 = Rp30.834
┃625🪙 = Rp61.668
┃1125🪙 = Rp107.919
┃1650🪙 = Rp154.170
┃1950🪙 = Rp185.004
┃3400🪙 = Rp308.340
┃7000🪙 = Rp616.680
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Username Riot :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/valorant.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'zepeto':
teks = `┏━━━━━━━━━━━━━━⬣
┃  「♦️ *LIST ZEMS & COINS* 」
┃             「 🎮*ZEPETO* 」
┃「 ✅*VIA NICK & USERNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃_*ZEPETO ZEMS*_
┃7♦️ = Rp7.100
┃14♦️ = Rp14.200
┃29♦️ = Rp28.400
┃60♦️ = Rp56.800
┃125♦️ = Rp113.600
┃196♦️ = Rp170.400
┃770♦️ = Rp653.200
┗━━━━━━━━━━━━━━⬣
┃_*ZEPETO COINS*_
┃4680🪙 = Rp14.200
┃10200🪙 = Rp28.400
┃21000🪙 = Rp56.800
┃38900🪙 = Rp103.800
┃62800🪙 = Rp159.720
┃234000🪙 = Rp556.200
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Username :
┃Order : 
┃Paket :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━⬣
┃  *JIKA ADA KESALAHAN NICK*
┃  *& USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/zepeto.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'cod' :
teks = `┏━━━━━━━━━━━━━━⬣
┃              「 🪙*LIST CP* 」
┃「 🎮*CALL OF DUTY MOBILE* 」
┃   「 ✅*VIA ID & NICKNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃26 + 5 🪙 = Rp5.000
┃53 + 9 🪙 = Rp10.000
┃106 + 21 🪙 = Rp19.400
┃264 + 53 🪙 = Rp47.500
┃528 + 106 🪙 = Rp94.000
┃1056 + 317 🪙 = Rp186.500
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Order CP :
┃Sisa CP :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/cod.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'roomtour':
teks = `┏━━━━━━━━━━━━━━━━⬣
┃ 「⚙️ *OPEN SEWA ROOMTOUR* 」
┃       「🎮 *MOBILE LEGENDS* 」
┃          「✅ *VIA NAME & ID* 」
⬣ ━━━━━━━━━━━━━━━━⬣
┃⏳*JADWAL SESUAI REQUEST*
┃⏱*OPEN 24 JAM*
┗━━━━━━━━━━━━━━━━⬣
┃*KETERANGAN :*
┃1. Harus log-in maksimal 5 menit
┃sebelum jadwal yang telah ditentukan.
┃2. Jika telat karena kesalahan buyer,
┃bisa berpotensi mengurangi waktu
┃bermain.
┃3. Hanya ada 1x kesempatan ┃mengganti jadwal (Max konfirmasi
┃H-1 dari jadwal lama.
┃4. 1 jam = Sudah termasuk menunggu
┃di lobby dan draftpick.
┃
┃_*PRICE :*_
┃- Rp55.000/Match
┃- Rp90.000/Jam
┗━━━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nama Match :
┃Nama Team :
┃ID : 
┃Nomor WA :
┃Tanggal :
┃Pukul :
┃Order :
┃Draft Ban 6/10 : 10
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*KESALAHAN BUYER 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case'promo':
teks = `━━━━━━━━━━━━━━━━━━
*OPEN PO EVENT TRANSFORMERS PHASE 1 (28 MEI)*  ✅
━━━━━━━━━━━━━━━━━━
_*MISI EVENT 100💎*_
~➤ 114 💎 = Rp27.659~ _(CLOSE)_
➤ 140💎 = Rp37.527
➤ ~172 💎 = Rp38.800~ _(CLOSE)_
➤ ~257 💎 = Rp58.200~ _(CLOSE)_

_*MISI EVENT 250💎*_
➤ ~284 💎 = Rp65.000~ _(CLOSE)_
➤ 285 💎 = Rp67.231
➤ ~344 💎 = Rp77.600~ _(CLOSE)_
➤ ~355 💎 = Rp79.500~ _(CLOSE)_
➤ ~429 💎 = Rp97.000~ _(CLOSE)_
➤ ~514 💎 = Rp116.400~ _(CLOSE)_
➤ ~568 💎 = Rp130.000~ _(CLOSE)_
➤ 570💎 Rp134.000
➤ ~600 💎 = Rp135.800~ _(CLOSE)_

_*NOMINAL 💎 LAINNYA*_
➤ ~1050 💎 = Rp232.800~ _(CLOSE)_
➤ 1163 💎 = Rp267.099
➤ 2012 💎 = Rp459.323
➤ ~3688 💎 = Rp776.000~ _(CLOSE)_
➤ 5883 💎 = Rp1.275.291
━━━━━━━━━━━━━━━━━━
⛔️ *NOTE*
_- Bonus Tidak Terhitung event_
_- Proses jam 15.00 WIB Tanggal 28 Mei Saat Event Release Max Malam_
_- PO Harap Sabar Saat Proses Pengerjaan_`
img = fs.readFileSync(`./media/picture/promo.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'poskin':
teks = `━━━━━━━━━━━━━━━━━━
*OPEN PO GIFT SKIN* ✅

▫️ *KARINA ZODIAC*
Rp121.000 (899💎)
RILIS 22 MEI

▫️ *HAYABUSA SUMMER*
Rp70.000 (524💎)
RILIS 21 JUNI

▫️ *KAGURA SUMMER*
Rp70.000 (524💎)
RILIS 21 JUNI

▫️ *ESTES M3*
Rp84.500 (629💎)
RILIS 30 JUNI

◽️ *MOSKOV ABYSS*
Rp900.000
RILIS JUNI
━━━━━━━━━━━━━━━━━━
▫️ *LANCELOT HERO (INSTANT)*
Rp1.450.000
_Proses 1 Hari_`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'postar':
teks = `━━━━━━━━━━━━━━━━━━
*OPEN PO STARLIGHT JUNI* ✅
━━━━━━━━━━━━━━━━━━
*VID ID+SERVER*
Rp95.000

*VIA GIFT*
Rp89.000

_SLOT GA BANYAK_`
img = fs.readFileSync(`./media/picture/starlight.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'dmff':
teks =`━━━━━━━━━━━━━━━━━━
*FREE FIRE* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 5    💎  =  Rp825
➤ 20   💎  =  Rp2.750
➤ 50   💎  =  Rp6.600
➤ 70   💎  =  Rp9.075
➤ 100  💎  =  Rp13.200
➤ 120  💎  =  Rp15.675
➤ 140  💎  =  Rp18.150
➤ 210  💎  =  Rp27.225
➤ 355  💎  =  Rp45.375
➤ 500  💎  =  Rp64.350
➤ 720  💎  =  Rp90.750
➤ 1000 💎  =  Rp127.050
➤ 2000 💎  =  Rp247.500
➤ 4000 💎  =  Rp495.000

➤ 💳 M. Mingguan = Rp27.500
➤ 💳 M. Bulanan = Rp137.500\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Order dm :
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ff.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'mlc':
teks =`━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS C* ✅
⏳ _5-10 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 42   💎  =  Rp10.200
➤ 70   💎  =  Rp17.000
➤ 140  💎  =  Rp34.000
➤ 210  💎  =  Rp51.000
➤ 284  💎  =  Rp68.000
➤ 355  💎  =  Rp85.000
➤ 429  💎  =  Rp102.000
➤ 569  💎  =  Rp136.000
➤ 716  💎  =  Rp170.000
➤ 1446 💎  =  Rp340.000
➤ 2976 💎  =  Rp680.000
➤ 7502 💎  =  Rp1.700.000

➤ ⭐️ SL+💎/TW FAST = Rp129.500
➤ ⭐️ SL+💎/TW SLOW = Rp115.000
➤ ⭐️ SL PLUS = Rp289.500\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Server :
Order dm :
Paket : ML C
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID & SERVER 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'pubga':
teks =`┏━━━━━━━━━━━━━━⬣
┃               「 💵 *LIST UC* 」
┃    「 🎮*PUBG MOBILE FAST* 」
┃    「 🇮🇩*REGION INDONESIA* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 10 MENIT MAX 3 JAM*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃16💵 = Rp2.700
┃26💵 = Rp4.550
┃52💵 = Rp9.000
┃105💵 = Rp18.000
┃131💵 = Rp22.500
┃263💵 = Rp44.000
┃530💵 = Rp87.000
┃825💵 = Rp130.000
┃1100💵 = Rp172.500
┃1925💵 = Rp302.000
┃2200💵 = Rp348.500
┃2463💵 = Rp389.500
┃2730💵 = Rp433.000
┃3025💵 = Rp477.500
┃3300💵 = Rp513.000
┃3563💵 = Rp566.500
┃3830💵 = Rp610.500
┃4125💵 = Rp653.000
┃4400💵 = Rp697.000
┃4663💵 = Rp790.000
┃4930💵 = Rp784.000
┃5500💵 = Rp870.000
┃6600💵 = Rp1.038.000
┃7700💵 = Rp1.208.000
┃8800💵 = Rp1.381.000
┃9900💵 = Rp1.556.000
┃10005💵 = Rp1.567.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Order UC :
┃Region :
┃Paket : PUBG A
┃Sisa UC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/pubg.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})

break
case 'pubgb':
teks =`┏━━━━━━━━━━━━━━⬣
┃               「 💵 *LIST UC* 」
┃「 🎮*PUBG MOBILE SEMIFAST* 」
┃     「 🇮🇩*REGION INDONESIA* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10-180 MENIT MAX 24 JAM*
┃⏱*OPEN JAM 10.00 - 19.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃263💵 = Rp46.500
┃525💵 = Rp90.000
┃788💵 = Rp134.500
┃1050💵 = Rp179.500
┃1375💵 = Rp224.000
┃1638💵 = Rp269.000
┃1900💵 = Rp313.500
┃2163💵 = Rp358.500
┃2425💵 = Rp403.500
┃2875💵 = Rp448.000
┃3138💵 = Rp493.000
┃3400💵 = Rp537.500
┃3925💵 = Rp627.500
┃4250💵 = Rp672.000
┃6000💵 = Rp896.900
┃9375💵 = Rp1.344.000
┃46875💵 = Rp6.720.000
┃93750💵 = Rp13.340.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Order UC :
┃Region :
┃Paket : PUBG B
┃Sisa UC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/pubg.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'l-premium':
teks = `*---------------------------------------*
   🎥 *LAYANAN SIARAN PREMIUM* 🎥
                   🎥 *MB STORE* 🎥
*---------------------------------------*

🎬 _*NETFLIX PREMIUM*_ 🎬 *---------------------------------------*
▫️ *NETFLIX PREMIUM SHARED*
[ 3 HARI - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 7.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 7 HARI - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 10.500]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 21.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - MOBILE - VPN ]
=> [Rp 24.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - 1 USER ]
=> [Rp 30.000]
▫️ *NETFLIX PREMIUM PRIVATE*
[ 1 BULAN - 5 PROFILE ]
=> [Rp 125.000]

*---------------------------------------*
🎬 _*IQIYI PREMIUM*_ 🎬
*---------------------------------------*
▫️ *IQIYI PREMIUM SHARED*
[ 1 BULAN ]
=> [Rp 20.000]
▫️ *IQIYI PREMIUM PRIVATE*
[ 1 BULAN - 2 DEVICE ]
=> [Rp 24.000]

*---------------------------------------*
🎬 _*WE-TV PREMIUM *_🎬 *---------------------------------------*
▫️ *WE-TV PREMIUM SHARED*
[ 1 BULAN ]
=> [Rp 10.000]
▫️ *WE-TV PREMIUM SHARED*
[ 1 TAHUN ]
=> [Rp 33.000]
▫️ *WE-TV PREMIUM PRIVATE*
[ 1 BULAN ]
=> [Rp 35.000]

*---------------------------------------*
🎬 _*DISNEY HOTSTAR PREMIUM *_🎬
*---------------------------------------*
▫️ *DISNEY + HOTSTAR SHARED* 
[ 1 BULAN ]
=> [Rp 17.000]
▫️ *DISNEY - HOTSTAR SHARED*
[ 2 BULAN ]
=> [Rp 31.000]

*---------------------------------------*
🎬 _*YOUTUBE PREMIUM*_ 🎬 *---------------------------------------*
▫️ *YOUTUBE PREMIUM ANGGOTA*
[ 1 BULAN - INVITE ]
=> [Rp 4.500]
▫️ *YOUTUBE PREMIUM FAMILY*
[ 1 BULAN - 5 ANGGOTA ]
=> [Rp 6.500]
▫️ *YOUTUBE PREMIUM INDIVIDU*
 [ 4 BULAN ]
=> [Rp 15.000]

*---------------------------------------*
🎬 _*CANVA PREMIUM*_🎬
*---------------------------------------*
▫️ *CANVA PRO*
[ 1 BULAN ]
=> [Rp 7.000]
▫️ *CANVA PRO*
[ 1 TAHUN - GARANSI 6 BULAN ]
=> [Rp 16.000]
▫️ *CANVA PRO*
[ PERMANENT - GARANSI 1 TAHUN ]
=> [Rp 20.000]

*---------------------------------------*
🎬 _*VIDEO PREMIER PREMIUM*_🎬 
*---------------------------------------*
▫️ *VIDEO PREMIER SHARED*
[ 1 BULAN ]
=> [Rp 19.000]
▫️ *VIDEO PREMIER PRIVATE*
[ 1 BULAN ]
=> [Rp 31.000]

*---------------------------------------*
🎬 _*SPOTIFY PREMIUM*_🎬 
*---------------------------------------*
▫️ *SPOTIFY PREMIUM ANGGOTA*
[ 2 BULAN - INVITE - INDO]
=> [Rp 14.000]
▫️ *SPOTIFY PREMIUM ADMIN*
[ 2 BULAN - INDO ]
=> [Rp 24.000]
 
*---------------------------------------*
🗒 NOTE :
*SEMUA LAYANAN PREMIUM FULL GARANSI*
*---------------------------------------*
📢 WA ADMIN
📞 wa.me/6281212303462
📞 wa.me/6281212303461`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})

break
case 'e-money':
teks =`┏━━━━━━━━━━━━━━⬣
┃        「 💰 LIST HARGA 」
┃   「 💵 SALDO E-MONEY 」
┃         「 ✅ MB STORE 」
⬣ ━━━━━━━━━━━━━━⬣
┃                 BRI BRIZZI
┗━━━━━━━━━━━━━━⬣
┃Brizzi 20.000 = Rp21.875
┃Brizzi 50.000 = Rp51.710
┃Brizzi 100.000 = Rp101.710
┃Brizzi 200.000 = Rp201.600
┗━━━━━━━━━━━━━━⬣
┃                     DANA
┏━━━━━━━━━━━━━━⬣
┃Dana Rp10.000 = Rp11.275
┃Dana Rp15.000 = Rp16.240
┃Dana Rp20.000 = Rp21.280
┃Dana Rp25.000 = Rp26.245
┃Dana Rp30.000 = Rp31.255
┃Dana Rp40.000 = Rp41.295
┃Dana Rp50.000 = Rp51.295
┃Dana Rp60.000 = Rp61.255
┃Dana Rp70.000 = Rp71.375
┃Dana Rp75.000 = Rp76.255
┃Dana Rp80.000 = Rp81.375
┃Dana Rp90.000 = Rp91.375
┃Dana Rp100.000 = Rp101.255
┃Dana Rp150.000 = Rp151.255
┃Dana Rp200.000 = Rp201.255
┃Dana Rp25.000 = Rp251.255
┃Dana Rp300.000 = Rp301.255
┃Dana Rp400.000 = Rp401.255
┃Dana Rp500.000 = Rp501.255
┃Dana Rp800.000 = Rp801.255
┃Dana Rp900.000 = Rp901.535
┃Dana Rp1.000.000 = Rp1.000.2000
┗━━━━━━━━━━━━━━⬣
┃                     DOKU
┏━━━━━━━━━━━━━━⬣
┃Doku 55.000 = Rp56.800
┃Doku 65.000 = Rp66.800
┃Doku 85.000 = Rp86.800
┃Doku 95.000 = Rp96.800
┗━━━━━━━━━━━━━━⬣
┃                    GOPAY
┏━━━━━━━━━━━━━━⬣
┃Gopay 5.000 = Rp6.690
┃Gopay 10.000 = Rp11.850
┃Gopay 15.000 = Rp16.775
┃Gopay 20.000 = Rp21.850
┃Gopay 25.000 = Rp26.775
┃Gopay 30.000 = Rp31.790
┃Gopay 35.000 = Rp36.850
┃Gopay 40.000 = Rp41.790
┃Gopay 45.000 = Rp46.850
┃Gopay 50.000 = Rp51.895
┃Gopay 55.000 = Rp56.895
┃Gopay 60.000 = Rp61.875
┃Gopay 65.000 = Rp66.875
┃Gopay 70.000 = Rp71.875
┃Gopay 75.000 = Rp76.895
┃Gopay 80.000 = Rp81.875
┃Gopay 85.000 = Rp86.875
┃Gopay 90.000 = Rp91.875
┃Gopay 95.000 = Rp96.875
┃Gopay 100.000 = Rp101.790
┃Gopay 150.000 = Rp151.790
┃Gopay 200.000 = Rp201.790
┃Gopay 250.000 = Rp251.790
┃Gopay 500.000 = Rp501.800
┃Gopay 1.000.000 = Rp1.002.150
┗━━━━━━━━━━━━━━⬣
┃            GOPAY DRIVER
┏━━━━━━━━━━━━━━⬣
┃Gopay Driver 10.000 = Rp11.280
┃Gopay Driver 15.000 = Rp16.455
┃Gopay Driver 20.000 = Rp21.285
┃Gopay Driver 25.000 = Rp26.285
┃Gopay Driver 30.000 = Rp31.350
┃Gopay Driver 35.000 = Rp36.350
┃Gopay Driver 40.000 = Rp41.350
┃Gopay Driver 45.000 = Rp46.325
┃Gopay Driver 50.000 = Rp51.300
┃Gopay Driver 55.000 = Rp56.350
┃Gopay Driver 60.000 = Rp61.350
┃Gopay Driver 65.000 = Rp66.350
┃Gopay Driver 70.000 = Rp71.325
┃Gopay Driver 75.000 = Rp76.300
┃Gopay Driver 80.000 = Rp81.350
┃Gopay Driver 85.000 = Rp86.350
┃Gopay Driver 90.000 = Rp91.350
┃Gopay Driver 95.000 = Rp96.350
┃Gopay Driver 100.000 = Rp101.300
┃Gopay Driver 150.000 = Rp151.300
┃Gopay Driver 200.000 = Rp201.300
┃Gopay Driver 250.000 = Rp251.300
┃Gopay Driver 300.000 = Rp301.300
┃Gopay Driver 500.000 = Rp501.300
┗━━━━━━━━━━━━━━⬣
┃                     GRAB
┏━━━━━━━━━━━━━━⬣
┃Grab Customer 20.000 = Rp21.095
┃Grab Customer 25.000 = Rp26.095
┃Grab Customer 40.000 = Rp41.115
┃Grab Customer 50.000 = Rp51.115
┃Grab Driver 50.000 = Rp51.920
┃Grab Customer 75.000 = Rp76.115
┃Grab Driver 100.000 = Rp101.115
┃Grab Customer 100.000 = Rp101.425
┃Grab Driver 150.000 = Rp151.350
┃Grab Customer 150.000 = Rp151.995
┃Grab Driver 200.000 = Rp201.350
┃Grab Customer 200.000 = Rp201.995
┃Grab Driver 250.000 = Rp251.350
┗━━━━━━━━━━━━━━⬣
┃                   LINK AJA
┏━━━━━━━━━━━━━━⬣
┃Link Aja Rp10.000 = Rp11.250
┃Link Aja Rp15.000 = Rp16.375
┃Link Aja Rp20.000 = Rp21.240
┃Link Aja Rp25.000 = Rp26.240
┃Link Aja Rp30.000 = Rp31.290
┃Link Aja Rp40.000 = Rp41.255
┃Link Aja Rp50.000 = Rp51.290
┃Link Aja Rp60.000 = Rp61.290
┃Link Aja Rp70.000 = Rp71.255
┃Link Aja Rp80.000 = Rp80.255
┃Link Aja Rp90.000 = Rp91.290
┃Link Aja Rp100.000 = Rp101.290
┃Link Aja Rp150.000 = Rp151.300
┃Link Aja Rp200.000 = Rp201.290
┃Link Aja Rp250.000 = Rp251.850
┗━━━━━━━━━━━━━━⬣
┃           MANDIRI E-TOLL
┏━━━━━━━━━━━━━━⬣
┃Mandiri E-Toll 10.000 = Rp12.075
┃Mandiri E-Toll 20.000 = Rp21.700
┃Mandiri E-Toll 25.000 = Rp26.700
┃Mandiri E-Toll 30.000 = Rp32.175
┃Mandiri E-Toll 40.000 = Rp42.175
┃Mandiri E-Toll 50.000 = Rp51.700
┃Mandiri E-Toll 75.000 = Rp76.700
┃Mandiri E-Toll 100.000 = Rp101.700
┃Mandiri E-Toll 150.000 = Rp152.150
┃Mandiri E-Toll 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃                    MAXIM
┏━━━━━━━━━━━━━━⬣
┃Maxim Driver 10.000 = Rp11.800
┃Maxim Driver 15.000 = Rp16.800
┃Maxim Driver 20.000 = Rp22.000
┃Maxim Driver 25.000 = Rp26.800
┃Maxim Driver 30.000 = Rp31.800
┃Maxim Driver 35.000 = Rp36.800
┃Maxim Driver 40.000 = Rp41.800
┃Maxim Driver 45.000 = Rp46.800
┃Maxim Driver 50.000 = Rp51.800
┃Maxim Driver 60.000 = Rp61.800
┃Maxim Driver 70.000 = Rp71.800
┃Maxim Driver 80.000 = Rp81.800
┃Maxim Driver 90.000 = Rp91.800
┃Maxim Driver 100.000 = Rp101.800
┗━━━━━━━━━━━━━━⬣
┃                      OVO
┏━━━━━━━━━━━━━━⬣
┃OVO 5.000 = Rp6.605
┃OVO 10.000 = Rp10.455
┃OVO 15.000 = Rp16.600
┃OVO 20.000 = Rp20.435
┃OVO 25.000 = Rp25.424
┃OVO 30.000 = Rp30.475
┃OVO 40.000 = Rp40.375
┃OVO 50.000 = Rp50.424
┃OVO 60.000 = Rp60.475
┃OVO 70.000 = Rp70.475
┃OVO 75.000 = Rp75.825
┃OVO 80.000 = Rp80.475
┃OVO 90.000 = Rp90.825
┃OVO 100.000 = Rp100.750
┃OVO 150.000 = Rp150.450
┃OVO 200.000 = Rp200.450
┃OVO 250.000 = Rp250.425
┃OVO 300.000 = Rp300.425
┃OVO 400.000 = Rp400.425
┃OVO 500.000 = Rp500.425
┃OVO 600.000 = Rp600.425
┃OVO 700.000 = Rp701.150
┃OVO 800.000 = Rp801.150
┃OVO 900.000 = Rp901.150
┃OVO 1.000.000 = Rp1.000.1150
┗━━━━━━━━━━━━━━⬣
┃               SHOPEEPAY
┏━━━━━━━━━━━━━━⬣
┃Shopeepay 10.000 = Rp11.400
┃Shopeepay 14.500 = Rp16.535
┃Shopeepay 15.000 = Rp16.360
┃Shopeepay 20.000 = Rp21.350
┃Shopeepay 25.000 = Rp26.285
┃Shopeepay 30.000 = Rp31.375
┃Shopeepay 35.000 = Rp36.315
┃Shopeepay 40.000 = Rp41.345
┃Shopeepay 45.000 = Rp46.315
┃Shopeepay 50.000 = Rp51.450
┃Shopeepay 55.000 = Rp56.315
┃Shopeepay 60.000 = Rp61.550
┃Shopeepay 65.000 = Rp66.315
┃Shopeepay 70.000 = Rp71.550
┃Shopeepay 75.000 = Rp76.550
┃Shopeepay 80.000 = Rp81.315
┃Shopeepay 85.000 = Rp86.315
┃Shopeepay 90.000 = Rp91.345
┃Shopeepay 95.000 = Rp96.315
┃Shopeepay 100.000 = Rp101.550
┃Shopeepay 150.000 = Rp151.345
┃Shopeepay 200.000 = Rp201.345
┃Shopeepay 250.000 = Rp251.350
┃Shopeepay 300.000 = Rp301.450
┗━━━━━━━━━━━━━━⬣
┃              TAPCASH BNI
┏━━━━━━━━━━━━━━⬣
┃Tapcash BNI 10.000 = Rp11.700
┃Tapcash BNI 20.000 = Rp21.700
┃Tapcash BNI 50.000 = Rp51.700
┃Tapcash BNI 100.000 = Rp101.700
┗━━━━━━━━━━━━━━⬣
┃                     TIX ID
┏━━━━━━━━━━━━━━⬣
┃TIX ID 10.000 = Rp12.105
┃TIX ID 25.000 = Rp27.010
┃TIX ID 50.000 = Rp52.025
┃TIX ID 100.000 = Rp101.700
┃TIX ID 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒 NOTE  」━━━━━⬣
┃JIKA ADA KESALAHAN NOMOR ┃ATAU PESANAN ATAS KESALAHAN
┃BUYER MAKA 100% BUKAN
┃TANGGUNG JAWAB ADMIN
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `memberuser`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'rulesm':
if (!isPremium) return freply(mess.only.premium)
teks =`┏━━━━━━━━━━━━━━⬣
┃「 ⛔️ *RULES MB STORE* ⛔️ 」
⬣ ━━━━━━━━━━━━━━⬣
┃⚠️ *PENTING!!!*
┃⚠️ *JANGAN MALAS BACA!!!*
┏━━━━━━━━━━━━━━⬣
┃▫️ *_RULES GIFT SKIN_*
┃
┃1. Dilarang ganti akun setelah masuk ┃antrian
┃2. Dilarang ganti nickname setelah ┃masuk antrian
┃3. Dilarang ganti skin setelah masuk ┃antrian
┃4. Dilarang unfriend setelah masuk list ┃antrian
┃5. Tidak bisa refund
┃
┃MELANGGAR? AUTO HANGUS ❌
┃
┃_Sistem :_
┃- Kirim format -> Tf lunas -> Add ID ┃yang diberi admin -> Tunggu 7 hari 
┃- Proses 7 hari + Antrian
┗━━━━━━━━━━━━━━⬣
┃▫️ *_RULES DM SLOW_*
┃
┃1. Dilarang untuk menyebarkan ┃screenshot diamond masuk di ┃Inbox, testi buyer dll, jika ketahuan ┃akan di kick dan di blacklist, serta ┃akan mendapatkan resiko lainnya.
┃
┃2. Per akun maximal 2695 DM per ID ┃dalam satu minggu, lebih dari itu ┃masuk antrian minggu depannya lagi.
┃
┃3. Dilarang untuk para reseller ┃menyantumkan tanggal kapan turun ┃diamondnya bilang saja estimasi 7-14 ┃hari maximal 21 hari (jika ada kendala/┃trouble)
┃
┃4. Jika Diamond belum masuk, ┃konfirmasi komplain hari senin mulai ┃dari jam 18:00 sampai jam 23:59 WIB.
┃
┃5. Transaksi via ID Diamonds Legal ┃from Montoon (jangan melanggar ┃rules jika tidak mau beresiko)
┃
┃6. Kesalahan ID dan Server ┃ditanggung pembeli
┃
┃7. Jika ingin laporan Diamond tidak ┃masuk, berikan bukti video dan foto ┃pada hari yang sama, batas waktu ┃memberikan video dan foto sampai ┃hari selasa, jika dihari lain komplain ┃akan di tolak.
┃
┃8. Patuhi rules jika tidak ingin ┃adanya resiko dari kami!
┃
┃9. Pesanan yang telah masuk list ┃tidak dapat di Cancel/Refund (kecuali ┃dari pihak kami)
┃
┃_Catatan:_
┃- Diamond biasanya di kirim setiap ┃hari senin, jadi kamu bisa cek secara ┃berkala setiap hari senin di waktu ┃7-14 hari dan maximal 21 hari jika ┃ada kendala/trouble dari pusat.
┃- Yang bilang lama atau lambat tidak ┃usah order! Bagi yang paham saja ┃(Rata-rata di pasaran ML Slow 14-21 ┃Hari! Rate 160 - 170) Cara hitung ┃Rate : Diamond x Rate = Harga (ex : ┃1225dm x 158 = 193.550)
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *🗒NOTE * 」━━━━━━⬣
┃ *JIKA ADA KEJADIAN ORDERAN*
┃ *HANGUS ATAS KESALAHAN*
┃ *BUYER YANG TIDAK MEMBACA/┃MELANGGAR RULES, MAKA ITU*
┃ *BUKAN TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Menu' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'paymentm':
if (!isPremium) return freply(mess.only.premium)
teks =`┏━━━━━━━━━━━━━━⬣
┃「 *⛔️PAYMENT MB STORE*⛔️  」
⬣ ━━━━━━━━━━━━━━⬣
┃          *QRIS ALL PAYMENT*
┃            bit.ly/QrisMBStore
┗━━━━━━━━━━━━━━⬣
┃                   *E-MONEY*
┗━━━━━━━━━━━━━━⬣
┃💰DANA ✅
┃=> Melvie [ 081212303462 ]
┃=> Bintang [ 081212303461 ]
┃💰GOPAY ✅
┃=> Melvie [ 081212303462 ]
┃💰OVO ✅
┃=> Melvie [ 081212303462 ]
┃=> Bintang [ 081212303461 ]
┃💰SHOPEEPAY ✅
┃=> Lesti [ 081212303462 ]
┗━━━━━━━━━━━━━━⬣
┃                       *ATM*
┗━━━━━━━━━━━━━━⬣
┃🏦 BCA ✅
┃=> Melvie [ 6520680916 ]
┃🏦 BJB ❌
┃=> ~Melvie [ 0113707143100 ]~
┗━━━━━━━━━━━━━━⬣
┃          *NO VIRTUAL DANA*
┗━━━━━━━━━━━━━━⬣
┃🏦BCA = 3901081212303462
┃🏦BRI = 88810081212303462
┃🏦BNI = 8810081212303462
┃🏦MANDIRI = 895008081212303462
┃🏦BTPN = 8000009081212303462
┃🏦PERMATA = 8528081212303462
┃🏦BNC = 8528081212303462
┃             < GODS TOP UP >
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒 *NOTE * 」━━━━━━⬣
┃ *JANGAN SAMPAI SALAH INPUT!!!*
┃ *JIKA TERJADI KESALAHAN*
┃ *TRANSAKSI SELAIN NO TUJUAN*
┃ *DIATAS, MAKA 100% BUKAN*
┃ *TANGGUNG JAWAB ADMIN ┃(HANGUS*)
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Menu' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'promom':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*OPEN PO EVENT TRANSFORMERS PHASE 1 (28 MEI)*  ✅
━━━━━━━━━━━━━━━━━━
_*MISI EVENT 100💎*_
➤ ~114 💎 = Rp26.700~ _(CLOSE)_
➤ 140 💎 = Rp37.027
~➤ 172 💎 = Rp38.400~ _(CLOSE)_
~➤ 257 💎 = Rp58.200~ _(CLOSE)_

_*MISI EVENT 250💎*_
~➤ 284 💎 = Rp64.000~ _(CLOSE)_
➤ 285 💎 = Rp66.531
~➤ 344 💎 = Rp76.800~ _(CLOSE)_
~➤ 355 💎 = Rp78.000~ _(CLOSE)_
~➤ 429 💎 = Rp96.000~ _(CLOSE)_
~➤ 514 💎 = Rp115.200~ _(CLOSE)_
~➤ 568 💎 = Rp128.000~ _(CLOSE)_
~➤ 600 💎 = Rp134.400~ _(CLOSE)_

_*NOMINAL 💎 LAINNYA*_
~➤ 1050 💎 = Rp230.400~ _(CLOSE)_
➤ 1163 💎 = Rp264.099
➤ 2012 💎 = Rp454.323
~➤ 3688 💎 = Rp768.000~ _(CLOSE)_
➤ 5883 💎 = Rp1.263.291
━━━━━━━━━━━━━━━━━━
⛔️ *NOTE*
_- Bonus Tidak Terhitung event_
_- Proses jam 15.00 WIB Tanggal 28 Mei Saat Event Release Max Malam_
_- PO Harap Sabar Saat Proses Pengerjaan_`
img = fs.readFileSync(`./media/picture/promo.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'poskinm':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*OPEN PO GIFT SKIN* ✅

▫️ *KARINA ZODIAC*
Rp119.000 (899💎)
RILIS 22 MEI

▫️ *HAYABUSA SUMMER*
Rp69.000 (524💎)
RILIS 21 JUNI

▫️ *KAGURA SUMMER*
Rp69.000 (524💎)
RILIS 21 JUNI

▫️ *ESTES M3*
Rp83.000 (629💎)
RILIS 30 JUNI

◽️ *MOSKOV ABYSS*
Rp885.000
RILIS JUNI
━━━━━━━━━━━━━━━━━━
▫️ *LANCELOT HERO (INSTANT)*
Rp1.400.000
_Proses 1 Hari_`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'postarm':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*OPEN PO STARLIGHT JUNI* ✅
━━━━━━━━━━━━━━━━━━
*VID ID+SERVER*
Rp93.000

*VIA GIFT*
Rp87.000

_SLOT GA BANYAK_`
img = fs.readFileSync(`./media/picture/starlight.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'mlam':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS A* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 86   💎  =  Rp19.565
➤ 172  💎  =  Rp39.130
➤ 257  💎  =  Rp58.695
➤ 344  💎  =  Rp78.260
➤ 429  💎  =  Rp97.825
➤ 514  💎  =  Rp117.390
➤ 600  💎  =  Rp136.955
➤ 706  💎  =  Rp156.520
➤ 792  💎  =  Rp176.085
➤ 878  💎  =  Rp195.650
➤ 963  💎  =  Rp215.215
➤ 1050 💎  =  Rp234.780
➤ 1412 💎  =  Rp313.040
➤ 2195 💎  =  Rp469.560
➤ 3688 💎  =  Rp782.600
➤ 4032 💎  =  Rp860.860
➤ 5532 💎  =  Rp1.173.900
➤ 6238 💎  =  Rp1.330.420
➤ 9288 💎  =  Rp1.956.500

➤ ⭐️ SL/TW FAST = Rp129.129
➤ ⭐️ SL SLOW = Rp113.000
➤ ⭐️ SL PLUS = Rp293.475\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Server :
Order dm :
Paket : ML A
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID & SERVER 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'mlbm':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS B* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━
\`\`\`➤ 3     💎  =  Rp1.264
➤ 5     💎  =  Rp1.442
➤ 14    💎  =  Rp3.552
➤ 28    💎  =  Rp7.104
➤ 42    💎  =  Rp10.656
➤ 56    💎  =  Rp14.208
➤ 70    💎  =  Rp17.760
➤ 114   💎  =  Rp28.416
➤ 140   💎  =  Rp35.520
➤ 285   💎  =  Rp67.793
➤ 372   💎  =  Rp88.023
➤ 457   💎  =  Rp108.252
➤ 556   💎  =  Rp132.035
➤ 570   💎  =  Rp135.587
➤ 720   💎  =  Rp165.390
➤ 977   💎  =  Rp226.079
➤ 1163  💎  =  Rp270.090
➤ 1454  💎  =  Rp334.331
➤ 2012  💎  =  Rp466.366
➤ 4394  💎  =  Rp972.028
➤ 5883  💎  =  Rp1.296.204
➤ 6589  💎  =  Rp1.458.042
➤ 7376  💎  =  Rp1.619.880
➤ 8339  💎  =  Rp1.842.407
➤ 9302  💎  =  Rp2.064.934
➤ 10000 💎  =  Rp2.206.543
➤ 12456 💎  =  Rp2.753.246
➤ 17290 💎  =  Rp3.806.193

➤ ⭐️ SL+💎/TW FAST = Rp128.000
➤ ⭐️ SL+💎/TW SLOW = Rp112.000
➤ ⭐️ SL PLUS  = Rp284.500\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Server :
Order dm :
Paket : ML B
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID & SERVER 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'mlcm':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS C* ✅
⏳ _5-10 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 42   💎  =  Rp10.050
➤ 70   💎  =  Rp16.750
➤ 140  💎  =  Rp33.500
➤ 210  💎  =  Rp50.250
➤ 284  💎  =  Rp67.000
➤ 355  💎  =  Rp83.750
➤ 429  💎  =  Rp100.500
➤ 569  💎  =  Rp134.000
➤ 716  💎  =  Rp167.500
➤ 1446 💎  =  Rp335.000
➤ 2976 💎  =  Rp670.000
➤ 7502 💎  =  Rp1.675.000

➤ ⭐️ SL+💎/TW FAST = Rp128.000
➤ ⭐️ SL+💎/TW SLOW = Rp112.000
➤ ⭐️ SL PLUS = Rp284.500\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Server :
Order dm :
Paket : ML C
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID & SERVER 100% BUKAN TANGGUNG JAWAB ADMIN`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'mlslowm':
if (!isPremium) return freply(mess.only.premium)
teks =`┏━━━━━━━━━━━━━━⬣
┃        「 💎*LIST DIAMOND* 」
┃「🎮 *MOBILE LEGENDS SLOW* 」
┃       「✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*7 - 14 HARI MAX 21 HARI*
┃⏱*OPEN JAM 24 JAM*
┗━━━━━━━━━━━━━━⬣
┃⚠️ *WARNING* ⚠️
┃SEBELUM ORDER WAJIB BACA ┃RULES TERLEBIH DAHULU DI ┃http://bit.ly/ResellerMBStore
┃TIDAK MEMBACA/MELANGGAR ┃RULES = HANGUS + BLACKLIST ❌
┏━━━━━━━━━━━━━━⬣
┃💰RATE = 158
┃
┃980💎 = Rp154.840
┃1225💎 = Rp193.550
┃1470💎 = Rp232.260
┃1715💎 = Rp270.970
┃1960💎 = Rp309.680
┃2205💎 = Rp348.390
┃2450💎 = Rp387.100
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Server :
┃Order dm :
┃Paket : ML Slow
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *NOTE * 」━━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'vlogm':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*MOBILE LEGENDS VILOG* ✅
⏳ _1 x 24 JAM MAX 3 HARI_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 1100 🌟   = Rp72.000
➤ 1100 🌟 + 112 💎 = Rp97.500
➤ 6000  💎  = Rp1.032.000
➤ 12000 💎  = Rp2.064.000
➤ 18000 💎  = Rp3.096.000
➤ 24000 💎  = Rp4.128.000\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Email :
Password :
Paket : ML Vilog
_Pastikan matikan verif_
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA PESANAN MASIH DALAM PROSES DAN AKUN DITABRAK MAKA REFUND 50%. KESALAHAN BUYER BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Menu' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'coam':
if (!isPremium) return freply(mess.only.premium)
teks =`━━━━━━━━━━━━━━━━━━
*CRYSTAL OF AURORA* ✅
⏳ _1-3 JAM MAX 24 JAM_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 1100 🌟 = Rp73.000\`\`\`
━━━━━━━━━━━━━━━━━━
_*KETENTUAN CRYSTAL OF AURORA :*_
1. Mendapatkan total 1100 Coa
2. Proses 1 jam max 3 jam
3. Dalam antrian 1-3 hari
4. Ketika akan di proses, admin akan infokan (Supaya tidak ditabrak)
5. Ketika status proses, jangan log-in terlebih dahulu (supaya tidak ditabrak)
6. Dibutuhkan 3-5 x classic menggunakan hero non wr
7. Cantumkan hero yang tidak boleh/boleh dipakai (Jika ada)
8. Via log-in (Log-in diutamakan via MOONTON
━━━━━━━━━━━━━━━━━━
_*JIKA AKUN DALAM PROSES DITABRAK :*_
1. Proses dilanjut +13.000
2. Proses tidak dilanjut refund 60%
━━━━━━━━━━━━━━━━━━
_*KEGUNAAN CRYSTAL OF AURORA :*_
1. Gatcha Zodiac Summon
2. Gatcha Magic Whell
3. Gatcha Collector
4. Gatcha Aurora Summon
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Email :
Password :
Order : COA
_Pastikan matikan verif_
━━━━━━━━━━━━━━━━━━
⛔️ *KESALAHAN BUYER BUKAN TANGGUNG JAWAB ADMIN. PATUHI RULES JIKA TIDAK INGIN ADANYA RESIKO DARI KAMI!!*`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'sqveridfm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃ 「⚙️ *LIST SEWA SQ VERIF* 」
┃   「🎮 *MOBILE LEGENDS* 」
┃       「✅ *VIA ID & NICK* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*PROSES 10 - 180 MENIT*
┃⏱*CLOSE 21.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃5 HARI = Rp28.500
┃7 HARI = Rp40.000
┃10 HARI = Rp50.000
┃14 HARI = Rp79.000
┃20 HARI = Rp93.000
┃1 BULAN = Rp118.100
┃2 BULAN = Rp210.000
┃3 BULAN = Rp305.000
┃4 BULAN = Rp400.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Tanggal : 
┃Lama Sewa :
┃Nama Squad :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*KESALAHAN BUYER 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'roomtourm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━━━⬣
┃ 「⚙️ *OPEN SEWA ROOMTOUR* 」
┃       「🎮 *MOBILE LEGENDS* 」
┃          「✅ *VIA NAME & ID* 」
⬣ ━━━━━━━━━━━━━━━━⬣
┃⏳*JADWAL SESUAI REQUEST*
┃⏱*OPEN 24 JAM*
┗━━━━━━━━━━━━━━━━⬣
┃*KETERANGAN :*
┃1. Harus log-in maksimal 5 menit
┃sebelum jadwal yang telah ditentukan.
┃2. Jika telat karena kesalahan buyer,
┃bisa berpotensi mengurangi waktu
┃bermain.
┃3. Hanya ada 1x kesempatan ┃mengganti jadwal (Max konfirmasi
┃H-1 dari jadwal lama.
┃4. 1 jam = Sudah termasuk menunggu
┃di lobby dan draftpick.
┃
┃_*PRICE :*_
┃- Rp50.000/Match
┃- Rp85.000/Jam
┗━━━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nama Match :
┃Nama Team :
┃ID : 
┃Nomor WA :
┃Tanggal :
┃Pukul :
┃Order :
┃Draft Ban 6/10 : 10
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*KESALAHAN BUYER 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ml.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'dmffm':
if (!isPremium) return freply(mess.only.premium)
teks = `━━━━━━━━━━━━━━━━━━
*FREE FIRE* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 5    💎  =  Rp819
➤ 20   💎  =  Rp2.730
➤ 50   💎  =  Rp6.552
➤ 70   💎  =  Rp9.009
➤ 100  💎  =  Rp13.104
➤ 120  💎  =  Rp15.561
➤ 140  💎  =  Rp18.018
➤ 210  💎  =  Rp27.027
➤ 355  💎  =  Rp45.045
➤ 500  💎  =  Rp63.882
➤ 720  💎  =  Rp90.090
➤ 1000 💎  =  Rp126.126
➤ 2000 💎  =  Rp245.700
➤ 4000 💎  =  Rp491.400

➤ 💳 M. Mingguan = Rp27.300
➤ 💳 M. Bulanan = Rp136.500\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Order dm :
Sisa dm :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/ff.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'pubgam':
if (!isPremium) return freply(mess.only.premium)
teks =`┏━━━━━━━━━━━━━━⬣
┃               「 💵 *LIST UC* 」
┃    「 🎮*PUBG MOBILE FAST* 」
┃    「 🇮🇩*REGION INDONESIA* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 10 MENIT MAX 3 JAM*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃16💵 = Rp2.675
┃26💵 = Rp4.500
┃52💵 = Rp8.900
┃105💵 = Rp17.500
┃131💵 = Rp21.750
┃263💵 = Rp43.500
┃530💵 = Rp86.000
┃825💵 = Rp129.500
┃1100💵 = Rp172.000
┃1925💵 = Rp300.500
┃2200💵 = Rp343.000
┃2463💵 = Rp385.000
┃2730💵 = Rp428.500
┃3025💵 = Rp469.900
┃3300💵 = Rp505.000
┃3563💵 = Rp556.500
┃3830💵 = Rp599.000
┃4125💵 = Rp641.500
┃4400💵 = Rp684.500
┃4663💵 = Rp777.000
┃4930💵 = Rp770.000
┃5500💵 = Rp855.500
┃6600💵 = Rp1.025.000
┃7700💵 = Rp1.193.000
┃8800💵 = Rp1.365.000
┃9900💵 = Rp1.540.000
┃10005💵 = Rp1.555.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Order UC :
┃Region :
┃Paket : PUBG A
┃Sisa UC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/pubg.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'pubgbm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃               「 💵 *LIST UC* 」
┃「 🎮*PUBG MOBILE SEMIFAST* 」
┃     「 🇮🇩*REGION INDONESIA* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10-180 MENIT MAX 24 JAM*
┃⏱*OPEN JAM 10.00 - 19.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃263💵 = Rp46.000
┃525💵 = Rp89.000
┃788💵 = Rp133.500
┃1050💵 = Rp178.500
┃1375💵 = Rp223.000
┃1638💵 = Rp265.000
┃1900💵 = Rp311.500
┃2163💵 = Rp352.500
┃2425💵 = Rp398.500
┃2875💵 = Rp443.000
┃3138💵 = Rp486.000
┃3400💵 = Rp527.500
┃3925💵 = Rp614.000
┃4250💵 = Rp659.000
┃6000💵 = Rp880.000
┃9375💵 = Rp1.320.000
┃46875💵 = Rp6.625.000
┃93750💵 = Rp13.150.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Id :
┃Order UC :
┃Region :
┃Paket : PUBG B
┃Sisa UC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/pubg.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'apexm' :
if (!isPremium) return freply(mess.only.premium)
teks = `━━━━━━━━━━━━━━━━━━
*APEX LEGENDS* ✅
⏳ _1-5 MENIT MAX 60 MENIT_
━━━━━━━━━━━━━━━━━━
\`\`\`➤ 90    🪙  =  Rp14.514
➤ 280   🪙  =  Rp31.853
➤ 500   🪙  =  Rp59.577
➤ 1050  🪙  =  Rp117.124
➤ 2150  🪙  =  Rp235.072
➤ 5650  🪙  =  Rp569.200
➤ 11500 🪙  =  Rp1.140.469
➤ 23500 🪙  =  Rp2.284.762\`\`\`
━━━━━━━━━━━━━━━━━━
📝 *FORMAT ORDER*
Nickname :
ID :
Order SG :
Sisa SG :
━━━━━━━━━━━━━━━━━━
⛔️ *JIKA ADA KESALAHAN ID 100% BUKAN TANGGUNG JAWAB ADMIN*`
img = fs.readFileSync(`./media/picture/thumb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'aovm' :
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃      「 🎟 *LIST VOUCHER* 」
┃   「 🎮 *ARENA OF VALOR* 」
┃ 「 ✅ *VIA ID & NICKNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃40🎟 = Rp9.109
┃90🎟 = Rp18.218
┃230🎟 = Rp45.345
┃470🎟 = Rp90.590
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Order Voucher :
┃Sisa Voucher :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒 *NOTE* 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & NICKNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/aov.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'genshinm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃「 💎 *LIST GENESIS CRYSTAL* 」
┃     「 🎮 *GENSHIN IMPACT* 」
┃     「 ✅ *VIA UID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10 - 20 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃60 💎 = Rp12.350
┃300 + 30 💎 = Rp62.500
┃980 + 110 💎 = Rp185.000
┃1980 + 260 💎 = Rp393.500
┃3280 + 600 💎 = Rp627.500
┃6480 + 1600 💎 = Rp1.225.000
┃
┃BLESSING CARD = Rp68.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃UID :
┃Server :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE* 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *UID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/genshin.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'pointblankm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃          「 🪙 *LIST CASH* 」
┃       「 🎮 *POINT BLANK* 」
┃         「 ✅ *VIA USER ID* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 120 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃1200🪙 = Rp9.500
┃2400🪙 = Rp18.400
┃6000🪙 = Rp46.000
┃12000🪙 = Rp92.000
┃3600🪙 = Rp276.000
┃6000🪙 = Rp460.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Order Voucher :
┃Sisa Voucher :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN USER ID*
┃*100% BUKAN TANGGUNG JAWAB*
┃*ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/pb.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'ragnarokxm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃      「💎 *LIST DIAMOND* 」
┃       「 🎮 *RAGNAROK X* 」
┃    「 *NEXT GENERATION* 」
┃    「 ✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10 - 180 MENIT MAX 24 JAM*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃2580💎 = Rp
┃5150💎 = Rp
┃12900💎 = Rp
┃26780💎 = Rp
┃39780💎 = Rp
┃54100💎 = Rp
┃108190💎 = Rp
┃132600💎 = Rp
┃151460💎 = Rp
┃151460 x 3💎 = Rp
┃151460 x 5💎 = Rp
┃
┃KAFRA’S TRIAL CARD = Rp
┃KAFRA’S VIP CARD = Rp
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Role ID :
┃Server :
┃Order DM :
┃Sisa DM :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 *🗒NOTE * 」━━━━⬣
┃  *JIKA ADA KESALAHAN ID &*
┃  *SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ragnarok.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'ragnarokmm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃ 「🪙 *LIST BIG CAT COINS* 」
┃       「 🎮*RAGNAROK M* 」
┃        「 *ETERNAL LOVE* 」
┃    「 ✅*VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*10 - 180 MENIT MAX 24 JAM*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃6🪙 = Rp
┃12🪙 = Rp
┃18🪙 = Rp
┃24🪙 = Rp
┃36🪙 = Rp
┃145🪙 = Rp
┃373🪙 = Rp
┃748🪙 = Rp
┃929🪙 = Rp
┃1532🪙 = Rp
┃3993🪙 = Rp
┃
┃PREMIUM  = Rp
┃ALL PACK🪙  = Rp
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃User ID :
┃Server :
┃Order BCC :
┃Sisa BCC :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/ragnarok.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'sausagem':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃        「 🍬 *LIST CANDY* 」
┃     「 🎮 *SAUSAGE MAN* 」
┃    「 ✅ *VIA ID & SERVER* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃60🍬 = 
┃180🍬 = 
┃316🍬 = 
┃718🍬 = 
┃1368🍬 = 
┃2118🍬 = 
┃3548🍬 = 
┃7048🍬 = 
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Server :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/sausage.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'valorantam':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃             「 🪙*LIST VP* 」
┃        「 🎮 *VALORANT A* 」
┃      「 ✅ *VIA USERNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃125🪙 = Rp14.700
┃420🪙 = Rp48.900
┃700🪙 = Rp78.250
┃1375🪙 = Rp146.750
┃2400🪙 = Rp244.750
┃4000🪙 = Rp392.000
┃8150🪙 = Rp784.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Username Riot :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/valorant.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'valorantbm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃             「 🪙 *LIST VP* 」
┃        「 🎮 *VALORANT B* 」
┃      「 ✅ *VIA USERNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃300🪙 = Rp30.585
┃625🪙 = Rp61.170
┃1125🪙 = Rp107.048
┃1650🪙 = Rp152.926
┃1950🪙 = Rp183.511
┃3400🪙 = Rp305.852
┃7000🪙 = Rp611.704
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Username Riot :
┃Order :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE* 」━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/valorant.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'zepetom':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃  「♦️ *LIST ZEMS & COINS* 」
┃             「 🎮 *ZEPETO* 」
┃「 ✅ *VIA NICK & USERNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃_*ZEPETO ZEMS*_
┃7♦️ = Rp7.100
┃14♦️ = Rp14.200
┃29♦️ = Rp28.400
┃60♦️ = Rp56.800
┃125♦️ = Rp113.600
┃196♦️ = Rp170.400
┃770♦️ = Rp653.200
┗━━━━━━━━━━━━━━⬣
┃_*ZEPETO COINS*_
┃4680🪙 = Rp14.200
┃10200🪙 = Rp28.400
┃21000🪙 = Rp56.800
┃38900🪙 = Rp103.800
┃62800🪙 = Rp159.720
┃234000🪙 = Rp556.200
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃Username :
┃Order : 
┃Paket :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━⬣
┃  *JIKA ADA KESALAHAN NICK*
┃  *& USERNAME 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/zepeto.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'codm':
if (!isPremium) return freply(mess.only.premium)
teks = `┏━━━━━━━━━━━━━━⬣
┃              「 🪙 *LIST CP* 」
┃「 🎮 *CALL OF DUTY MOBILE* 」
┃   「 ✅ *VIA ID & NICKNAME* 」
⬣ ━━━━━━━━━━━━━━⬣
┃⏳*5 - 15 MENIT MAX 60 MENIT*
┃⏱*OPEN JAM 08.00 - 22.00 WIB*
┗━━━━━━━━━━━━━━⬣
┃26 + 5 🪙 = Rp4.800
┃53 + 9 🪙 = Rp9.600
┃106 + 21 🪙 = Rp18.500
┃264 + 53 🪙 = Rp46.250
┃528 + 106 🪙 = Rp92.500
┃1056 + 317 🪙 = Rp185.000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Nickname :
┃ID :
┃Order CP :
┃Sisa CP :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE* 」━━━━━━⬣
┃  *JIKA ADA KESALAHAN*
┃  *ID & SERVER 100% BUKAN*
┃  *TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/cod.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'l-premiumm':
if (!isPremium) return freply(mess.only.premium)
teks = ` *---------------------------------------*
   🎥 *LAYANAN SIARAN PREMIUM* 🎥
                   🎥 *MB STORE* 🎥
*---------------------------------------*

🎬 _*NETFLIX PREMIUM*_ 🎬 *---------------------------------------*
▫️ *NETFLIX PREMIUM SHARED*
[ 3 HARI - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 6.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 7 HARI - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 9.500]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - 2 USER ]
[ TV - MOBILE - DESKSTOP ]
=> [Rp 19.500]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - MOBILE - VPN ]
=> [Rp 22.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - 1 USER ]
=> [Rp 28.000]
▫️ *NETFLIX PREMIUM SHARED*
[ 1 BULAN - 5 PROFILE ]
=> [Rp 120.000]

*---------------------------------------*
🎬 _*IQIYI PREMIUM*_ 🎬
*---------------------------------------*
▫️ *IQIYI PREMIUM SHARED*
[ 1 BULAN ]
=> [Rp 18.500]
▫️ *IQIYI PREMIUM PRIVATE*
[ 1 BULAN - 2 DEVICE ]
=> [Rp 22.000]

*---------------------------------------*
🎬 _*WE-TV PREMIUM *_🎬 *---------------------------------------*
▫️ *WE-TV PREMIUM SHARED*
[ 1 BULAN ]
=> [Rp 9.000]
▫️ *WE-TV PREMIUM SHARED*
[ 1 TAHUN ]
=> [Rp 31.000]
▫️ *WE-TV PREMIUM PRIVATE*
[ 1 BULAN ]
=> [Rp 32.500]

*---------------------------------------*
🎬 _*DISNEY HOTSTAR PREMIUM *_🎬
*---------------------------------------*
▫️ *DISNEY + HOTSTAR SHARED* 
[ 1 BULAN ]
=> [Rp 15.500]
▫️ *DISNEY - HOTSTAR SHARED*
[ 2 BULAN ]
=> [Rp 29.000]

*---------------------------------------*
🎬 _*YOUTUBE PREMIUM*_ 🎬 *---------------------------------------*
▫️ *YOUTUBE PREMIUM ANGGOTA*
[ 1 BULAN - INVITE ]
=> [Rp 3.500]
▫️ *YOUTUBE PREMIUM FAMILY*
[ 1 BULAN - 5 ANGGOTA ]
=> [Rp 5.500]
▫️ *YOUTUBE PREMIUM INDIVIDU*
 [ 4 BULAN ]
=> [Rp 13.500]

*---------------------------------------*
🎬 _*CANVA PREMIUM*_🎬
*---------------------------------------*
▫️ *CANVA PRO*
[ 1 BULAN ]
=> [Rp 6.000]
▫️ *CANVA PRO*
[ 1 TAHUN - GARANSI 6 BULAN ]
=> [Rp 14.500]
▫️ *CANVA PRO*
[ PERMANENT - GARANSI 1 TAHUN ]
=> [Rp 18.500]

*---------------------------------------*
🎬 _*VIDEO PREMIER PREMIUM*_🎬 
*---------------------------------------*
▫️ *VIDEO PREMIER SHARED*
[ 1 BULAN ]
=> [Rp 17.500]
▫️ *VIDEO PREMIER PRIVATE*
[ 1 BULAN ]
=> [Rp 29.000]

*---------------------------------------*
🎬 _*SPOTIFY PREMIUM*_🎬 
*---------------------------------------*
▫️ *SPOTIFY PREMIUM ANGGOTA*
[ 2 BULAN - INVITE - INDO]
=> [Rp 12.500]
▫️ *SPOTIFY PREMIUM ADMIN*
[ 2 BULAN - INDO ]
=> [Rp 22.000]
 
*---------------------------------------*
🗒 NOTE :
*SEMUA LAYANAN PREMIUM FULL GARANSI*
*---------------------------------------*
📢 WA ADMIN
📞 wa.me/6281212303462
📞 wa.me/6281212303461`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `vipmember`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break 
case 'e-moneym':
if (!isPremium) return freply(mess.only.premium)
teks =`┏━━━━━━━━━━━━━━⬣
┃        「 💰 LIST HARGA 」
┃   「 💵 SALDO E-MONEY 」
┃         「 ✅ MB STORE 」
⬣ ━━━━━━━━━━━━━━⬣
┃                 BRI BRIZZI
┗━━━━━━━━━━━━━━⬣
┃Brizzi 20.000 = Rp21.875
┃Brizzi 50.000 = Rp51.710
┃Brizzi 100.000 = Rp101.710
┃Brizzi 200.000 = Rp201.600
┗━━━━━━━━━━━━━━⬣
┃                     DANA
┏━━━━━━━━━━━━━━⬣
┃Dana Rp10.000 = Rp11.275
┃Dana Rp15.000 = Rp16.240
┃Dana Rp20.000 = Rp21.280
┃Dana Rp25.000 = Rp26.245
┃Dana Rp30.000 = Rp31.255
┃Dana Rp40.000 = Rp41.295
┃Dana Rp50.000 = Rp51.295
┃Dana Rp60.000 = Rp61.255
┃Dana Rp70.000 = Rp71.375
┃Dana Rp75.000 = Rp76.255
┃Dana Rp80.000 = Rp81.375
┃Dana Rp90.000 = Rp91.375
┃Dana Rp100.000 = Rp101.255
┃Dana Rp150.000 = Rp151.255
┃Dana Rp200.000 = Rp201.255
┃Dana Rp25.000 = Rp251.255
┃Dana Rp300.000 = Rp301.255
┃Dana Rp400.000 = Rp401.255
┃Dana Rp500.000 = Rp501.255
┃Dana Rp800.000 = Rp801.255
┃Dana Rp900.000 = Rp901.535
┃Dana Rp1.000.000 = Rp1.000.2000
┗━━━━━━━━━━━━━━⬣
┃                     DOKU
┏━━━━━━━━━━━━━━⬣
┃Doku 55.000 = Rp56.800
┃Doku 65.000 = Rp66.800
┃Doku 85.000 = Rp86.800
┃Doku 95.000 = Rp96.800
┗━━━━━━━━━━━━━━⬣
┃                    GOPAY
┏━━━━━━━━━━━━━━⬣
┃Gopay 5.000 = Rp6.690
┃Gopay 10.000 = Rp11.850
┃Gopay 15.000 = Rp16.775
┃Gopay 20.000 = Rp21.850
┃Gopay 25.000 = Rp26.775
┃Gopay 30.000 = Rp31.790
┃Gopay 35.000 = Rp36.850
┃Gopay 40.000 = Rp41.790
┃Gopay 45.000 = Rp46.850
┃Gopay 50.000 = Rp51.895
┃Gopay 55.000 = Rp56.895
┃Gopay 60.000 = Rp61.875
┃Gopay 65.000 = Rp66.875
┃Gopay 70.000 = Rp71.875
┃Gopay 75.000 = Rp76.895
┃Gopay 80.000 = Rp81.875
┃Gopay 85.000 = Rp86.875
┃Gopay 90.000 = Rp91.875
┃Gopay 95.000 = Rp96.875
┃Gopay 100.000 = Rp101.790
┃Gopay 150.000 = Rp151.790
┃Gopay 200.000 = Rp201.790
┃Gopay 250.000 = Rp251.790
┃Gopay 500.000 = Rp501.800
┃Gopay 1.000.000 = Rp1.002.150
┗━━━━━━━━━━━━━━⬣
┃            GOPAY DRIVER
┏━━━━━━━━━━━━━━⬣
┃Gopay Driver 10.000 = Rp11.280
┃Gopay Driver 15.000 = Rp16.455
┃Gopay Driver 20.000 = Rp21.285
┃Gopay Driver 25.000 = Rp26.285
┃Gopay Driver 30.000 = Rp31.350
┃Gopay Driver 35.000 = Rp36.350
┃Gopay Driver 40.000 = Rp41.350
┃Gopay Driver 45.000 = Rp46.325
┃Gopay Driver 50.000 = Rp51.300
┃Gopay Driver 55.000 = Rp56.350
┃Gopay Driver 60.000 = Rp61.350
┃Gopay Driver 65.000 = Rp66.350
┃Gopay Driver 70.000 = Rp71.325
┃Gopay Driver 75.000 = Rp76.300
┃Gopay Driver 80.000 = Rp81.350
┃Gopay Driver 85.000 = Rp86.350
┃Gopay Driver 90.000 = Rp91.350
┃Gopay Driver 95.000 = Rp96.350
┃Gopay Driver 100.000 = Rp101.300
┃Gopay Driver 150.000 = Rp151.300
┃Gopay Driver 200.000 = Rp201.300
┃Gopay Driver 250.000 = Rp251.300
┃Gopay Driver 300.000 = Rp301.300
┃Gopay Driver 500.000 = Rp501.300
┗━━━━━━━━━━━━━━⬣
┃                     GRAB
┏━━━━━━━━━━━━━━⬣
┃Grab Customer 20.000 = Rp21.095
┃Grab Customer 25.000 = Rp26.095
┃Grab Customer 40.000 = Rp41.115
┃Grab Customer 50.000 = Rp51.115
┃Grab Driver 50.000 = Rp51.920
┃Grab Customer 75.000 = Rp76.115
┃Grab Driver 100.000 = Rp101.115
┃Grab Customer 100.000 = Rp101.425
┃Grab Driver 150.000 = Rp151.350
┃Grab Customer 150.000 = Rp151.995
┃Grab Driver 200.000 = Rp201.350
┃Grab Customer 200.000 = Rp201.995
┃Grab Driver 250.000 = Rp251.350
┗━━━━━━━━━━━━━━⬣
┃                   LINK AJA
┏━━━━━━━━━━━━━━⬣
┃Link Aja Rp10.000 = Rp11.250
┃Link Aja Rp15.000 = Rp16.375
┃Link Aja Rp20.000 = Rp21.240
┃Link Aja Rp25.000 = Rp26.240
┃Link Aja Rp30.000 = Rp31.290
┃Link Aja Rp40.000 = Rp41.255
┃Link Aja Rp50.000 = Rp51.290
┃Link Aja Rp60.000 = Rp61.290
┃Link Aja Rp70.000 = Rp71.255
┃Link Aja Rp80.000 = Rp80.255
┃Link Aja Rp90.000 = Rp91.290
┃Link Aja Rp100.000 = Rp101.290
┃Link Aja Rp150.000 = Rp151.300
┃Link Aja Rp200.000 = Rp201.290
┃Link Aja Rp250.000 = Rp251.850
┗━━━━━━━━━━━━━━⬣
┃           MANDIRI E-TOLL
┏━━━━━━━━━━━━━━⬣
┃Mandiri E-Toll 10.000 = Rp12.075
┃Mandiri E-Toll 20.000 = Rp21.700
┃Mandiri E-Toll 25.000 = Rp26.700
┃Mandiri E-Toll 30.000 = Rp32.175
┃Mandiri E-Toll 40.000 = Rp42.175
┃Mandiri E-Toll 50.000 = Rp51.700
┃Mandiri E-Toll 75.000 = Rp76.700
┃Mandiri E-Toll 100.000 = Rp101.700
┃Mandiri E-Toll 150.000 = Rp152.150
┃Mandiri E-Toll 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃                    MAXIM
┏━━━━━━━━━━━━━━⬣
┃Maxim Driver 10.000 = Rp11.800
┃Maxim Driver 15.000 = Rp16.800
┃Maxim Driver 20.000 = Rp22.000
┃Maxim Driver 25.000 = Rp26.800
┃Maxim Driver 30.000 = Rp31.800
┃Maxim Driver 35.000 = Rp36.800
┃Maxim Driver 40.000 = Rp41.800
┃Maxim Driver 45.000 = Rp46.800
┃Maxim Driver 50.000 = Rp51.800
┃Maxim Driver 60.000 = Rp61.800
┃Maxim Driver 70.000 = Rp71.800
┃Maxim Driver 80.000 = Rp81.800
┃Maxim Driver 90.000 = Rp91.800
┃Maxim Driver 100.000 = Rp101.800
┗━━━━━━━━━━━━━━⬣
┃                      OVO
┏━━━━━━━━━━━━━━⬣
┃OVO 5.000 = Rp6.605
┃OVO 10.000 = Rp10.455
┃OVO 15.000 = Rp16.600
┃OVO 20.000 = Rp20.435
┃OVO 25.000 = Rp25.424
┃OVO 30.000 = Rp30.475
┃OVO 40.000 = Rp40.375
┃OVO 50.000 = Rp50.424
┃OVO 60.000 = Rp60.475
┃OVO 70.000 = Rp70.475
┃OVO 75.000 = Rp75.825
┃OVO 80.000 = Rp80.475
┃OVO 90.000 = Rp90.825
┃OVO 100.000 = Rp100.750
┃OVO 150.000 = Rp150.450
┃OVO 200.000 = Rp200.450
┃OVO 250.000 = Rp250.425
┃OVO 300.000 = Rp300.425
┃OVO 400.000 = Rp400.425
┃OVO 500.000 = Rp500.425
┃OVO 600.000 = Rp600.425
┃OVO 700.000 = Rp701.150
┃OVO 800.000 = Rp801.150
┃OVO 900.000 = Rp901.150
┃OVO 1.000.000 = Rp1.000.1150
┗━━━━━━━━━━━━━━⬣
┃               SHOPEEPAY
┏━━━━━━━━━━━━━━⬣
┃Shopeepay 10.000 = Rp11.400
┃Shopeepay 14.500 = Rp16.535
┃Shopeepay 15.000 = Rp16.360
┃Shopeepay 20.000 = Rp21.350
┃Shopeepay 25.000 = Rp26.285
┃Shopeepay 30.000 = Rp31.375
┃Shopeepay 35.000 = Rp36.315
┃Shopeepay 40.000 = Rp41.345
┃Shopeepay 45.000 = Rp46.315
┃Shopeepay 50.000 = Rp51.450
┃Shopeepay 55.000 = Rp56.315
┃Shopeepay 60.000 = Rp61.550
┃Shopeepay 65.000 = Rp66.315
┃Shopeepay 70.000 = Rp71.550
┃Shopeepay 75.000 = Rp76.550
┃Shopeepay 80.000 = Rp81.315
┃Shopeepay 85.000 = Rp86.315
┃Shopeepay 90.000 = Rp91.345
┃Shopeepay 95.000 = Rp96.315
┃Shopeepay 100.000 = Rp101.550
┃Shopeepay 150.000 = Rp151.345
┃Shopeepay 200.000 = Rp201.345
┃Shopeepay 250.000 = Rp251.350
┃Shopeepay 300.000 = Rp301.450
┗━━━━━━━━━━━━━━⬣
┃              TAPCASH BNI
┏━━━━━━━━━━━━━━⬣
┃Tapcash BNI 10.000 = Rp11.700
┃Tapcash BNI 20.000 = Rp21.700
┃Tapcash BNI 50.000 = Rp51.700
┃Tapcash BNI 100.000 = Rp101.700
┗━━━━━━━━━━━━━━⬣
┃                     TIX ID
┏━━━━━━━━━━━━━━⬣
┃TIX ID 10.000 = Rp12.105
┃TIX ID 25.000 = Rp27.010
┃TIX ID 50.000 = Rp52.025
┃TIX ID 100.000 = Rp101.700
┃TIX ID 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒 NOTE  」━━━━━⬣
┃JIKA ADA KESALAHAN NOMOR ┃ATAU PESANAN ATAS KESALAHAN
┃BUYER MAKA 100% BUKAN
┃TANGGUNG JAWAB ADMIN
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'topupgopay':
teks = `┏━━━━━━━━━━━━━━⬣
┃         「 🍏*LIST GOPAY* 」
┃    「 💸 *SALDO E-MONEY* 」
┃ 「 ✅ *VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃           *GOPAY CUSTOMER*
┗━━━━━━━━━━━━━━⬣
┃Gopay 5.000 = Rp6.690
┃Gopay 10.000 = Rp11.850
┃Gopay 15.000 = Rp16.775
┃Gopay 20.000 = Rp21.850
┃Gopay 25.000 = Rp26.775
┃Gopay 30.000 = Rp31.790
┃Gopay 35.000 = Rp36.850
┃Gopay 40.000 = Rp41.790
┃Gopay 45.000 = Rp46.850
┃Gopay 50.000 = Rp51.895
┃Gopay 55.000 = Rp56.895
┃Gopay 60.000 = Rp61.875
┃Gopay 65.000 = Rp66.875
┃Gopay 70.000 = Rp71.875
┃Gopay 75.000 = Rp76.895
┃Gopay 80.000 = Rp81.875
┃Gopay 85.000 = Rp86.875
┃Gopay 90.000 = Rp91.875
┃Gopay 95.000 = Rp96.875
┃Gopay 100.000 = Rp101.790
┃Gopay 150.000 = Rp151.790
┃Gopay 200.000 = Rp201.790
┃Gopay 250.000 = Rp251.790
┃Gopay 500.000 = Rp501.800
┃Gopay 1.000.000 = Rp1.002.150
┗━━━━━━━━━━━━━━⬣
┃             *GOPAY DRIVER*
┏━━━━━━━━━━━━━━⬣
┃Gopay Driver 10.000 = Rp11.280
┃Gopay Driver 15.000 = Rp16.455
┃Gopay Driver 20.000 = Rp21.285
┃Gopay Driver 25.000 = Rp26.285
┃Gopay Driver 30.000 = Rp31.350
┃Gopay Driver 35.000 = Rp36.350
┃Gopay Driver 40.000 = Rp41.350
┃Gopay Driver 45.000 = Rp46.325
┃Gopay Driver 50.000 = Rp51.300
┃Gopay Driver 55.000 = Rp56.350
┃Gopay Driver 60.000 = Rp61.350
┃Gopay Driver 65.000 = Rp66.350
┃Gopay Driver 70.000 = Rp71.325
┃Gopay Driver 75.000 = Rp76.300
┃Gopay Driver 80.000 = Rp81.350
┃Gopay Driver 85.000 = Rp86.350
┃Gopay Driver 90.000 = Rp91.350
┃Gopay Driver 95.000 = Rp96.350
┃Gopay Driver 100.000 = Rp101.300
┃Gopay Driver 150.000 = Rp151.300
┃Gopay Driver 200.000 = Rp201.300
┃Gopay Driver 250.000 = Rp251.300
┃Gopay Driver 300.000 = Rp301.300
┃Gopay Driver 500.000 = Rp501.300
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Gopay
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'topupdana':
teks = `┏━━━━━━━━━━━━━━⬣
┃          「 🧊 *LIST DANA* 」
┃    「 💸* SALDO E-MONEY* 」
┃ 「 ✅*VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃Dana Rp10.000 = Rp11.275
┃Dana Rp15.000 = Rp16.240
┃Dana Rp20.000 = Rp21.280
┃Dana Rp25.000 = Rp26.245
┃Dana Rp30.000 = Rp31.255
┃Dana Rp40.000 = Rp41.295
┃Dana Rp50.000 = Rp51.295
┃Dana Rp60.000 = Rp61.255
┃Dana Rp70.000 = Rp71.375
┃Dana Rp75.000 = Rp76.255
┃Dana Rp80.000 = Rp81.375
┃Dana Rp90.000 = Rp91.375
┃Dana Rp100.000 = Rp101.255
┃Dana Rp150.000 = Rp151.255
┃Dana Rp200.000 = Rp201.255
┃Dana Rp25.000 = Rp251.255
┃Dana Rp300.000 = Rp301.255
┃Dana Rp400.000 = Rp401.255
┃Dana Rp500.000 = Rp501.255
┃Dana Rp800.000 = Rp801.255
┃Dana Rp900.000 = Rp901.535
┃Dana Rp1.000.000 = Rp1.000.2000
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Dana
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'topupovo':
teks = `┏━━━━━━━━━━━━━━⬣
┃           「 🍇 *LIST OVO* 」
┃    「 💸 *SALDO E-MONEY* 」
┃ 「 ✅ *VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃OVO 5.000 = Rp6.605
┃OVO 10.000 = Rp10.455
┃OVO 15.000 = Rp16.600
┃OVO 20.000 = Rp20.435
┃OVO 25.000 = Rp25.424
┃OVO 30.000 = Rp30.475
┃OVO 40.000 = Rp40.375
┃OVO 50.000 = Rp50.424
┃OVO 60.000 = Rp60.475
┃OVO 70.000 = Rp70.475
┃OVO 75.000 = Rp75.825
┃OVO 80.000 = Rp80.475
┃OVO 90.000 = Rp90.825
┃OVO 100.000 = Rp100.750
┃OVO 150.000 = Rp150.450
┃OVO 200.000 = Rp200.450
┃OVO 250.000 = Rp250.425
┃OVO 300.000 = Rp300.425
┃OVO 400.000 = Rp400.425
┃OVO 500.000 = Rp500.425
┃OVO 600.000 = Rp600.425
┃OVO 700.000 = Rp701.150
┃OVO 800.000 = Rp801.150
┃OVO 900.000 = Rp901.150
┃OVO 1.000.000 = Rp1.000.1150
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Ovo
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'shoppe':
teks = `┏━━━━━━━━━━━━━━⬣
┃    「 🍊 *LIST SHOPEEPAY* 」
┃    「 💸* SALDO E-MONEY* 」
┃ 「 ✅*VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃Shopeepay 10.000 = Rp11.400
┃Shopeepay 14.500 = Rp16.535
┃Shopeepay 15.000 = Rp16.360
┃Shopeepay 20.000 = Rp21.350
┃Shopeepay 25.000 = Rp26.285
┃Shopeepay 30.000 = Rp31.375
┃Shopeepay 35.000 = Rp36.315
┃Shopeepay 40.000 = Rp41.345
┃Shopeepay 45.000 = Rp46.315
┃Shopeepay 50.000 = Rp51.450
┃Shopeepay 55.000 = Rp56.315
┃Shopeepay 60.000 = Rp61.550
┃Shopeepay 65.000 = Rp66.315
┃Shopeepay 70.000 = Rp71.550
┃Shopeepay 75.000 = Rp76.550
┃Shopeepay 80.000 = Rp81.315
┃Shopeepay 85.000 = Rp86.315
┃Shopeepay 90.000 = Rp91.345
┃Shopeepay 95.000 = Rp96.315
┃Shopeepay 100.000 = Rp101.550
┃Shopeepay 150.000 = Rp151.345
┃Shopeepay 200.000 = Rp201.345
┃Shopeepay 250.000 = Rp251.350
┃Shopeepay 300.000 = Rp301.450
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Shopeepay
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'bribrizzi':
teks = `┏━━━━━━━━━━━━━━⬣
┃     「 🫐 *LIST BRI BRIZZI*  」
┃    「 💸* SALDO E-MONEY* 」
┃       「 ✅*VIA NO KARTU* 」
┗━━━━━━━━━━━━━━⬣
┃Brizzi 20.000 = Rp21.875
┃Brizzi 50.000 = Rp51.710
┃Brizzi 100.000 = Rp101.710
┃Brizzi 200.000 = Rp201.600
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : BRI Brizzi
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'doku':
teks = `┏━━━━━━━━━━━━━━⬣
┃          「 🍒 *LIST DOKU* 」
┃    「 💸* SALDO E-MONEY* 」
┃         「 ✅*VIA DOKU ID* 」
┗━━━━━━━━━━━━━━⬣
┃Doku 55.000 = Rp56.800
┃Doku 65.000 = Rp66.800
┃Doku 85.000 = Rp86.800
┃Doku 95.000 = Rp96.800
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Doku
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'grab':
teks = `┏━━━━━━━━━━━━━━⬣
┃          「 🫑 *LIST GRAB* 」
┃    「 💸* SALDO E-MONEY* 」
┃ 「 ✅*VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃            *GRAB CUSTOMER*
┗━━━━━━━━━━━━━━⬣
┃Grab Customer 20.000 = Rp21.095
┃Grab Customer 25.000 = Rp26.095
┃Grab Customer 40.000 = Rp41.115
┃Grab Customer 50.000 = Rp51.115
┃Grab Customer 75.000 = Rp76.115
┃Grab Customer 100.000 = Rp101.425
┃Grab Customer 150.000 = Rp151.995
┃Grab Customer 200.000 = Rp201.995
┗━━━━━━━━━━━━━━⬣
┃               *GRAB DRIVER*
┗━━━━━━━━━━━━━━⬣
┃Grab Driver 50.000 = Rp51.920
┃Grab Driver 100.000 = Rp101.115
┃Grab Driver 150.000 = Rp151.350
┃Grab Driver 200.000 = Rp201.350
┃Grab Driver 250.000 = Rp251.350
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Grab
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'linkaja':
teks = `┏━━━━━━━━━━━━━━⬣
┃       「 🍎 *LIST LINK AJA* 」
┃    「 💸* SALDO E-MONEY* 」
┃ 「 ✅*VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃Link Aja Rp10.000 = Rp11.250
┃Link Aja Rp15.000 = Rp16.375
┃Link Aja Rp20.000 = Rp21.240
┃Link Aja Rp25.000 = Rp26.240
┃Link Aja Rp30.000 = Rp31.290
┃Link Aja Rp40.000 = Rp41.255
┃Link Aja Rp50.000 = Rp51.290
┃Link Aja Rp60.000 = Rp61.290
┃Link Aja Rp70.000 = Rp71.255
┃Link Aja Rp80.000 = Rp80.255
┃Link Aja Rp90.000 = Rp91.290
┃Link Aja Rp100.000 = Rp101.290
┃Link Aja Rp150.000 = Rp151.300
┃Link Aja Rp200.000 = Rp201.290
┃Link Aja Rp250.000 = Rp251.850
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Link Aja
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'maxim':
teks = `┏━━━━━━━━━━━━━━⬣
┃        「 🍎 *LIST MAXIM* 」
┃    「 💸* SALDO E-MONEY* 」
┃ 「 ✅*VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃Maxim Driver 10.000 = Rp11.800
┃Maxim Driver 15.000 = Rp16.800
┃Maxim Driver 20.000 = Rp22.000
┃Maxim Driver 25.000 = Rp26.800
┃Maxim Driver 30.000 = Rp31.800
┃Maxim Driver 35.000 = Rp36.800
┃Maxim Driver 40.000 = Rp41.800
┃Maxim Driver 45.000 = Rp46.800
┃Maxim Driver 50.000 = Rp51.800
┃Maxim Driver 60.000 = Rp61.800
┃Maxim Driver 70.000 = Rp71.800
┃Maxim Driver 80.000 = Rp81.800
┃Maxim Driver 90.000 = Rp91.800
┃Maxim Driver 100.000 = Rp101.800
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Maxim Driver
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'mandiri':
teks = `┏━━━━━━━━━━━━━━⬣
┃「 🍋 *LIST MANDIRI E-TOLL* 」
┃    「 💸* SALDO E-MONEY* 」
┃     「 ✅*VIA MANDIRI PIN* 」
┗━━━━━━━━━━━━━━⬣
┃Mandiri E-Toll 10.000 = Rp12.075
┃Mandiri E-Toll 20.000 = Rp21.700
┃Mandiri E-Toll 25.000 = Rp26.700
┃Mandiri E-Toll 30.000 = Rp32.175
┃Mandiri E-Toll 40.000 = Rp42.175
┃Mandiri E-Toll 50.000 = Rp51.700
┃Mandiri E-Toll 75.000 = Rp76.700
┃Mandiri E-Toll 100.000 = Rp101.700
┃Mandiri E-Toll 150.000 = Rp152.150
┃Mandiri E-Toll 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Mandiri E-Toll
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'bni':
teks = `┏━━━━━━━━━━━━━━⬣
┃   「 🍑 *LIST TAPCASH BNI* 」
┃    「 💸* SALDO E-MONEY* 」
┃       「 ✅*VIA NO KARTU* 」
┗━━━━━━━━━━━━━━⬣
┃Tapcash BNI 10.000 = Rp11.700
┃Tapcash BNI 20.000 = Rp21.700
┃Tapcash BNI 50.000 = Rp51.700
┃Tapcash BNI 100.000 = Rp101.700
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Tapcash BNI
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'tixid':
teks = `┏━━━━━━━━━━━━━━⬣
┃          「 🍑 *LIST TIX ID* 」
┃    「 💸* SALDO E-MONEY* 」
┃ 「 ✅*VIA NO HANDPHONE* 」
┗━━━━━━━━━━━━━━⬣
┃TIX ID 10.000 = Rp12.105
┃TIX ID 25.000 = Rp27.010
┃TIX ID 50.000 = Rp52.025
┃TIX ID 100.000 = Rp101.700
┃TIX ID 200.000 = Rp201.700
┗━━━━━━━━━━━━━━⬣
┃📝 *FORMAT ORDER*
┃Kategori : Tix ID
┃Order :
┃Nomor Tujuan :
┃
┃📢 Contact admin
┃📞 Melvie : wa.me/6281212303462
┃📞 Bintang : wa.me/6281212303461
┗━━━━━━━━━━━━━━⬣
┏━━⬣「 🗒*NOTE * 」━━━━━━⬣
┃*JIKA ADA KESALAHAN NOMOR* ┃*ATAU PESANAN ATAS KESALAHAN*
┃*BUYER MAKA 100% BUKAN*
┃*TANGGUNG JAWAB ADMIN*
┗━━━━━━━━━━━━━━━━⬣`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `topupsaldo`, buttonText: { displayText: 'Back' }, type: 1 },{ buttonId: `payment`, buttonText: { displayText: 'Pay' }, type: 1}]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
case 'p': 
case 'y':
        if (!isGroup) return reply(mess.only.group)       
			if (!isGroupAdmins) return reply(mess.only.admin)
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return freply("Reply Orderan");
        mentioned = mek.message.extendedTextMessage.contextInfo.participant;       
        teks = `O━•••• *PESANAN DI PROSES* ••••━O 

\`\`\`📅 TANGGAL  : ${tanggal}/${bulan}/${tahun}\`\`\`
\`\`\`⌚ JAM      : ${jam}\`\`\`
\`\`\`⏳ STATUS   : Proses 🔄\`\`\` 


Pesanan @${mentioned.split("@")[0]} Sedang di Proses !
    
              *MOHON DI TUNGGU !*        ━O━O━••••••••••••••••••••••••••━O━O━`;
        Ramdani.sendMessage(from, teks, text, {
          quoted: troli,
          contextInfo: { mentionedJid: [mentioned] },
        });
        break;
        case  'd': 
        case 'done':
        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return freply("Reply Orderan");
        mentioned = mek.message.extendedTextMessage.contextInfo.participant;       
        teks = `O━•••••• *PESANAN SUKSES* ••••••━O

\`\`\`📅 TANGGAL  : ${tanggal}/${bulan}/${tahun}\`\`\`
\`\`\`⌚ JAM      : ${jam}\`\`\`
\`\`\`⏳ STATUS   : Sukses ✅\`\`\` 

*TERIMA KASIH TELAH ORDER*
@${mentioned.split("@")[0]} 🙏
 
                  *IG @mballstore*        ━O━O━••••••••••••••••••••••••••━O━O━`;
        Ramdani.sendMessage(from, teks, text, {
          quoted: troli,
          contextInfo: { mentionedJid: [mentioned] },
        });
        break;
case 'downloadmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Download Menu_
❏ #play <query>
❏ #ytmp3 <link>
❏ #ytmp4 <link>
❏ #tiktok <link>
❏ #tiktoknowm <link>
❏ #tiktokmusic <link>
❏ #pinterest <query>`)
break
case 'asupanmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, asupanmenu(gayamenu, prefix), MessageType.text, {quoted: troli})
break
case 'cecanmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, cecanmenu(gayamenu, prefix), MessageType.text, {quoted: troli})
break
case 'nsfwmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Nsfw Menu_
❏ #hentai
❏ #art
❏ #bts
❏ #exo
❏ #elf
❏ #loli
❏ #neko
❏ #waifu
❏ #shota
❏ #husbu
❏ #sagiri
❏ #shinobu
❏ #megumin
❏ #wallnime`)
break
case 'stickermenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Sticker Menu_
❏ #ttp <text>
❏ #attp <text>
❏ #sticker <reply stick>
❏ #stickgif <reply gif>
❏ #toimg <reply stick>`)
break
case 'kodemenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Kode Menu_
❏ #kodenegara <country>
❏ #kodebahasa <sountry>`)

break
case 'vnmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, vnmenu(gayamenu, prefix), MessageType.text, {quoted: troli})
break
case 'convertermenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Convert Menu_
❏ #tourl <reply img/video>
❏ #imagetourl <reply img>
❏ #videotourl <reply vid>
❏ #toimg <reply stick>
❏ #tomp3 <reply vn>
❏ #tovideo <reply stick>
❏ #togif <reply stick>`)
break
case 'toolsmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
Ramdani.sendMessage(from, toolsmenu(gayamenu, prefix), MessageType.text, {quoted: troli})
break
case 'hiburanmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Hiburan Menu_
❏ #cekwatak
❏ #cekmati <nama>
❏ #wangy <nama>
❏ #citacita
❏ #toxic
❏ #truth
❏ #dare
❏ #apakah
❏ #bisakah
❏ #kapankah
❏ #rate
❏ #jadian
❏ #cantik
❏ #ganteng
❏ #beban
❏ #babi
❏ #cekganteng
❏ #cekcantik`)
break
case 'groupmenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Group Menu_
❏ #afk <alasan>
❏ #ceksewa
❏ #kickall
❏ #infogrup
❏ #promote
❏ #demote
❏ #listonline
❏ #tagall <text>
❏ #leave
❏ #kick <reply>
❏ #add <+62xxxxxx>
❏ #setnamegc
❏ #setppgc
❏ #setdeskgc
❏ #sider <reply chat bot>
❏ #hidetag <text/reply text>
❏ #linkgc`)
break
case 'ownermenu':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`_Owner Menu_
❏ #broadcast <text>            
❏ #public 
❏ #self
❏ #setppbot <reply img>
❏ #banned <user>
❏ #unbanned <user>
❏ #delete 
❏ #clearall 
❏ #exif <pack | author>
❏ #join <url>
❏ #leaveall 
❏ #eval <text>
❏ #start 
❏ #restart`)
break
case 'storemenu':
freply(` _Store Menu_
❏ #rules           
❏ #payment
❏ #mla
❏ #mlb
❏ #mlc
❏ #mlslow
❏ #vlog
❏ #promo
❏ #ff
❏ #pubga
❏ #pubgb`)
break
case 'donasi':
case 'donate':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
teks = `╔════════════════════
║   \`\`\`⚔️DONASI UPDATE⚔️\`\`\`
║ \`\`\`UNTUK FITURE BOT V.1.0.2\`\`\`
╠════════════════════
║  *GOPAY 💵* : 081212303462
║  *DANA 💶* : 081212303461
║  *OVO 💷* : 081212303461
║  *SHOPEE 💴* : 081212303462
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*2022 © MB STORE BT.V.1.0.1*_
╚════════════════════`
img = fs.readFileSync(`./media/picture/qris.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `menu`, buttonText: { displayText: 'Back' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})
//CHECKNICKGAME//
break
case 'nickml':
                var args1 = q.split("/")[0]
                var args2 = q.split("/")[1]                
                if (!q.includes("/")) return freply(`Gunakan dengan cara ${prefix}nickml *id/server*\n\n_Contoh_\n\n${prefix}nickml 123456789/1234`)
             axios.get(`https://api.lolhuman.xyz/api/mobilelegend/${args1}/${args2}?apikey=${lolhuman}`)
             .then(({data}) => {
             let emel = `*CHECK NICK MOBILE LEGENDS*

ID : ${args1}
Server : ${args2}
Nick : ${data.result}`
freply(emel)
                  })
                    .catch((err) => {
                        freply('Error')
                    })
                    break
case 'nickff':
                var args1 = q.split("")[1]            
             axios.get(`https://api.lolhuman.xyz/api/freefire/${args}?apikey=${lolhuman}`)
             .then(({data}) => {
             let ff = `*CHECK NICK FREEFIRE*

ID : ${args}
Nick : ${data.result}`
freply(ff)
                  })
                    .catch((err) => {
                        freply('Gunakan dengan cara .nickff *ID*\n\n_Contoh_\n\n#nickff 123456789')
                    })
break
//INSTAGRAM
case 'intagram':
case 'ig':
case 'ige':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(` *Nih Instagram Kami Jangan Lupa Follow Ya*\nhttps://instagram.com/mballstore`)
break
//OWNER/CREATOR
//OWNER
case 'owner':
case 'ownerbot': 
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  Ramdani.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Hallo kak, itu owner ku, jangan di ganggu ya\nbtw mau tau soal apa tentang owner ku?'
           sendButMessage(from, titid, `${wmtext}\n${Tanggal}`, [
          {buttonId: `ytb`, buttonText: { displayText: `YOUTUBE`, }, type: 1, },
          {buttonId: `ig`, buttonText: { displayText: `INSTAGRAM`, }, type: 1, },
]); 
                 break;
//INFO MENU
case 'tes':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(`Online`)
break
case 'f':
jawab_nye = `_Main Ep Ep Bang?_`
Ramdani.sendMessage(from, jawab_nye, MessageType.text, { quoted: troli })
break
case 'runtime':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
freply(mess.wait)
teks = `*Bot Aktif Selama ${runtime(process.uptime())}*`
img = fs.readFileSync(`./media/picture/${randompoto}.jpg`)
footer = `${wmtext}`
but = [{ buttonId: `menu`, buttonText: { displayText: 'Menu' }, type: 1 },{ buttonId: `donasi`, buttonText: { displayText: 'Donasi' }, type: 1 }]
sendButImage(from, teks, footer, img, but, {quoted: troli})
break
      case 'ping':
      case 'speed': 
       if (!isRegister) return freply(mess.regist)
       if (isBanned) return freply(mess.banned)
              timestampe = speed();
              latensie = speed() - timestampe
              freply(` *MBSTORE BOT* \nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)
              break
      case 'botstat': 
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              groups = Ramdani.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = Ramdani.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await Ramdani.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`• Group Chats : ${groups.length}\`\`\`
\`\`\`• Private Chats : ${privat.length}\`\`\`
\`\`\`• Total Chats : ${totalChat.length}\`\`\`
\`\`\`• Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`• Active Time : ${runtime(process.uptime())}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`• Baterai : ${baterai}% ${charger}\`\`\`
\`\`\`• Ram Usage : ${ram2}\`\`\`
\`\`\`• Platform : ${os.platform()}\`\`\`
\`\`\`• Hostname : ${os.hostname()}\`\`\`
\`\`\`• Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`• Wa Version: ${Ramdani.user.phone.wa_version}\`\`\`
\`\`\`• Os Version: ${Ramdani.user.phone.os_version}\`\`\`
\`\`\`• Device Manufacturer: ${Ramdani.user.phone.device_manufacturer}\`\`\`
\`\`\`• Device Model: ${Ramdani.user.phone.device_model}\`\`\`
\`\`\`• Os Build Number: ${Ramdani.user.phone.os_build_number}\`\`\``
             freply(teks)
             break
//DOWNLOAD MENU
case 'play':
case 'playmp3':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply('Apa Yang Mau Dicari?')
teks = args.join(' ')
freply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
freply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
freply(`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAY*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${res.all[0].title}\`\`\`
\`\`\`• Type : MP3\`\`\`
\`\`\`• View : ${res.all[0].views}\`\`\`
\`\`\`• Link : https://youtu.be/${res.all[0].videoId}\`\`\`
\`\`\`• Size : 1MB\`\`\`
\`\`\`• Quality : 1080P\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`)
res = await y2mateA(res.all[0].url).catch(e => {
freply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
break
case 'ytmp3':
            if (!isRegister) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
            if (args.length < 1) return freply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return freply(mess.error.link)
            teks = args.join(' ')
            freply(mess.wait)
            res = await y2mateA(teks).catch(e => {
            freply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${res[0].judul}\`\`\`
\`\`\`• Type : MP3\`\`\`
\`\`\`• Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
})
break
     case 'ytmp4':
            if (!isRegister) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
            if (args.length < 1) return freply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return freply(mess.error.link)
            teks = args.join(' ')
            freply(mess.wait)
            res = await y2mateV(teks).catch(e => {
            freply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`• Title : ${res[0].judul}\`\`\`
\`\`\`• Type : MP4\`\`\`
\`\`\`• Size : ${res[0].size}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
break
case 'tiktok': 
case 'ttdl':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!q.includes('tiktok')) return freply(mess.error.link)
             freply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { freply(String(err)) })
             break
      case 'ttnowm': 
      case 'tiktoknowm':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!q) return freply('Linknya?')
             if (!q.includes('tiktok')) return freply(mess.error.link)
             freply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { freply(String(err)) })
             break
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (args.length == 0) return freply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolhumanapi}&url=${ini_link}`)
             Ramdani.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
case 'ttaudio2':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned) 
             if (args.length == 0) return freply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`http://hadi-api.herokuapp.com/api/tiktok?url=${ini_link}`)
             Ramdani.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
case 'pinterest':
            if (!isRegister) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
            if(!q) return freply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Ramdani.sendMessage(from,di,image,{quoted: troli, caption: `${done}`})
            break

//ASUPAN MENU
				case 'asupan1':
                if (!isRegister) return freply(mess.regist)
                if (isDewasa) return freply(mess.dewasa)
                if (isBanned) return freply(mess.banned)
			    Ramdani.updatePresence(from, Presence.composing) 
				freply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				danzKey = jsonData[randIndex];
				asupan = await getBuffer(danzKey.result)
				Ramdani.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break        
                case 'asupan2':
                if (!isRegister) return freply(mess.regist)
                if (isDewasa) return freply(mess.dewasa)
                if (isBanned) return freply(mess.banned)
			    Ramdani.updatePresence(from, Presence.composing) 
				freply(mess.wait)
				data = fs.readFileSync('./lib/asupan2.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				danzKey = jsonData[randIndex];
				asupan = await getBuffer(danzKey.result)
				Ramdani.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				break 
              case 'ukhty':
              if (!isRegister) return freply(mess.regist)              
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const ukhty = await getBuffer(`https://api-ramdaniofficial-docs.herokuapp.com/api/asupan/ukhty?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `ukhty`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(ukhty, "videoMessage", { thumbnail: ukhty, })).videoMessage
              buttonsMessage = {footerText:`${wmreply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli })
              Ramdani.relayWAMessage(prep)
              break
              case 'santuy':
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const santuy = await getBuffer(`https://api-ramdaniofficial-docs.herokuapp.com/api/asupan/santuy?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `santuy`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(santuy, "videoMessage", { thumbnail: santuy, })).videoMessage
              buttonsMessage = {footerText:`${wmreply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli })
              Ramdani.relayWAMessage(prep)
              break
              case 'bocil':
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const bocil = await getBuffer(`https://api-ramdaniofficial-docs.herokuapp.com/api/asupan/bocil?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `bocil`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(bocil, "videoMessage", { thumbnail: bocil, })).videoMessage
              buttonsMessage = {footerText:`${wmreply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli })
              Ramdani.relayWAMessage(prep)
              break
              case 'hijaber':
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)              
              freply(mess.wait)
              const hijaber = await getBuffer(`https://api-ramdaniofficial-docs.herokuapp.com/api/asupan/hijaber?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `hijaber`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(hijaber, "videoMessage", { thumbnail: hijaber, })).videoMessage
              buttonsMessage = {footerText:`${wmreply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli })
              Ramdani.relayWAMessage(prep)
              break
              case 'gheayuby':
			  case 'geayubi':              
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const geayubi = await getBuffer(`https://api-ramdaniofficial-docs.herokuapp.com/api/asupan/gheayubi?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `caca`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(geayubi, "videoMessage", { thumbnail: geayubi, })).videoMessage
              buttonsMessage = {footerText:`${wmreply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli })
              Ramdani.relayWAMessage(prep)
              break
              case 'rikagusriani':              
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              freply(mess.wait)
              const naura = await getBuffer(`https://api-ramdaniofficial-docs.herokuapp.com/api/asupan/rikagusriani?apikey=${ramdaniapi}`)
              buttons = [{buttonId: `aura`,buttonText:{displayText: `➡️ NEXT`},type:1}]
              videoMsg = (await Ramdani.prepareMessageMedia(naura, "videoMessage", { thumbnail: naura, })).videoMessage
              buttonsMessage = {footerText:`${wmreply}`, videoMessage: videoMsg,
              contentText:`DONE`,buttons,headerType:5}
              prep = await Ramdani.prepareMessageFromContent(from,{buttonsMessage},{quoted: troli })
              Ramdani.relayWAMessage(prep)
              break
//CECAN MENU
case 'randomcecan':
case 'cecan':
                if (!isRegister) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                getBuffer(`http://hadi-api.herokuapp.com/api/randomImage/cecan`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek, caption : `${done}`})
                })
                break
//NSFW MENU
case 'art':
                case 'bts':
                case 'exo':
                case 'elf':
                case 'loli':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                if (!isRegister) return freply(mess.daftar)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolhumanapi}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek, caption : `${done}`})
                })
                break
                case 'hentai':
                case 'randomhentai':
                if (!isRegister) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek, caption : `${done}`})
                })
                break                               
                case 'blowjob':
                if (!isRegister) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                await getBuffer(`https://api.lolhuman.xyz/api/random2/blowjob?apikey=${lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek, caption : `${done}`})
                })
                break
                               break
                case 'cum':
                case 'randomcum':
                if (!isRegister) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                await getBuffer(`https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=${lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek, caption : `${done}`})
                })
                break
                case 'pussy':
                case 'randompussy':
                if (!isRegister) return freply(mess.regist)
                if (isBanned) return freply(mess.banned)
                freply(mess.wait)
                await getBuffer(`https://api.lolhuman.xyz/api/random2/pussy?apikey=${lolhuman}`).then((gambar) => {
                Ramdani.sendMessage(from, gambar, image, { quoted: mek, caption : `${done}`})
                })
                break
//STICKER MENU
          case 'ttp':  
          if (!isRegister) return freply(mess.regist)
          if (isBanned) return freply(mess.banned)
          if (!c) return freply(`Teks Nya Mana Kak?\nContoh :\nttp Ramdani botz Whatsapp`)
          anuu = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
          Ramdani.sendMessage(from, anuu, image, {quoted: mek, caption : `sticker`})
          break
          case 'attp':
          if (!isRegister) return freply(mess.regist)
          if (isBanned) return freply(mess.banned)
          if (args.length == 0) return freply(`Example: ${prefix + command} Hai`)
          buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
          Ramdani.sendMessage(from, buffer, sticker, { quoted: mek })
          
          break
          case 'toimg':
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isQuotedSticker) return freply('reply stickernya')
              freply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return freply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              Ramdani.sendMessage(from, buffer, image, {quoted: mek, caption: `${done}`})
              fs.unlinkSync(ran)
})
            break
            case 'gifstiker':
			case 's':
			case 'stickergif':  
			case 'sticker':
			case 'stiker':
            if (!isRegister) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
            ran = '666.webp'
            await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
             })
                .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                freply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            freply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            freply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Ramdani.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                freply(`Kirim gambar dengan caption sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
//KODE MENU
case 'kodebahasa':
                    if (!isRegister) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
                    Ramdani.sendMessage(from, bahasa(), text, { quoted:troli })
                    break 
                    case 'kodenegara':
                    if (!isRegister) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
					Ramdani.sendMessage(from, negara(), text)
					break

//VN MENU
                    case 'tts':
                    if (!isRegister) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
				    if (args.length < 1) return Ramdani.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return Ramdani.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? freply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
					exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return freply(ind.stikga())
							Ramdani.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
//CONVERTER MENU
case 'imagetourl':
case 'imgtourl':
case 'videotourl':
case 'vidtourl':
case 'tourl':
               if (!isRegister) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               freply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await Ramdani.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               freply(res)
               } else {
               freply('_kirim : reply gambar/video_')
}
               break
//TOOLS MENU
case 'ssweb':
case 'ssurl':
case 'sslink':
case 'ss':
if (!isRegister) return freply(mess.regist)
if (isBanned) return freply(mess.banned)
if (args.length < 1) return freply('Urlnya nya mana om')
teks = q
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buffungu = await getBuffer(anu.screenshot)
Ramdani.sendMessage(from, buffungu, image, {quoted: troli, caption : teks})
break
case 'togif':
               if (!isRegister) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               freply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Ramdani.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Ramdani.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               freply(mess.error.format)
}
               break
        case 'tovideo':
               if (!isRegister) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               freply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await Ramdani.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               Ramdani.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               freply(mess.error.format)
}
               break
        case 'tomp3':
               if (!isRegister) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (isQuotedVideo || isQuotedAudio){
               freply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await Ramdani.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return freply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               Ramdani.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               freply(mess.error.format)
}
               break

//HIBURAN MENU
case 'wangy':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!q) return
              qq = q.toUpperCase()
              makasih = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              freply(makasih)
              break
       case 'waktu':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              freply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'cekmati':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!q) return freply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              freply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'toxic':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              Toxic().then(toxic => {
              freply(toxic)
})
              break
        case 'citacita':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
              const cita3 = cita[Math.floor(Math.random() * cita.length)]
              cita2 = await getBuffer(cita3)
              Ramdani.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: mek})
              break
       case 'apakah':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              var namao = pushname
              var prfx = await Ramdani.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await freply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              Ramdani.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
       case 'bisakah':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              Ramdani.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
       case 'truth':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Ramdani.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
       case 'dare':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              Ramdani.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break		
       case 'jadian':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break

//GROUP MENU
case 'afk':  
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (isAfkOn) return freply('_Katanye Afk?_')
              const alasan = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, alasan, _afk)
              const repli_nye = `*⌜ AFK ON ⌟*\n\n${gayamenu} *Username*: ${pushname}\n${gayamenu} *Alasan*: ${alasan}`
              freply(repli_nye)
              break
case 'linkgroup':
case 'linkgrup':
case 'linkgc':
            if (!isRegister) return freply(mess.regist)
            if (isBanned) return freply(mess.banned)
			if (!isGroup) return freply(mess.only.group)
			link_nya = await Ramdani.groupInviteCode (from)
			reply_nya = `*Link Group : *${groupName}*\nhttps://chat.whatsapp.com/${link_nya}`
			Ramdani.sendMessage(from, reply_nya, text, {quoted: troli})
			break
            case 'add':
				    if (!isRegister) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
			        if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						Ramdani.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
				    if (!isRegister) return freply(mess.regist)
                    if (isBanned) return freply(mess.banned)
			        if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						Ramdani.groupRemove(from, mentioned)
					}
					break
      case 'promote': 
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             freply('Anjay naik jabatan:v')
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Ramdani.groupMakeAdmin(from, mems_ids)
             } else {
             Ramdani.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupMakeAdmin(from, [entah])
}
             break
      case 'demote': 
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             freply('Kasian turun jabatan:v')
             if (!isGroupAdmins) return freply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             Ramdani.groupDemoteAdmin(from, mems_ids)
             } else {
             Ramdani.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             Ramdani.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname': 
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return freply(`Penggunaan ${prefix}setgrupname name`)
              Ramdani.groupUpdateSubject(from, q)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              break
       case 'setdesgc': 
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (args.length == 0)  return freply(`Penggunaan ${prefix}setdesc desc`)
              Ramdani.groupUpdateDescription(from, q)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              break
       case 'setppgrup': 
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              if (!isBotGroupAdmins) return freply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Ramdani.downloadMediaMessage(encmedia)
              Ramdani.updateProfilePicture(from, media)
             .then((res) => freply(jsonformat(res)))
             .catch((err) => freply(jsonformat(err)))
              } else {
              freply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile': 
             if (isBanned) return freply(mess.banned)
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              Ramdani.updatePresence(from, Presence.composing)
              try {
              profil = await Ramdani.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await Ramdani.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = Ramdani.user
              uptime = process.uptime()
              profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              Ramdani.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              
              break
       case 'infogrup':
       case 'grupinfo':
       case 'groupinfo': 
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroup) return freply(mess.only.group)
              try {
              var pic = await Ramdani.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P  I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelcome ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              Ramdani.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall': 
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall':
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave': 
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroupAdmins) return freply(mess.only.admin)
              if (!isGroup) return freply(mess.only.group)
              setTimeout( () => {
              Ramdani.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              freply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroup) return freply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ramdani.chats.get(ido).presences), Ramdani.user.jid]
             Ramdani.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             freply(`${e}`)
}
             break
      case 'hidetag': 
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider': 
             if (!isRegister) return freply(mess.regist)
             if (isBanned) return freply(mess.banned)
             if (!isGroupAdmins) return freply(mess.only.admin)
             if(!isGroup) return freply(mess.only.group)
             try {
             infom = await Ramdani.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             freply('Reply chat bot!')
}
             break
//GROUP SETTING
case 'leveling':
              if (!isRegister) return freply(mess.regist)
              if (isBanned) return freply(mess.banned)
              if (!isGroup) return freply(mess.only.group)
              if (ar[0] === 'enable') {
              if (isLevelingOn) return freply('Fitur leveling telah diaktifkan sebelumnya.')
              _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              freply('Fitur leveling berhasil diaktifkan.')
              } else if (ar[0] === 'disable') {
              var anup = _leveling.indexOf(from)
              _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              freply('Fitur leveling berhasil dimatikan.')
              } else {
              freply('Pilih enable atau disable!')
}
              break
case 'antilink':
if (!isGroup) return freply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return freply(mess.only.admin)
if (!isBotGroupAdmins) return freply(mess.only.Badmin)
if (!q) return freply(`Pilih Enable atau Disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return freply(`Sudah Aktif`)
_antilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
freply(`\`\`\`Antilink Enable ⛔\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'disable'){
let anu = _antilink.indexOf(from)
_antilink.splice(anu, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(_antilink))
freply(`\`\`\`Antilink Disable 🚫 \`\`\` *${groupMetadata.subject}*`)
} else {
freply(`_Pilih Enable atau Disable_`)

}
              break
       case 'welcome':
               if (!isRegister) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (!isGroupAdmins) return freply(mess.only.admin)
               if (!isGroup) return freply(mess.only.group)
               if (args.length < 1) return freply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelcome) return freply('Udah aktif')
               _welcome.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
               freply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               _welcome.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(_welcome))
               freply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               freply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
        case 'mute':
               if (!isRegister) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isGroupAdmins) return freply(mess.only.admin)
               if (args.length < 1) return freply('!mute enable/disable')
               if (args[0].toLowerCase() === 'enable'){
               if (isMuted) return freply(`udah di mute`)
               _mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(_mute))
               freply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${namabot}*_`)
               } else if (args[0].toLowerCase() === 'disable'){
               anu = _mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(_mute))
               freply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${namabot}*_`)
               } else {
               freply(`Pilih enable atau disable`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
               if (!isRegister) return freply(mess.regist)
               if (isBanned) return freply(mess.banned)
               if (!isGroup) return freply(mess.only.group)
               if (!isGroupAdmins) return freply(mess.only.admin)
               list = []
               com = [`group tutup`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]
               comm = [`group close`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]
               listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]
               suruh = [`Enable`, `Disable`]
               fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nMengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\nMenonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)
        
             break
 		case 'group':
              if (isBanned) return freply(mess.banned)
					if (!isGroup) return freply(mess.only.group)
					if (!isGroupAdmins) return freply(mess.only.admin)
					if (!isBotGroupAdmins) return freply(mess.only.Badmin)
					if (args[0] === 'open') {
					    freply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`)
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						freply(`*GROUP BERHASIL DI TUTUP OLEH ADMIN ${pushname}*`)
						Ramdani.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
//OWNER MENU
case 'bc':
case 'broadcast':
case 'bctext':
case 'broadcasttext':
                    if (!isOwner) return  freply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					anu = await Ramdani.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Ramdani.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Ramdani.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             freply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
			"footerText": '© By MB Offical',
			"buttons": [
			{"buttonId": `${prefix}verify`,
			"buttonText": {"displayText": "VERIFY"
			},"type": "RESPONSE"},
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             freply('Suksess broadcast')}
        break
case 'bcimg':
case 'broadcastimage':
             if (!isOwner) return  freply(mess.only.ownerB)
             if (args.length < 1) return reply('teks?')
             anu100 = await Ramdani.chats.all()
             if (isMedia && !Ramdani.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ramdani).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ramdani
             bc100 = await Ramdani.downloadMediaMessage(encmedia)
             for (let _ of anu100) {
             Ramdani.sendMessage(_.jid, bc100, image, {quoted: mek, caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             freply('Suksess broadcast')
             } else {
             for (let _ of anu100) {
             Ramdani.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
			"footerText": '© By MB Official',
			"buttons": [
			{"buttonId": `${prefix}verify`,
			"buttonText": {"displayText": "VERIFY"
			},"type": "RESPONSE"},
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: thumb,
			}}, MessageType.buttonsMessage )
}
             freply('Suksess broadcast')
}
break
case 'public':
if (!isOwner) return freply(mess.only.ownerB)
publik = true
freply('*Sukses mengubah mode public*')
break
case 'self':
if (!isOwner) return freply(mess.only.ownerB)
publik = false
freply('*Sukses mengubah mode self*')
break
case 'setppbot': 
                    if (!isOwner) return freply(mess.only.ownerb)
					Ramdani.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return freply(`Kirim gambar dengan caption setppbot atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Ramdani.downloadAndSaveMediaMessage(enmedia)
					await Ramdani.updateProfilePicture(botNumber, media)
					freply(mess.wait)
					freply(`_Successfully Changed Profile Photo_`)
					break 
                    case 'ban':
                    case 'banned':
					if (!isOwner) return freply(mess.only.ownerB)
					bennet = body.slice(6)
					_banned.push(`${bennet}`)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(_banned))
					freply(`Username ${bennet} udah dibanned !`)
	                break
                    case 'unban':
                    case 'unbanned':
					if (!isOwner) return freply(mess.only.ownerB)
					bennet = body.slice(8)
					_banned.splice(`${bennet}`, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(_banned))
					freply(`Username ${bennet} udah di unban!`)
		break
        case 'd':
        case 'del':
        case 'delete':
        if (!isOwner) return freply(mess.only.ownerB)
		Ramdani.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
		break
case 'clearall':
				    if (!isOwner) return reply(mess.only.ownerB)
					anu = await Ramdani.chats.all()
					Ramdani.setMaxListeners(25)
					for (let _ of anu) {
						Ramdani.deleteChat(_.jid)
					}
					break
             case 'exif': 
             if (!isOwner) return  freply(mess.only.ownerB)
             if (!q) return freply(mess.format)
             if (!arg.split('|')) return freply(`Penggunaan exif nama|author`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             freply('sukses')
             break      
      break
          case 'join':
              if (!isOwner) return  freply(mess.only.ownerB)
              if (args.length < 1) return reply(`Kirim perintah *join* link grup`)
              if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.link)
              code = args[0].replace('https://chat.whatsapp.com/', '')
              Ramdani.acceptInvite(code)
             .then((res) => {
              Ramdani.sendMessage(res.gid,`*Halo saya Bot 👋*\nSaya di invit oleh ${pushname} Ketik menu untuk melihat menu`,text,{contextInfo:{mentionedJid:[sender]} })
              freply('Berhasil Masuk Grup')
          })
             .catch((err) => reply(jsonformat(err)))
              break
case 'leaveall': 
             if (!isOwner) return  freply(mess.only.ownerB)
             let totalgroup = Ramdani.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             Ramdani.groupLeave(id)
}
             break
case 'eval': 
             try {
             if (!isOwner) return freply (mess.ownerB)
             teksnye = args.join(' ')
             return eval(teksnye)
             } catch(e) {
             freply(`${e}`)
}
             break
case 'start': 
             if (!isOwner) return  freply(mess.only.ownerB)
             freply(`_SEDANG MENGHIDUPKAN MESIN_`)
             freply(`_SUKSES MENGHIDUPKAN MESIN_`)
             await sleep(3000)
             process.exit()
             break             
      case 'restart': 
             if (!isOwner) return  freply(mess.only.ownerB)
             freply(mess.wait)
             exec(`node main`)
             freply('_Restarting Bot Success_')
             break
default:
if (budy.includes(`Assalamualaikum`)) {

                  freply(`Waalaikumsalam ${pushname}`)

                  }
                  if (budy.includes(`assalamualaikum`)) {

                  freply(`Waalaikumsalam ${pushname}`)

                  }
                  if (budy.includes(`ramdani`)) {

                  freply(`Ada Apa Manggil Tuan Ku?`)

                  }
}
if (budy.startsWith('x')){
try {
return Ramdani.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
freply(e)
}
}  

	
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'Message From', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'aqua'))
        }
	}
}