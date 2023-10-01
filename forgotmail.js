var nodemailer = require('nodemailer');

async function forgot(email, link, mailsub, mailtext) {
  try {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'photonelearningplatform@gmail.com',
        pass: 'pmyv ssik bexf obws'
      }
    });

    var mailOptions = {
      from: 'Photon eLearning Platform',
      to: email,
      subject: mailsub,
      text: `${mailtext} : ${link}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}



module.exports = {
  forgot: forgot
};
