// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

// Define mail options
const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-email@gmail.com',
    subject: 'Hello from Node.js',
    text: 'This is a test email sent from Node.js!'
};

// Send the email
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
