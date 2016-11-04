var express=require("express");
var app=express();
var mongoose=require("mongoose");
var sales_info=require("./models/salesRegTab")
var client_info=require("./models/clientinfo")
var project_info=require("./models/projectMembers")
var Cand_data=require("./models/candidate")
var bodyParser=require("body-parser")
var select_candidates = require("./models/savecandidate")
mongoose.connect("mongodb://localhost/techminds",function(){
	console.log("sucess");
})
var PORT=process.env.PORT || 8000

app.use(express.static(__dirname+"/public"))
app.use(bodyParser.json());

app.post("/salesReg",function(req,res){

var body=req.body;//using body parser

sales_info.saveSales(body,function(err,data){

	if(err){
		throw err;
	}
	res.json(data);
})

})

app.get("/salesLogin/:username/:pwd",function(req,res){

var username=req.params.username;
var pwd=req.params.pwd;
sales_info.getClientDetails(username,pwd,function(err,data){
	if(err){
		throw err;
	}
		res.json(data);

})
})

app.post("/clientdetails",function(req,res){

var body=req.body;//using body parser

client_info.saveClients(body,function(err,data){

	if(err){
		throw err;
	}
	res.json(data);
})

})


app.get("/clientinfos",function(req,res){

client_info.getclientdata(function(err,data){

	if(err){
		throw err;
	}
	res.json(data);
})

})


app.get("/clientInfo/:id",function(req,res){

	var id = req.params.id;
client_info.getClientDataById(id,function(err,data){

	if(err){
		throw err;
	}
	res.json(data);
})

})

app.post("/projectmembers",function(req,res){

	console.log("hi..");

var body=req.body;//using body parser
console.log(body);
project_info.saveProjectMembers(body,function(err,data){

	if(err){
		throw err;
	}
	console.log(data);
	res.json(data);
})

})


app.get("/projectToHr",function(req,res){

	
project_info.getprojectmember(function(err,data){

	if(err){
		throw err;
	}
	res.json(data);
})


})

app.get("/candidateinfo",function(req,res){


Cand_data.getcandidate(function(err,data){

	if(err){
		throw err;
	}
	res.json(data);
})
})


app.get("/candidateinfo/:id",function(req,res){

	var id = req.params.id;
Cand_data.getCandDataById(id,function(err,data){

	if(err){
		throw err;
	}
	res.json(data);
})

})


app.post("/saveCandidate",function(req,res){

	console.log("hi..");

var body=req.body;//using body parser
console.log(body);
select_candidates.saveCandidate(body,function(err,data){

	if(err){
		throw err;
	}
	console.log(data);
	res.json(data);
})

})




app.listen(PORT,function(){

	console.log("server is listening at port"+PORT);
})