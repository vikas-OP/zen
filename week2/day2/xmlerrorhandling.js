var request = new XMLHttpRequest();
var url_string = "https://api.openweathermap.org/data/2.5/weather?q=London,uk";
//  Open a new connection, using the GET request on the URL endpoint
request.open("GET", url_string, true);
request.send();

// Begin accessing JSON data here
request.onreadystatechange = () => {
  if (
    (request.status >= 200 || request.status < 400) &&
    request.readyState === 4
  ) {
    // do something
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    console.log("Error code is " + request.status + " " + request.statusText);
  }
};
