import React from 'react';
import './NumbersProblemThree.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description from '../../audio/brojevi_zadatak3.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function NumbersProblemThree() {

    const playSound = (audio) => { 
        new Audio(audio).play();
      }

    return (
        <div>
            <p>
              БРОЈЕВИ - ЗАДАТАК 3
            </p>
            <div className="description">
              КОЈИ БРОЈ СЕ НАЛАЗИ ИЗМЕЂУ БРОЈЕВА 5 и 7? <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers-numbers">
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>9</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>8</div>
            <div className="answer correct" onClick={() => playSound(correct)}>6</div>
            </div>
        </div>
      );

}

export default NumbersProblemThree