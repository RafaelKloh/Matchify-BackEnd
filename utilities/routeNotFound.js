export async function routeNotFound() {
    var response = {}
    return response = {
        'status':'error',
        'message':'Route not found'
    }
}