import React from 'react';
import './LogicProblemOne.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description from '../../audio/logika_zadatak1.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function LogicProblemOne() {

    const playSound = (audio) => { 
        new Audio(audio).play();
    }

    const handleClick = (event) => {
        event.target.style.backgroundColor = 'green';
    }

    return (
        <div>
            <p>
              ЛОГИКА - ЗАДАТАК
            </p>
            <div className="description">
              КЛИКНИ НА ЖУТИ КРУГ. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers-logic">
            <div className="square incorrect" onClick={() => playSound(incorrect)}></div>
            <div className="circle correct" onClick={(e) => { playSound(correct); handleClick(e); }}></div>
            <div className="triangle incorrect" onClick={() => { playSound(incorrect);}}></div>
            </div>
        </div>
      );

}

export default LogicProblemOne