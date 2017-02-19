var schema = mongoose.schema,
             ObjectId = schema.ObjectId;

var Users = new Schema({
local : {
    email : String,
    password : String
}
});
