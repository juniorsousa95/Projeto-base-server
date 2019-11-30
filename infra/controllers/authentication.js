const useCase = require('../../usecase/login-usecase')
const authenticate = (req,res,next)=>{
    const {email,password} = req.body;
    useCase.execute({email,password})
    .then(profile => res.json(profile))
    .catch(error => res.sendStatus(401))
}

module.exports = {
    authenticate
}