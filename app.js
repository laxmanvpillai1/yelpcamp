var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var campgrounds=[
    {name:'Salmon Creek',image:'https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg'},
    {name:'Granite Hill',image:'https://i.pinimg.com/originals/18/74/aa/1874aabee3220440d111ac4614a2805b.jpg'},
    {name:"Mountain Goat's Rest",image:'https://res.cloudinary.com/simpleview/image/upload/c_limit,f_auto,h_1200,q_75,w_1200/v1/clients/poconos/Campgrounds_Tent_Sites_Woman_Hemlock_Campground_4_PoconoMtns_06f196d5-8814-4803-a132-8a4daae1755e.jpg'}
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

 