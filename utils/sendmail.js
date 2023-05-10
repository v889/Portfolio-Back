import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vishal.gupta.sde@gmail.com',
      pass: 'rchsuhtwmbzyadxc'
    }
  });
  export const sendmail=(email,name)=>{
  const mailOptions = {
    from: 'vishal.gupta.sde@gmail.com',
    to: email,
    subject: 'Welcome',
    text: `Hii ${name} Thank for your message.I will response you in sometimes`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};