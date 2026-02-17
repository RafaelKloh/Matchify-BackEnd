export async function validate(data) {
    console.log(data)
    throw {
        status: 400,
        error: 'Validation Error',
        message: 'Email is required'
    }
}
