import { Card } from "./cardDetails";
let createCard = (a: string[]) => {
  let div = document.createElement("div");
  div.setAttribute(
    "class",
    "col-2 my-3 d-flex align-items-center justify-content-center"
  );
  let button = document.createElement("button");
  button.setAttribute("class", "btn btn-primary");
  button.innerText = "Play";
  button.addEventListener("click", () => {
    let player = <HTMLAudioElement>document.getElementById("player");
    if (!player.paused && player.src != a[2]) {
      player.pause();
      player.src = a[2];
      player.play();
    } else if (!player.paused && player.src == a[2]) {
      player.pause();
    } else if (player.paused && player.src == a[2]) {
      player.play();
    } else {
      player.src = a[2];
      player.play();
    }
    console.log("playing");
  });
  div.append(button);
  let div1 = document.createElement("div");
  div1.setAttribute("class", "col-9 text-center py-5 my-3");
  div1.style.background = `url(${a[3]}) center/cover no-repeat`;
  div1.style.height = "30vh";
  let p1 = document.createElement("p");
  p1.setAttribute("class", "h4");
  p1.innerHTML = `<kbd>${a[0]}</kbd>`;
  let p2 = document.createElement("p");
  p2.setAttribute("class", "h5");
  p2.innerHTML = `<kbd>${a[1]}</kbd>`;
  div1.append(p1, p2);
  let content = document.getElementById("content");
  content.append(div, div1);
};
async function request(a1: string) {
  let response: any;
  response = await fetch(a1, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": "b6c98dcdefmshff67ad8b22a9862p1b9990jsnfdbc82e58734",
    },
  });
  response = <[]>(await response.json()).tracks;
  let content = document.getElementById("content");
  content.innerHTML = "";
  console.log(response);
  response.forEach((val: any) => {
    if (val.hub.actions != undefined) {
      let title = val.title;
      let subtitle = val.subtitle;
      let url = val.hub.actions[1].uri;
      let img = val.images.background;
      console.log(img);
      let card = new Card(title, subtitle, url, img);
      createCard(card.getDeets());
    }
  });
}

async function requestSearch(name: string) {
  let response: any;
  response = await fetch(
    `https://shazam.p.rapidapi.com/search?locale=en-US&offset= 0&limit=5&term=${name}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "shazam.p.rapidapi.com",
        "x-rapidapi-key": "b6c98dcdefmshff67ad8b22a9862p1b9990jsnfdbc82e58734",
      },
    }
  );
  response = <[]>(await response.json()).tracks.hits;
  response = response.map((val) => val.track);
  console.log(response);
  let content = document.getElementById("content");
  content.innerHTML = "";
  response.forEach((val) => {
    if (val.hub.actions != undefined) {
      let title = val.title;
      let subtitle = val.subtitle;
      let url = val.hub.actions[1].uri;
      let img = val.images.background;
      let card = new Card(title, subtitle, url, img);
      console.log(url);
      createCard(card.getDeets());
    }
  });
}
document.getElementById("top").addEventListener("click", () => {
  let player = <HTMLAudioElement>document.getElementById("player");
  player.pause();
  request(
    "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?locale=en-US&id=40008598"
  );
});
document.getElementById("recommended").addEventListener("click", () => {
  let player = <HTMLAudioElement>document.getElementById("player");
  player.pause();
  request(
    "https://shazam.p.rapidapi.com/songs/list-recommendations?locale=en-US&key=484129036"
  );
});
(<HTMLFormElement>document.getElementById("form1")).addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    let player = <HTMLAudioElement>document.getElementById("player");
    player.pause();
    let name = (<HTMLInputElement>document.getElementById("search")).value;
    requestSearch(name);
  }
);
