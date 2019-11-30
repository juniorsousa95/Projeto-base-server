/**
 * Use case to process Authentication
 */
const repository = require('../domain/profile/repository');


/**
 * Process Authentication
 * @param {Credential} credential 
 */
const execute = (credential)=>{
    const {email,password} = credential;

    return repository
    .findByEmail(email)
    .then(profile => {
        if(profile.password === password){
            return Promise.resolve(profile)
        }else{
            return Promise.reject()
        }
    })
}

module.exports = {
    execute
}