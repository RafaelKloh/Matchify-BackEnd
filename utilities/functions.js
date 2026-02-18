import { options } from "../utilities/mailOptions.js"
import nodemailer  from "nodemailer";

const transporter = nodemailer.createTransport(options);


export function validatePassword(password) {
    const regex = /\W|_/;
    console.log(regex.test(password))
}

export function validateRegisterUser(email, password, name) {
    if (!name) {
        throw {
            'status': 400,
            'error': 'Empety filed',
            'message': 'Fill in the name field'
        }
    }
    else if (!email) {
        throw {
            'status': 400,
            'error': 'Empety filed',
            'message': 'Fill in the email field'
        }
    }
    else if (!password) {
        throw {
            'status': 400,
            'error': 'Empety filed',
            'message': 'Fill in the password field'
        }
    }

    transporter.sendMail({
        from: 'matchfy',
        to: email,
        subject: 'Enviando email com nodemailer',
        html: '<h1> Olha que legal esse email que tu recebeu</h1>',
        text: ''
    }).then((response) => {
        console.log('email enviado com sucesso');
    }).catch((e) => {
        console.log('erro ao enviar email')
        console.log(e)
    })
}