import React from 'react';
import './NumbersProblemOne.scss';
import HearingIcon from '@material-ui/icons/Hearing';

import description from '../../audio/brojevi_zadatak1.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function NumbersProblemOne() {

    const playSound = (audio) => { 
        new Audio(audio).play();
    }

    return (
        <div>
            <p>
              БРОЈЕВИ - ЗАДАТАК 1
            </p>
            <div className="description">
              КОЈИ ОД ПОНУЂЕНИХ БРОЈЕВА ЈЕ НАЈВЕЋИ? <span className="hearing-icon"><HearingIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers">
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>8</div>
            <div className="answer correct" onClick={() => playSound(correct)}>9</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>3</div>
            </div>
        </div>
      );

}

export default NumbersProblemOne