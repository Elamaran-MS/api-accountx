const StatusCodes = require('http-status');

class BaseController{
    constructor(repoClass){
        this.repo = new repoClass;
    }
    //Common Response Methods
    ok(res, doc){
        if(!!doc){
            res.status(StatusCodes.OK).send(doc);
        }else{
            return res.status(StatusCodes.OK).send({message: 'Ok'});
        }
    }
    created(res, doc){
        return res.status(201).send({message: 'Created', doc: doc});
    }
    unauthorized(res, message){
        return res.status(StatusCodes.UNAUTHORIZED).send({message: 'Unauthorized'});
    }
    forbidden(res, message){
        return res.status(StatusCodes.FORBIDDEN).send({message: 'Forbidden'});
    }
    notFound(res, message){
        return res.status(StatusCodes.NOT_FOUND).send({message: 'Not Found'});
    }
    conflict(res, message){
        return res.status(StatusCodes.CONFLICT).send({message: 'Conflict'});
    }
    internalServerError(res, error){
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message: error + 'Internal Server Error'});
    }
    //Common DB Operations
    getAll = (req, res) =>{
        this.repo.findAll().then(data=>{
            return this.ok(res, data);
        }).catch(err=>{
            return this.internalServerError(res, err);
        })
    }
    addNew = (req, res) => {
        const body = req.body;
        this.repo.create(body).then(doc=>{
            return this.created(res, doc);
        }).catch(err=>{
            return this.internalServerError(res, err);
        })
    }
    update = (req, res) => {
        //let id = req.params.id;
        const body = req.body;
        this.repo.update(body).then(doc=>{
            return this.ok(res, doc);
        }).catch(err=>{
            return this.internalServerError(res, err);
        })
    }

    deleteById = (req, res) => {
        let id = req.params.id;
        this.repo.deleteById(id).then(doc=>{
            return this.ok(res, doc);
        }).catch(err=>{
            return this.internalServerError(res, err);
        })
    }
    getById = (req, res) => {
        let id = req.params.id;
        this.repo.findById(id).then(doc=>{
            return this.ok(res, doc);
        }).catch(err=>{
            return this.internalServerError(res, err);
        })
    }
}

module.exports = BaseController;