const controller = require('../controllers/profiles')
const routes = [
    {
        path:"/profiles",
        method:"get",
        actions:[controller.findAll]
    },
    {
        path:"/profiles/:id",
        method:"get",
        actions:[controller.findByID]
    },{
        path:"/profiles",
        method:"post",
        actions:[controller.insert]
    },{
        path:"/profiles/:id",
        method:"put",
        actions:[controller.update]
    },{
        path:"/profiles/:id",
        method:"delete",
        actions:[controller.remove]
    }
]

module.exports = {
    routes
}