var mongoose = require("mongoose");

var sales_info = mongoose.Schema({

   first_name : {
        type : String,
        required : true
   },
   last_name : {
        type : String,
        required : true
   },
   email : {
        type : String,
        required : true
   },
   designation : {
        type : String,
        required : true
   },
   password : {
        type : String,
        required : true
   },  
   confirm_password : {
        type : String,
        required : true
    }
});

var sales_data = module.exports = mongoose.model("sales_info",sales_info);

module.exports.saveSales = function(salesinfo, callback){
	sales_data.create(salesinfo, callback);
}


module.exports.getClientDetails = function(username,password,callback){
  sales_data.findOne({'email' : username, 'password' : password}, callback);
}


