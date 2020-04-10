const express = require('express');
const app = express();
const bodyParser = require("body-parser");

var campgrounds = [
		{name:"Salmon",image:"https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"},
		{name:"ghost", image:"https://pixabay.com/get/52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"},
	    {name:"Mountaion",image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"},
		{name:"Park", image:"https://pixabay.com/get/54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"},
	{name:"Salmon",image:"https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"},
		{name:"ghost", image:"https://pixabay.com/get/52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"},
	    {name:"Mountaion",image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"},
		{name:"Park", image:"https://pixabay.com/get/54e6d0434957a514f6da8c7dda793f7f1636dfe2564c704c72267fd09544c45d_340.jpg"}
	];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

app.get("/", (req,res)=>{
	res.render("landing");
});

app.get("/campgrounds", (req,res)=>{
	
	res.render("campgrounds",{campgrounds:campgrounds});
});

app.get("/campgrounds/new",(req,res)=>{
	res.render("new");
});

app.post("/campgrounds",(req,res)=>{
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image:image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});


app.listen(3000, () => {
	console.log("server listening on port 3000");
});