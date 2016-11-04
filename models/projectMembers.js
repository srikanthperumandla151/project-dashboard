var mongoose = require("mongoose");

var projecrMembers = mongoose.Schema({

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
   },
   no_of_requirements : {
        type : String,
        required : true
   }

});

var proj_members = module.exports = mongoose.model("projectmember",projecrMembers);

module.exports.saveProjectMembers = function(projectmemberinfo, callback){
	proj_members.create(projectmemberinfo, callback);
}

module.exports.getprojectmember=function(callback){
  proj_members.find(callback);
}