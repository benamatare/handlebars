$(document).ready(function(){
// When le DOM is ready for you, commence
  var data = $.get(`https://dog.ceo/api/breeds/image/random`)
  console.log(data);
  // console.log(data.statusText)
$(function(){
  // Find the about section and assign it to a variable
  var aboutSection = $("#about-template").html();
  //Compile the template and assign to a variable
  var compileAbout = Handlebars.compile(aboutSection)
  // Define some data object
  var about = {
    "name": "Ben Matare",
    "MMR": 4000
  }
  // Pass our data to our template
  var sendMeToIndex = compileAbout(about)
  $('.about-placeholder').html(sendMeToIndex);
})






});
