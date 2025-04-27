import React, { useState } from 'react';
import OffSwitch from './assets/off_button.png';
import OnSwitch from './assets/on_button.png';

export default function Toggle_Bulb() {
  const [isOn, setIsOn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [hide, setHide] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevstate) => !prevstate);
  };
  const toggleLights = () => {
    setIsActive((prevstate) => !prevstate);
  };
  const changeImage = () => {
    setHide((prevstate) => !prevstate);
  };
  return (
    <div className="main-container">
      {hide ? (
        <div>
          <div
            className="hanging-lights"
            style={{ filter: isActive ? 'grayscale(0)' : 'grayscale(100%)' }}
          ></div>
          <button className="switch-toggle" onClick={toggleLights}>
            {isActive ? <img src={OnSwitch} /> : <img src={OffSwitch} />}
          </button>
        </div>
      ) : (
        <div>
          <div
            className="bulb"
            style={{ filter: isOn ? 'grayscale(0)' : 'grayscale(100%)' }}
          ></div>

          <button className="switch-toggle" onClick={toggleSwitch}>
            {isOn ? <img src={OnSwitch} /> : <img src={OffSwitch} />}
          </button>
        </div>
      )}

      <button className="bulb-text" onClick={changeImage}>
        {hide ? 'Bulb' : 'Hanging Lights '}
      </button>
    </div>
  );
}
