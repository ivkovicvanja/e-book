import React from 'react';
import './NumbersProblemTwo.scss';
import HearingIcon from '@material-ui/icons/Hearing';

import description from '../../audio/brojevi_zadatak2.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function NumbersProblemTwo() {

    const playSound = (audio) => { 
        new Audio(audio).play();
      }

    return (
        <div>
            <p>
              БРОЈЕВИ - ЗАДАТАК 2
            </p>
            <div className="description">
              КОЈИ БРОЈ ЈЕ ПРЕТХОДНИК БРОЈА 4? <span className="hearing-icon"><HearingIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers">
            <div className="answer correct" onClick={() => playSound(correct)}>3</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>6</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>5</div>
            </div>
        </div>
      );

}

export default NumbersProblemTwo