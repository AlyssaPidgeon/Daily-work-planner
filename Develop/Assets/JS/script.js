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

//this code displays the time at the top of the page:
var time = dayjs().format("dddd/MMM/YYYY hh:mm");
$("#currentDay").text(time);
