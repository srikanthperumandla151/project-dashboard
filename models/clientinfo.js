var mongoose = require("mongoose");

var client_info = mongoose.Schema({

   client_name : {
        type : String,
        required : true
   },
   client_id : {
        type : String,
        required : true
   },
   client_acc_num : {
        type : String,
        required : true
   },
   tech_skills : {
        type : String,
        required : true
   },  
   mode_of_emplymnt : {
        type : String,
        required : true
    },
    required_date : {
        type : String,
        required : true
   }

});

var Client_data = module.exports = mongoose.model("clientinfo",client_info);

module.exports.saveClients = function(clientinfo, callback){
	Client_data.create(clientinfo, callback);
}


module.exports.getclientdata=function(callback){
  Client_data.find(callback);
}




module.exports.getClientDataById = function(id, callback){
   var Id = {_id:id};
   Client_data.findById(Id,callback);  

}