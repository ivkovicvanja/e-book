import React from 'react';
import './AdditionProblemTwo.scss';
import HearingIcon from '@material-ui/icons/Hearing';

import description from '../../audio/sabiranje_zadatak2.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function AdditionProblemTwo() {

    const playSound = (audio) => { 
        new Audio(audio).play();
    }

    return (
        <div>
            <p>
              САБИРАЊЕ - ЗАДАТАК 2
            </p>
            <div className="description">
              ЗБИР КОЈЕГ ОД ПОНУЂЕНИХ ИЗРАЗА САБИРАЊА ОДГОВАРА ЗБИРУ БРОЈЕВА 3 И 4? <span className="hearing-icon"><HearingIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers">
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>2 + 3</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>3 + 5</div>
            <div className="answer correct" onClick={() => playSound(correct)}>6 + 1</div>
            </div>
        </div>
      );

}

export default AdditionProblemTwo