import { ReceiptRussianRuble } from "lucide";

export function validatePassword(password) {
    const regex = /\W|_/;
    console.log(regex.test(password))
}

export function validateLogin(email, password) {
    if (!email && !password) {
        throw {
            'status': 400,
            'error': 'Empety filed',
            'message': 'Fill in the email and password field'
        }
    }
    else if (!email) {
        throw {
            'status': 400,
            'error': 'Empety filed',
            'message': 'Fill in the email field'
        }
    }
    else if(!password) {
        throw {
            'status': 400,
            'error': 'Empety filed',
            'message': 'Fill in the password field'
        }
    }
}