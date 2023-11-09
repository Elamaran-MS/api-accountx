const BaseRepository = require('./base.repository');
const Company = require('../models/company.model');

class CompanyRepository extends BaseRepository{
    constructor(){
        super(Company);
    }
}

module.exports = CompanyRepository;