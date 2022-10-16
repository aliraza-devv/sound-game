import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [click, setClick] = useState(1);
  let navigate = useNavigate(); 
  let path = '/GameLevel2'; 
  let path_2 = '/'; 

  const routeChange = (e) =>{ 
    navigate(e);
  }
  const gameOverRoute = (e) =>{
    navigate(e);
  }
  const imgClicked = () => {
    setClick(click + 1)
    if(click >= 2){
      gameOverRoute(path_2)
    }
  }
  
  const enableBtn = (event) => {
    let clickedBtn = event.target.id
    if(clickedBtn === 'five'){
      setDisable(false)
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
      <h1 className="heading-primary">Game Level 1</h1>
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
                onClick={imgClicked}
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
              enableBtn(e);
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
              enableBtn(e);
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
              enableBtn(e);
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
              enableBtn(e);
              routeChange(path);;
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
              enableBtn(e);
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

