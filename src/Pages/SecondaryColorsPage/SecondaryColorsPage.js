import React from 'react';
import './SecondaryColorsPage.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description1 from '../../audio/boje_2.mp3';
import orange from '../../audio/narandzasta.mp3';
import green from '../../audio/zelena.mp3';
import purple  from '../../audio/ljubicasta.mp3';

function SecondaryColorsPage() {

  const playSound = (audio) => {
    new Audio(audio).play();
  }

  return (
    <div>
      <p>
        БОЈЕ
      </p>
      <div className="description">
        Мешањем основних боја добијамо ИЗВЕДЕНЕ (секундарне) боје и то су НАРАНЏАСТА, ЗЕЛЕНА и ЉУБИЧАСТА. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description1)} /></span>
      </div>
      <div className="answers">
        <div className="answer orange" onClick={() => playSound(orange)}>НАРАНЏАСТА</div>
        <div className="answer green" onClick={() => playSound(green)}>ЗЕЛЕНА</div>
        <div className="answer purple" onClick={() => playSound(purple)}>ЉУБИЧАСТА</div>
      </div>
    </div>
  );

}

export default SecondaryColorsPage