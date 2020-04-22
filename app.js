//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Server started on port 3000");
});

app.get("/", function(req,res) {
  // DOWNLOADS THE FILE TO USER (¬‿¬)
  // res.sendFile(__dirname + "/views/home.ejs");
  // let homeText = homeStartingContent;

  res.render("home", { homePageText : homeStartingContent, homePosts : posts });
});

app.get("/posts/:postName", function(req,res) {
  let requestTitle = req.params.postName;

  console.log("Title requested: " + requestTitle);
  posts.forEach(function(p) {
    // console.log("Title checking: " + p.title);
    if (requestTitle === p.title) {
      console.log("Match found!");
    } else {
      console.log("No match found");
    }
  });

});
//Playing with express routing DOES WORK if you specify number of parameters@#@#@#!#
app.get("/posts/:postName/user/:userName", function(req,res) {
  console.log(req.params.postName);  
  console.log(req.params.userName);
});

app.get("/about", function(req,res) {
  res.render("about", { aboutPageText : aboutContent });
});

app.get("/contact", function(req,res) {
  res.render("contact", { contactPageText : contactContent });
});

app.get("/compose", function(req,res) {
  res.render("compose");
});

var posts = [];
app.post("/compose", function(req,res) {
  let postTitle = req.body.postTitle;
  let postText = req.body.postText;

  let post = {
    title: postTitle,
    text: postText
  };
  // You can just push an object into an array @)#($*@#)$*#@  
  posts.push(post);
  // posts.push({title: post.title , content: post.text});
  res.redirect("/");


});











