const routes = [
    ...require('./routes/profiles').routes,
    ...require('./routes/authentication').routes,
]

const config = (routerConfig)=>{
    routes.forEach(route =>{
        routerConfig[route.method](route.path,route.actions)
    })
}

module.exports = {
    config
}