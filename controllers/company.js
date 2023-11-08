const httpStatusCode = require('http-status-code');
const Company = require('../models/company');
class CompanyController{
    getAll = (req, res) =>{
        Company.find().then(docs=>{
            return res.status(200).send(docs);
        }).catch(err=>{
            return res.status(500).send({
                message: 'Internal Server Error'
            });
        })
    }
    addNew = (req, res) => {
        const body = req.body;
        Company.create(body).then(doc=>{
            return res.status(201).send(doc);
        }).catch(err=>{
            return res.status(500).send({
                message: err
            });
        })
    }
}

module.exports = CompanyController;