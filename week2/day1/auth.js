var request = new XMLHttpRequest();
var url_string =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=fe5599ef6de21e63f064bd3f2edda0e6";
// Open a new connection, using the GET request on the URL endpoint
request.open("GET", url_string, true);
request.send();
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
};
