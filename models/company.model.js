var mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const CompanySchema = new mongoose.Schema({
    _id: {type: objectId, auto: true},
    companyName: {type: String, required: true},
    companyID: {type: String, required: true}
});

const Company = mongoose.model('companies', CompanySchema);

module.exports = Company;