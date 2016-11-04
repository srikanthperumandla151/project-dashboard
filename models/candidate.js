var mongoose = require("mongoose");

var cnd_info = mongoose.Schema({

   can_name : {
        type : String,
        required : true
   },
   can_id : {
        type : String,
        required : true
   },
   can_qual : {
        type : String,
        required : true
   },
   cli_id : {
        type : String,
        required : true
   },  
   moe : {
        type : String,
        required : true
    }
   

});

var Cand_data = module.exports = mongoose.model("candidateinfo",cnd_info);




module.exports.getcandidate=function(callback){
  Cand_data.find(callback);
}


module.exports.getCandDataById = function(id, callback){
   var Id = {_id:id};
   Cand_data.findById(Id,callback);  

}

