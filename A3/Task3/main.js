$(document).ready(function () {
  function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var month = currentTime.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    var day = currentTime.getDate();
    var year = currentTime.getFullYear();

    // Add leading zeros to minutes, seconds, month, and day
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    // Determine AM or PM
    var period = hours < 12 ? "AM" : "PM";

    // Convert to 12-hour format
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours === 0 ? 12 : hours;

    // Get the day of the week
    var daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    var dayOfWeek = daysOfWeek[currentTime.getDay()];
    var dayOfMonth = currentTime.getDate();
    var month = monthsOfYear[currentTime.getMonth()];
    var year = currentTime.getFullYear();

    // Display the time and date
    var clockDiv = $("#clock");
    $("#hours").text(hours);
    $("#minutes").text(minutes);
    $("#seconds").text(`${seconds} ${period}`);
    $("#date").text(dayOfWeek + ", " + dayOfMonth + " " + month + " " + year);
  }

  // Update the clock every second
  setInterval(updateClock, 1000);
});