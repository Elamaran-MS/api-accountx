const BaseController = require('./base.controller');
const CompanyRepository = require('../repositories/company.repository');

class CompanyController extends BaseController{
    constructor(){
        super(CompanyRepository);
    }
}

module.exports = CompanyController;