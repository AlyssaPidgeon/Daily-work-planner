// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  console.log(time, text);
  localStorage.setItem(time, text);
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

//compare the current time with each schedule time to run the past/present/future colour-code
var currentHour = dayjs().hour();
console.log(currentHour);
$(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("-")[1]);
  console.log(blockTime);
  if (blockTime < currentHour) {
    $(this).addClass("past");
  } else if (blockTime === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

//code to run for saving user text locally:

// element - text area - where use enters input

//code for removing user entered text:
// function handleRemoveItem(event) {
//   // convert button we pressed (`event.target`) to a jQuery DOM object
//   var btnClicked = $(event.target);

//   // get the parent `<li>` element from the button we pressed and remove it
//   btnClicked.parent("li").remove();
// }

//this code displays the time at the top of the page:
var time = dayjs().format("dddd/MMM/YYYY hh:mm");
$("#currentDay").text(time);
