export function routeNotFound(req, res, next) {
    return res.status(404).json({
        status: 'error',
        message: 'Route not found'
    });
}
