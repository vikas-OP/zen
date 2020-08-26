class TV {
  name: string;
  channelList: Channel[];
  constructor(name) {
    this.name = name;
    this.channelList = [];
  }
  insertChannel(chan: Channel[]) {
    this.channelList.push(...chan);
  }
}
class Channel {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
}
let channel1 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
);
let channel2 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
);
let channel3 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
);
let channel4 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
);
let channel5 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
);
let channel6 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
);
let channel7 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
);
let channel8 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
);
let channel9 = new Channel(
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
);
let plasma = new TV("onePlus");
plasma.insertChannel([
  channel1,
  channel2,
  channel3,
  channel4,
  channel5,
  channel6,
  channel7,
  channel8,
  channel9,
]);
type cond = -1 | 1;
let channels = document.querySelectorAll(".channels");
let currentChannel: number;
currentChannel = 0;
let playSongs = (i: number) => {
  playVideo(i);
};
let channelChange = (i: cond) => {
  if (i === -1) {
    if (currentChannel !== 0) {
      currentChannel -= 1;
    } else {
      currentChannel = 8;
    }
    playVideo(currentChannel);
  } else {
    if (currentChannel !== 8) {
      currentChannel += 1;
    } else {
      currentChannel = 0;
    }
    playVideo(currentChannel);
  }
};
let playVideo = (i: number) => {
  let player = <HTMLVideoElement>document.getElementById("video-player");
  player.src = plasma.channelList[i].url;
  currentChannel = i;
};
let togglePlay = () => {
  let player = <HTMLVideoElement>document.getElementById("video-player");
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
};
let volumeChange = (i: cond) => {
  let player = <HTMLVideoElement>document.getElementById("video-player");
  if (i === -1) {
    if (player.volume !== 0.0) {
      player.volume -= 0.1;
    }
  } else {
    if (player.volume !== 1.0) {
      player.volume += 0.1;
    }
  }
};
