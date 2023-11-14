var mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const AddressSchema = new mongoose.Schema({
    _id: { type: objectId, auto: true },
    _comp_id: { type: String },
    regOfficeAddress: {
        addressType: { type: String, required: true },
        branch: { type: String },
        unitDiv: { type: String },
        doorNo: { type: String, required: true },
        buildingName: { type: String },
        streetName: { type: String, required: true },
        areaTaluk: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        district: { type: String, required: true },
        pinCode: { type: String, required: true },
        country: { type: String, required: true },
        gstNumber: { type: String, required: true },
        placeOfSupply: { type: String, required: true }
    },
    branchOfficeAddress: {
        addressType: { type: String, required: true },
        branch: { type: String },
        unitDiv: { type: String },
        doorNo: { type: String, required: true },
        buildingName: { type: String },
        streetName: { type: String, required: true },
        areaTaluk: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        district: { type: String, required: true },
        pinCode: { type: String, required: true },
        country: { type: String, required: true },
        gstNumber: { type: String, required: true },
        placeOfSupply: { type: String, required: true }
    }
}, {
    versionKey: false
});

const Address = mongoose.model('addresses', AddressSchema);

module.exports = Address;