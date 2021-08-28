import React from 'react';
import './SubtractionProblemOne.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description from '../../audio/oduzimanje_zadatak1.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function SubtractionProblemOne() {

    const playSound = (audio) => { 
        new Audio(audio).play();
    }

    return (
        <div>
            <p>
              ОДУЗИМАЊЕ - ЗАДАТАК 1
            </p>
            <div className="description">
              ВЛАДАН ИМА 6 ГОДИНА. УРОШ ЈЕ 3 ГОДИНЕ МЛАЂИ ОД ВЛАДАНА. КОЛИКО ГОДИНА ИМА УРОШ? <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers-subtraction">
            <div className="answer correct" onClick={() => playSound(correct)}>3</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>2</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>4</div>
            </div>
        </div>
      );

}

export default SubtractionProblemOne