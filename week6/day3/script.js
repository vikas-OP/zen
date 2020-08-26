var TV = /** @class */ (function () {
    function TV(name) {
        this.name = name;
        this.channelList = [];
    }
    TV.prototype.insertChannel = function (chan) {
        var _a;
        (_a = this.channelList).push.apply(_a, chan);
    };
    return TV;
}());
var Channel = /** @class */ (function () {
    function Channel(url) {
        this.url = url;
    }
    return Channel;
}());
var channel1 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
var channel2 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4");
var channel3 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4");
var channel4 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4");
var channel5 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4");
var channel6 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4");
var channel7 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4");
var channel8 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4");
var channel9 = new Channel("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4");
var plasma = new TV("onePlus");
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
var channels = document.querySelectorAll(".channels");
var currentChannel;
currentChannel = 0;
var playSongs = function (i) {
    playVideo(i);
};
var channelChange = function (i) {
    if (i === -1) {
        if (currentChannel !== 0) {
            currentChannel -= 1;
        }
        else {
            currentChannel = 8;
        }
        playVideo(currentChannel);
    }
    else {
        if (currentChannel !== 8) {
            currentChannel += 1;
        }
        else {
            currentChannel = 0;
        }
        playVideo(currentChannel);
    }
};
var playVideo = function (i) {
    var player = document.getElementById("video-player");
    player.src = plasma.channelList[i].url;
    currentChannel = i;
};
var togglePlay = function () {
    var player = document.getElementById("video-player");
    if (player.paused) {
        player.play();
    }
    else {
        player.pause();
    }
};
var volumeChange = function (i) {
    var player = document.getElementById("video-player");
    if (i === -1) {
        if (player.volume !== 0.0) {
            player.volume -= 0.1;
        }
    }
    else {
        if (player.volume !== 1.0) {
            player.volume += 0.1;
        }
    }
};
