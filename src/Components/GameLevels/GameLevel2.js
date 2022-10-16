import React, {useState, useEffect} from "react";
import { Howl } from "howler";

import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import five from "../../images/five.png";
import oneAudio from "../../audios/one.mp3";
import twoAudio from "../../audios/two.mp3";
import threeAudio from "../../audios/three.wav";
import fourAudio from "../../audios/four.mp3";
import fiveAudio from "../../audios/five.mp3";

const iconClips = [
  { sound: fiveAudio, lablel: five, value: 0 },
  { sound: fourAudio, lablel: four, value: 1 },
  { sound: twoAudio, lablel: two, value: 2 },
  { sound: oneAudio, lablel: one, value: 3 },
  { sound: threeAudio, lablel: three, value: 4 },
];

const numClips = [
  { sound: twoAudio, lablel: "2", value: 2 },
  { sound: oneAudio, lablel: "1", value: 1 },
  { sound: fourAudio, lablel: "4", value: 4 },
  { sound: threeAudio, lablel: "3", value: 3 },
  { sound: fiveAudio, lablel: "5", value: 5 },
  { sound: fiveAudio, lablel: "6", value: 7 },
  { sound: fiveAudio, lablel: "8", value: 5 },
  { sound: fiveAudio, lablel: "7", value: 10 },
  { sound: fiveAudio, lablel: "10", value: 5 },
  { sound: fiveAudio, lablel: "9", value: 5 },
];

function GameLevel1() {
  const [disable, setDisable] = useState(true);

  const callMySound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div className="main">
      <div className="container">
        <div className="icons">
          {iconClips.map((soundObj, index) => {
            return (
              <img
                key={index}
                className="image"
                width={50}
                height={50}
                src={soundObj.lablel}
                alt="icon"
                onClick={() => callMySound(soundObj.sound)}
              />
            );
          })}
        </div>
        <div className="numbers">
          {numClips.map((soundObj, index) => {
            return (
              <button
                key={index}
                className="btn-num"
                width={50}
                height={50}
                alt="icon"
                disabled={disable}
                onClick={() => callMySound(soundObj.sound)}
              >
                {soundObj.lablel}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GameLevel1;