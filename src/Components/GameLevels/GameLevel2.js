import React, {useState, useEffect} from "react";
import { Howl } from "howler";

import one from "../../images/one.png";
import two from "../../images/two.png";
import three from "../../images/three.png";
import four from "../../images/four.png";
import five from "../../images/five.png";
import six from "../../images/six.png";
import seven from "../../images/seven.png";
import eight from "../../images/eight.png";
import nine from "../../images/nine.png";
import ten from "../../images/ten.png";

import oneAudio from "../../audios/one.mp3";
import twoAudio from "../../audios/two.mp3";
import threeAudio from "../../audios/three.wav";
import fourAudio from "../../audios/four.mp3";
import fiveAudio from "../../audios/five.mp3";
import sixAudio from "../../audios/six.wav";
import sevenAudio from "../../audios/seven.wav";
import eightAudio from "../../audios/eight.wav";
import nineAudio from "../../audios/nine.mp3";
import tenAudio from "../../audios/ten.mp3";

const iconClips = [
  { sound: fiveAudio, lablel: five, },
  { sound: fourAudio, lablel: four, },
  { sound: twoAudio, lablel: two, },
  { sound: oneAudio, lablel: one, },
  { sound: sixAudio, lablel: six, },
  { sound: threeAudio, lablel: three, },
  { sound: eightAudio, lablel: eight, },
  { sound: sevenAudio, lablel: seven, },
  { sound: tenAudio, lablel: ten, },
  { sound: nineAudio, lablel: nine, },
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

  // const btnOne = document.getElementById('one')
  // const btnTwo = document.getElementById('two')
  // const btnThree = document.getElementById('three')
  // let btnFour = document.getElementById('four')
  // const btnFive = document.getElementById('five')
  
  const enableBtn = (event) => {
    let clickedBtn = event.target.id
    if(clickedBtn === 'five'){
      setDisable(false)
    }else if(clickedBtn !== 'five'){
      console.log('not clicked');
    }
  }

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
                alt="Counting Icon"
              />
            );
          })}
        </div>
        <div className="numbers">
          <button
            className="btn-num"
            id="two"
            width={50}
            height={50}
            alt=" number icon"
            disabled={disable}
            onClick={(e) => {
              callMySound(twoAudio);
              enableBtn(e)
            }}
          >
            2
          </button>
          <button
            className="btn-num"
            id="one"
            width={50}
            height={50}
            alt=" number icon"
            disabled={disable}
            onClick={(e) => {
              callMySound(oneAudio);
              enableBtn(e)
            }}
          >
            1
          </button>
          <button
            className="btn-num"
            id="four"
            width={50}
            height={50}
            alt=" number icon"
            disabled={disable}
            onClick={(e) => {
              callMySound(fourAudio);
              enableBtn(e)
            }}
          >
            4
          </button>
          <button
            className="btn-num"
            id="three"
            width={50}
            height={50}
            alt=" number icon"
            disabled={disable}
            onClick={(e) => {
              callMySound(threeAudio);
              enableBtn(e)
            }}
          >
            3
          </button>
          <button
            className="btn-num"
            id="five"
            width={50}
            height={50}
            alt=" number icon"
            onClick={(e) => {
              callMySound(fiveAudio);
              enableBtn(e)
            }}
          >
            5
          </button>
          <button
            className="btn-num"
            id="seven"
            width={50}
            height={50}
            alt=" number icon"
            onClick={(e) => {
              callMySound(sevenAudio);
              enableBtn(e)
            }}
          >
            7
          </button>
          <button
            className="btn-num"
            id="six"
            width={50}
            height={50}
            alt=" number icon"
            onClick={(e) => {
              callMySound(sixAudio);
              enableBtn(e)
            }}
          >
            6
          </button>
          <button
            className="btn-num"
            id="nine"
            width={50}
            height={50}
            alt=" number icon"
            onClick={(e) => {
              callMySound(nineAudio);
              enableBtn(e)
            }}
          >
            9
          </button>
          <button
            className="btn-num"
            id="eight"
            width={50}
            height={50}
            alt=" number icon"
            onClick={(e) => {
              callMySound(eightAudio);
              enableBtn(e)
            }}
          >
            8
          </button>
          <button
            className="btn-num"
            id="ten"
            width={50}
            height={50}
            alt=" number icon"
            onClick={(e) => {
              callMySound(tenAudio);
              enableBtn(e)
            }}
          >
            10
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameLevel1;