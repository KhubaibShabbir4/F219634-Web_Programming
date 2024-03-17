const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
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

$(document).ready(function () {
  $("#weather").click(function (e) {
    e.preventDefault();
    let city = $("input").val();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=153118330ddffa43c169753b172ac215&units=metric`;
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function (response) {
        $("#main").html(response["weather"][0].main);
        $("#description").html(response["weather"][0].description);
        $("#temperature").html(`
        ${response["main"].temp}<strong>ºC</strong>
        `);
        var iconurl = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
        $("#wicon").attr("src", iconurl);
        $("#wicon").show();
      },
    });
  });

  $("#forecast").click(function (e) {
    e.preventDefault();
    let city = $("input").val();
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=153118330ddffa43c169753b172ac215&units=metric`;
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function (response) {
        $.each(response["list"], function (index, value) {
          let dt = value.dt;
          let date = new Date(dt * 1000);
          let dayOfWeek = days[date.getDay()];
          let dayOfMonth = date.getDate();
          let month = months[date.getMonth()];
          let year = date.getFullYear();
          let hours = date.getHours().toString().padStart(2, "0");
          let minutes = date.getMinutes().toString().padStart(2, "0");
          let seconds = date.getSeconds().toString().padStart(2, "0");

          let formattedTime = `${hours}:${minutes}:${seconds}`;
          let content = `
            <p><strong>${dayOfWeek},${dayOfMonth},${month},${formattedTime}</strong></p>
            <p><strong>${value["weather"][0].main}</strong></p>
            <p>${value["weather"][0].description}</p>
            <p><strong>Temperature :</strong>${value["main"].temp} </p>
            <img src="http://openweathermap.org/img/w/${value.weather[0].icon}.png" alt="Weather Icon"/>`;
          $("#weatherform").append(content);
        });
      },
    });
  });
});