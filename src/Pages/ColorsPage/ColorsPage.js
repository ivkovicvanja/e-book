import React from 'react';
import './ColorsPage.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description1 from '../../audio/boje_1.mp3';
import yellow from '../../audio/zuta.mp3';
import red from '../../audio/crvena.mp3';
import blue from '../../audio/plava.mp3';


function ColorsPage() {

  const playSound = (audio) => { 
    new Audio(audio).play();
  }

    return (
        <div>
            <p>
              БОЈЕ
            </p>
            <div className="description">
                ОСНОВНЕ боје су ЖУТА, ЦРВЕНА и ПЛАВА. Оне се не могу разложити, нити добити мешањем других боја. Зову се још и ПРИМАРНЕ боје. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description1)}/></span>
            </div>
            <div className="answers">
              <div className="answer yellow" onClick={() => playSound(yellow)}>ЖУТА</div>
              <div className="answer red" onClick={() => playSound(red)}>ЦРВЕНА</div>
              <div className="answer blue" onClick={() => playSound(blue)}>ПЛАВА</div>
            </div>
        </div>
      );

}

export default ColorsPage