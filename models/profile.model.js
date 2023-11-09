var mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const ProfileSchema = new mongoose.Schema({
    _id: { type: objectId, auto: true },
    companyName: { type: String, required: true },
    companyID: { type: String, required: true },
    companyType: { type: String, required: true },
    gstNumber: { type: String, required: true },
    businessTradeName: { type: String, required: true },
    businessLegalName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    businessEmail: { type: String, required: true },
    industry: { type: String },
    image: { type: String }
});

const Profile = mongoose.model('profiles', ProfileSchema);

module.exports = Profile;