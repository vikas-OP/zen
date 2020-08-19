let div = document.createElement("div");
div.setAttribute("class", "whole");
let heading = document.createElement("p");
heading.setAttribute("class", "display-3 text-center head text-light");
heading.innerText = "REST COUNTRIES";
document.body.append(heading, div);
let request = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => {
      reject(xhr.statusText);
    };
  });
};

request(
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
)
  .then((a) => {
    let data = JSON.parse(a);
    data.forEach((val) => {
      div.append(createCard(val));
    });
  })
  .catch((a) => {
    console.log("Error ", a);
  });

function createCard(details) {
  let card = document.createElement("div");
  card.setAttribute("class", "card custom_card");
  let flag = document.createElement("img");
  flag.setAttribute("class", "img-class img-thumbnail");
  flag.setAttribute("src", details.flag);

  let card_body = document.createElement("div");
  card_body.setAttribute("class", "card-body");
  let card_title = document.createElement("p");
  card_title.setAttribute("class", "h5 card-title text-center");
  card_title.innerText = details.name;
  let card_text = document.createElement("div");
  card_text.setAttribute("class", "card-text text-center");
  card_text.innerHTML = `Capital: ${details.capital} <br/>Region: ${details.region} <br/> Latlng: ${details.latlng} <br/>Currency: ${details.currencies[0].name} <br/>Currency code: ${details.currencies[0].code} <br/>Currency symbol: ${details.currencies[0].symbol}`;
  card_body.append(card_title, card_text);
  card.append(flag, card_body);
  return card;
}
