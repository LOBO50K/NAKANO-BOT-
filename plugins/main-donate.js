
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ ${mssg.donate}

▢ *PayPal*
• *Link :* https://www.paypal.me/BenjaBarreto

▢ *Mercado Pago Arg*
• *Alias :* Benja-123

▢ *Naranja X Arg*
• *Alias :* 
`
let img = 'https://i.ibb.co/gmfLXZ7/file.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m, null, rpyp)
//conn.sendPayment(m.chat, '2000', 'USD', don, m.sender, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

