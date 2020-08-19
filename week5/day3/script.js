let main_div = document.createElement("div");
main_div.setAttribute("class", "container whole");
let row_div = document.createElement("div");
let p = document.createElement("p");
p.setAttribute("class", "display-3 text-center text-white");
p.innerText = "REST COUNTRIES";
row_div.setAttribute("class", "row");
main_div.append(row_div);
document.body.append(p, main_div);

let request = async (url) => {
  try {
    let data = await fetch(url);
    data = await data.json();
    data.forEach((val) => {
      row_div.append(createCard(val));
    });
  } catch (error) {
    console.log(error);
  }
};

request("https://restcountries.eu/rest/v2/all");

function createCard(data) {
  let col_div = document.createElement("div");
  col_div.setAttribute("class", "col-lg-4 col-sm-12 mb-4");
  let card_div = document.createElement("div");
  card_div.setAttribute("class", "card");
  let header_div = document.createElement("div");
  header_div.setAttribute(
    "class",
    "card-header text-center bg-dark text-white"
  );
  header_div.innerText = data.name;
  let body_div = document.createElement("div");
  body_div.setAttribute("class", "card-body bodycard pt-2");
  let flag_img = document.createElement("img");
  flag_img.src = data.flag;
  flag_img.setAttribute("class", "imgs");
  let text_div = document.createElement("div");
  text_div.setAttribute("class", "card-text text-center textcard");
  text_div.innerHTML = `Capital: ${data.capital} <br/>Region: ${data.region}<br/>Country Code: ${data.alpha3Code}<br/>Lat & Long: ${data.latlng}`;
  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-primary btns");
  button.innerText = "Click for Weather!";
  button.addEventListener("click", async () => {
    try {
      let weather_data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.latlng[0]}&lon=${data.latlng[1]}&appid=fe5599ef6de21e63f064bd3f2edda0e6`
      );
      weather_data = await weather_data.json();
      weather_data = weather_data.weather;
      alert(
        "Weather: " +
          weather_data[0].main +
          "\n" +
          "Description: " +
          weather_data[0].description
      );
    } catch (error) {
      console.log(error);
    }
  });
  body_div.append(flag_img, text_div, button);
  card_div.append(header_div, body_div);
  col_div.append(card_div);
  return col_div;
}
