let profiles = [{
    id: new Date().getTime(),
    name: "João da Silva Brasil"
}
];

const insert = (req, res, next) => {
    const profile = req.body;
    profile.id = new Date().getTime();
    profiles.push(profile);
    res.status(201).json(profile);
}

const update = (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    let profile = profiles.find((p) => p.id == id);
    if (profile) {
        profile = { ...profile, ...data, id }
        for (let index = 0; index < profiles.length; index++) {
            if (profiles[index].id == id) {
                profiles[index] = profile;
                break;
            }
        }
        res.sendStatus(204)
    }

}

const remove = (req, res, next) => {
    const { id } = req.params;
    profiles = profiles.filter(p => p.id != id)
    res.sendStatus(204)
}

const findAll = (req, res, next) => {
    res.json(profiles)

}
const findByID = (req, res, next) => {
    const { id } = req.params;
    let profile = profiles.find((p) => p.id == id);
    if (profile) {
        res.json(profile)
    } else {
        res.sendStatus(404)
    }
}

module.exports = {
    insert,
    update,
    remove,
    findAll,
    findByID
}