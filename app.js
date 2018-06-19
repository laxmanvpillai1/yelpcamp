var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var campgrounds=[
    {name:'Salmon Creek',image:'https://www.africanmonarchlodges.com/wp-content/uploads/2016/01/Nambwa_Tented_lodge062-1030x580.jpg'},
    {name:'Granite Hill',image:'https://www.africanmonarchlodges.com/wp-content/uploads/2016/01/Nambwa_Tented_lodge059-1030x580.jpg'},
    {name:"Mountain Goat's Rest",image:'https://boyslifeorg.files.wordpress.com/2014/04/tent-featured.jpg'}
];

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("landing")
});

app.get('/campgrounds',function(req, res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.get('/campgrounds/new',function(req, res){
    res.render('new');
});

app.post('/campgrounds',function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var campground = {name:name, image:image};
    campgrounds.push(campground);

    res.redirect('/campgrounds');
});

app.listen(process.env.PORT, process.env.HOST, function(){
    console.log(`The Yelpcamp Server is running on port ${process.env.PORT}!`);
});

 