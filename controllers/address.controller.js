const StatusCodes = require('http-status');
const BaseController = require('./base.controller');
const AddressRepository = require('../repositories/address.repository');

class AddressController extends BaseController{
    constructor(){
        super(AddressRepository);
        this.repo = new AddressRepository;     
    }
    
    ok(res, doc){
        // console.log(!!doc);
        if(!!doc){
            res.status(StatusCodes.OK).send(doc);
        }else{
            return res.status(StatusCodes.OK).send({message: 'Not OK'});
        }
    }
    internalServerError(res, error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message: error + 'Internal Server Error'});
    }

    getAddressByCompId = (req, res) => {
        const id = {"_comp_id" : req.params.id};
        
        this.repo.getAddressByCompId(id).then(doc=>{
            // console.log(doc);
            return this.ok(res, doc);
            // return res.status(StatusCodes.OK).send(doc);
        }).catch(err=>{
            return this.internalServerError(res, err);
        })
    }
}

module.exports = AddressController;