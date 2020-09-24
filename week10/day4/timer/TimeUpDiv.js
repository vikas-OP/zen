import React from "react";
import Sound from "react-sound";

function TimeUpDiv(props) {
  return (
    <div className="h-100 bg-danger d-flex flex-column align-items-center justify-content-center">
      <Sound
        url="http://www.cooperfulleon.com/sites/cooperfulleon.com/files/sounder_tones/standard/cooper_fulleon_sounder_tone_16.wav"
        playStatus={Sound.status.PLAYING}
      />
      <h1 className="display-4 my-3">Time's Up</h1>
      <button className="btn btn-warning" onClick={props.clickFunction}>
        Reset
      </button>
    </div>
  );
}
export default TimeUpDiv;
