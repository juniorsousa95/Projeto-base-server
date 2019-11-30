const controller = require('../controllers/authentication')
const routes = [
    {
        path:"/login",
        method:"post",
        actions:[controller.authenticate]
    }
]

module.exports = {
    routes
}