var mongoose    = require('mongoose');
var bcrypt      = require('bcrypt-nodejs');
var schema      = mongoose.schema;

//============ SCHEMA USER ================
var userSchema = new Schema({
local : {
    username : {type: String, required: true, unique: true;},
    password : {type: String, required: true},
    email : {type: String, required: true},
    firstname : String,
    lastname: String,
    admin : Boolean,
    timestamps : ture
}
});

//============ Methode ================
// Hash Password
userSchema.methodes.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Check password
userSchema.methodes.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = Mongoose.model('User', userSchema);
