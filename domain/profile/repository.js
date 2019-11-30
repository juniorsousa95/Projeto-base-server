let profiles = [{
    id:1001,
    name:'João da Silva',
    email:'joao@teste.com.br',
    password:'123456'
}];
let idGenerator = 1;


const findAll = ()=>{
    return Promise.resolve(profiles)
}

const findByID = (id) =>{
    const profile = profiles.find(current => current.id === id);
    if(profile){
        return Promise.resolve(profile)
    }else{
        return Promise.reject({message: 'Record not found'})
    }
}

const findByEmail = (email)=>{
    const profile = profiles.find(current => current.email === email);
    if(profile){
        return Promise.resolve(profile)
    }else{
        return Promise.reject({message: 'Record not found'})
    }
}

const insert = (profile) =>{
    if(!profile){
        return Promise.reject({message:"Record is null"})
    }
    if(profile.id){
        return Promise.reject({message:"Record is not new"})
    }
    profile.id = idGenerator++;
    profiles.push(profile);
    return Promise.resolve(profile)
}

const update = (profile) =>{
    if(!profile){
        return Promise.reject({message:"Record is null"})
    }else 
    if(!profile.id){
        return Promise.reject({message:"Record is  new"})
    }
    const old = profiles.find(current => current.id === id);
    if(!old){
        return Promise.reject({message: 'Record not found'})
    }
    profiles = profiles.map(current =>{
        if(current.id === profile.id){
            return profile;
        }else{
            return current;
        }
    })
    return Promise.resolve(profile)
}
const remove = (id) =>{
    const sizeBefore = profiles.length;
    profiles = profiles.filter(current => current.id !== id);
    if(profiles.length >= sizeBefore){
        return Promise.reject({message:'Record not found'})
    }
    return Promise.resolve()
}

module.exports = {
    findAll,
    findByID,
    findByEmail,
    insert,
    update,
    remove
}