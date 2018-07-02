const nodemailer = require('nodemailer');
exports.sendMailer = (email,body)=>{
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', 
      auth: {
          user: 'hoanjizi@gmail.com', 
          pass: '01208823243'
      }
    })
    let mailOptions = {
      from: 'hoanjizi@gmail.com',
      to: `${email}`,
      subject: 'active account test local',
      html: '<a href="http://localhost:3001/api/active/'+body+'">click active account</a>'
    }
    return transporter.sendMail(mailOptions)
  }
  