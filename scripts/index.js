//instructions:

// Write a script that , when you click on the button,
// adds a new fox RANDOM image to the container div.
// All foxes should be floated.  Make another button to remove all foxes.

// Stretch:   Make several buttons that change the way the foxes are
// added and displayed.  Example:  a new add button would change all
// to display: block in the existing dom and add a new random fox which is
// also display: block.  Hit the display float button and they all change
// back to float and it adds a new floated random fox.
// var foxy = collection[images][1]["img_src"];
//
// $(document).ready(function(){
//   $("#trigger").click(function(){
//     $("#container").append("collection"["images"][1]["img_src"])
//   for (var foxy = 0; i < foxy.length; i++) {
//     console.log("foxy");
//   }
// });
//
// });


$("#trigger").click(function(){
  var randomNum = Math.floor((Math.random() *3));
  $("#container").append('<img src="'+collection["images"][randomNum]["image_src"]+'"/>');
});
