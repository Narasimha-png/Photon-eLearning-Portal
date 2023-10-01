const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');

// Read the Handlebars template file
const templateSource = fs.readFileSync('./views/email.handlebars', 'utf8');

// Create a Handlebars template function
const template = handlebars.compile(templateSource);

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'photoneducation4u@gmail.com',
    pass: 'ihpc fupo kiww cxpa'
  }
});


const data = {
  name: "",
  message: ''
};

// Compile the template with the data
const html = template(data);
function sendSubscriptionmail( guest ){
// Email options
const mailOptions = {
  from: 'photoneducation4u@gmail.com',
  to: guest,
  subject: 'Photon Subscription',
  html: html
};

// Send email using Nodemailer
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
module.exports = {
  sendSubscriptionmail: sendSubscriptionmail
}
