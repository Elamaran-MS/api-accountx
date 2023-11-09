const BaseController = require('./base.controller');
const ProfileRepository = require('../repositories/profile.repository');

class ProfileController extends BaseController{
    constructor(){
        super(ProfileRepository);
    }
}

module.exports = ProfileController;