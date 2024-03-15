{/* <form id="loginForm">
  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email"><br>
  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br>
  <input type="submit" value="Submit">
</form> */}
// const form = document.getElementById("loginForm");
// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const data = {
//     email: email,
//     password: password
//   };

//   saveData(data);
// });
// function saveData(data) {
//     fetch("/save-data", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error("Failed to save data");
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log("Data saved successfully:", data);
//     })
//     .catch(error => {
//       console.error("Error saving data:", error);
//     });
//   }

// const express = require("express");
// const app = express();
// const fs = require("fs");
// const bodyParser = require("body-parser");

// app.use(bodyParser.json());

// app.post("/save-data", function(req, res) {
//   const data = req.body;

//   fs.writeFile("data.json", JSON.stringify(data), function(err) {
//     if (err) {
//       return res.status(500).json({ error: "Failed to save data" });
//     }
//     res.json({ message: "Data saved successfully" });
//   });
// });

// app.listen(3000, function() {
//   console.log("Server listening on port 3000");
// });

const form = document.getElementById("loginForm");
// console.log(form);
var submitbtn=document.getElementById("submitbtn");
submitbtn.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("HEllo");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email);
  // console.log(password);
  const login = {
    email: email,
    password: password
  };

  saveLogin(login);
});

 const logins = [];

function saveLogin(login) {
  logins.push(login);
  console.log(logins);
  localStorage.setItem("logins", JSON.stringify(logins));
}

function loadLogins() {
  const loginsString = localStorage.getItem("logins");
  if (loginsString) {
    return JSON.parse(loginsString);
  } else {
    return [];
  }
}

const loger = loadLogins();
console.log(loger);