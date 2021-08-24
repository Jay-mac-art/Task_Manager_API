const sgMail = require('@sendgrid/mail')
const { getMaxListeners } = require('../models/task')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendwelcomeMail = (email,name) =>
{
sgMail.send({
    to : email,
    from : 'jayantk7722@gmail.com',
    subject : 'Thanks for Joining',
    text : `Welcome abroad ${name} `

})
}
const sendremoveMail = (email,name) =>
{
sgMail.send({
    to : email,
    from : 'jayantk7722@gmail.com',
    subject : 'Feedback',
    text : `Help us to know you more  ${name} `

})
}
module.exports = {
    sendwelcomeMail,
    sendremoveMail
}

