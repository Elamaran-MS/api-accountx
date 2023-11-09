const BaseRepository = require('./base.repository');
const Profile = require('../models/profile.model');

class ProfileRepository extends BaseRepository{
    constructor(){
        super(Profile);
    }
}

module.exports = ProfileRepository;