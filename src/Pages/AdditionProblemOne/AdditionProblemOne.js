import React from 'react';
import './AdditionProblemOne.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description from '../../audio/sabiranje_zadatak1.mp3';
import correct from '../../audio/tacno.mp3';
import incorrect from '../../audio/netacno.mp3';

function AdditionProblemOne() {

    const playSound = (audio) => { 
        new Audio(audio).play();
    }

    return (
        <div>
            <p>
              САБИРАЊЕ - ЗАДАТАК 1
            </p>
            <div className="description">
              У АУТОБУСУ СЕ НАЛАЗИЛО ПЕТ (5) ПУТНИКА. НА СТАНИЦИ ЈЕ УШЛО ЈОШ ТРОЈЕ (3). КОЛИКО ПУТНИКА САДА ИМА У АУТОБУСУ? <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers-addition">
            <div className="answer correct" onClick={() => playSound(correct)}>8</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>6</div>
            <div className="answer incorrect" onClick={() => playSound(incorrect)}>9</div>
            </div>
        </div>
      );

}

export default AdditionProblemOne