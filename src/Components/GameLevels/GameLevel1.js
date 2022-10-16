import React, { useState } from "react";
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
  { lablel: five, value: 5 },
  { lablel: four, value: 4 },
  { lablel: two, value: 2 },
  { lablel: one, value: 1 },
  { lablel: three, value: 3 },
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
        </div>
      </div>
    </div>
  );
}

export default GameLevel1;


  /* {numClips.map((soundObj, index) => {
            return (
              <button
                key={index}
                className="btn-num"
                width={50}
                height={50}
                alt="icon"
                onClick={() => { callMySound(soundObj.sound) }}
              >
                {soundObj.lablel}
              </button>
            );
          })} */

