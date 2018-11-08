// Variable to track the number of steps
var totalsteps = 5;

// Track which step should be displayed
var currentstep = 0;
// store the html of each slide
var currentslide;
// Initial function gets called when the page first loads
$(function(){
  // Fill the number of steps in the title.
  $('.totalsteps').html(totalsteps);

  //hide all the steps and controls. You can specify multiple things to hide by separating them by a comma inside of the selector.
  $('.steps li, .end, .controls, #prev').hide();

});

/* Let's start the tutorial by clicking on an image with the id #begin.
 Keep in mind we only want to show the first slide.
*/
$('#begin').on('click' , function(){
  //Lets hide the welcome paraphs
  $('.welcome').hide();
  //Set the first step
  currentstep = 1;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('.controls').fadeIn(1000);
  $('h2').html('Step ' + currentstep);
});

// Click on next
$('#next').on('click' , function(){
  //Since we are incrementing currentstep in order to advance our slides, we have test to make sure we don't go over the totalsteps
  if(currentstep != totalsteps){
  $(currentslide).hide();
// we use ++ to increment the number of steps
  currentstep++;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step ' + currentstep);
  }
  // If the currentstep is equal to the totalsteps it means we have reached the last slide so.... we hide the next button
  if(currentstep == totalsteps){
    $('#next').hide();
  }
  // if the currentstep is not equal to 1, we are not on the first slide so....we show the previous button
  if(currentstep != 1) {
    $('#prev').show();
  }
});

// Click on prev
$('#prev').on('click' , function(){

  $(currentslide).hide();
  currentstep--;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step ' + currentstep);
  //
  if(currentstep != totalsteps){
    $('#next').show();
  }
  // if the current step is 1, we are on the first slide so.... we hide the previous button if(currentstep == 1) {

    $('#prev').hide();

$("end")
});
