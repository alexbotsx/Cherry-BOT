let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `𝑷𝒂𝒓𝒂 𝒂𝒅𝒒𝒖𝒊𝒓𝒊𝒓 𝒖𝒏 𝒃𝒐𝒕 👇🏻

https://chat.whatsapp.com/LRIEl3bvpyDJAY1PQD9mQ6
  ${pesan}`
  let teks = `🍒 𝐂𝐇𝐄𝐑𝐑𝐘 𝐁𝐎𝐓 🍒*
   ${oi}\n\n🍒𝑬𝒕𝒊𝒒𝒖𝒆𝒕𝒂 𝑮𝒆𝒏𝒆𝒓𝒂𝒍 🍒*\n`
  for (let mem of participants) {
  teks += `┏・🍒 @${mem.id.split('@')[0]}\n`}
  teks += `┗・𝗬𝗔𝗥𝗜𝗧𝗭𝗔 - 𝗩𝗘𝗡𝗧𝗔𝗦`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler