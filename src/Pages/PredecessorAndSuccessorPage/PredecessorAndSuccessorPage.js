import React from 'react';
import './PredecessorAndSuccessorPage.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import predecessor from '../../audio/prethodnik.mp3';
import successor from '../../audio/sledbenik.mp3';

function PredecessorAndSuccessorPage() {

    const playSound = (audio) => { 
        new Audio(audio).play();
      }

    return (
        <div>
            <p>
              БРОЈЕВИ - ПРЕТХОДНИК И СЛЕДБЕНИК
            </p>
            <div className="description">
              ПРЕТХОДНИК датог броја је број који је за 1 мањи од њега. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(predecessor)}/></span>
            </div>
            <div className="description">
              СЛЕДБЕНИК датог броја је број који је за 1 већи од њега. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(successor)}/></span>
            </div>
        </div>
      );

}

export default PredecessorAndSuccessorPage