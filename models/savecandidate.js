var mongoose = require("mongoose");

var save_cand = mongoose.Schema({

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

var Cand_data = module.exports = mongoose.model("savecandidate",save_cand);




module.exports.saveCandidate=function(candidates,callback){
  Cand_data.create(candidates,callback);
}


