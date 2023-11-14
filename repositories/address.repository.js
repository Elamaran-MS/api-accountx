const BaseRepository = require('./base.repository');
const Address = require('../models/address.model');

class AddressRepository extends BaseRepository{
    constructor(){
        super(Address);
        this.collection = Address;
    }

    async getAddressByCompId(id){
        var data = await this.collection.findOne(id).exec();
        //console.log(data);
        return data;
    }
}

module.exports = AddressRepository;