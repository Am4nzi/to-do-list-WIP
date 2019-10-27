const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

//   if (currentDay === 0) {
//       day = "Sunday";
//       res.render("list", {kindOfDay: day} )
//   } else if (currentDay === 1) {
//       day = "Monday"
//       res.render("list", {kindOfDay: day} )
//   } else if (currentDay === 2) {
//       day = "Tuesday"
//       res.render("list", {kindOfDay: day} )
//   } else if (currentDay === 3) {
//       day = "Wednesday"
//       res.render("list", {kindOfDay: day} )
//   } else if (currentDay === 4) {
//       day = "Thursday"
//       res.render("list", {kindOfDay: day} )
//   } else if (currentDay === 5) {
//       day = "Friday"
//       res.render("list", {kindOfDay: day} )
//   } else if (currentDay === 6) {
//       day = "Saturday"
//       res.render("list", {kindOfDay: day} )
//   }

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
      default:
        console.log("Error: current day is equal to: " + currentDay);
  }

  res.render("list", {
      kindOfDay: day
  });

});

app.listen(8080, function() {
  console.log("server listening on port 8080");
});
