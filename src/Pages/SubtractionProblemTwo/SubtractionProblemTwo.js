import React from 'react';
import './SubtractionProblemTwo.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description from '../../audio/oduzimanje_zadatak2.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function SubtractionProblemTwo() {

    const playSound = (audio) => { 
        new Audio(audio).play();
    }

    return (
        <div>
            <p>
              ОДУЗИМАЊЕ - ЗАДАТАК 2
            </p>
            <div className="description">
              АКО ОД БРОЈА 8 ОДУЗМЕМО СЛЕДБЕНИК БРОЈА 5, КОЈИ БРОЈ ЋЕМО ДОБИТИ? <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers-subtraction">
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>7</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>4</div>
            <div className="answer correct" onClick={() => playSound(correct)}>2</div>
            </div>
        </div>
      );

}

export default SubtractionProblemTwo