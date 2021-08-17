import React from 'react';
import './NumbersPage.scss';
import HearingIcon from '@material-ui/icons/Hearing';

import one from '../../audio/jedan.mp3';
import two from '../../audio/dva.mp3';
import three from '../../audio/tri.mp3';
import four from '../../audio/cetiri.mp3';
import five from '../../audio/pet.mp3';
import six from '../../audio/sest.mp3';
import seven from '../../audio/sedam.mp3';
import eight from '../../audio/osam.mp3';
import nine from '../../audio/devet.mp3';

function NumbersPage() {

    const playSound = (audio) => { 
        console.log('play sound')
        new Audio(audio).play();
      }

    return (
        <div>
            <p>
              ЈЕДНОЦИФРЕНИ БРОЈЕВИ
            </p>
            <div className="numbers">
            <div className="number">1 - ЈЕДАН <span className="hearing-icon"><HearingIcon onClick={() => playSound(one)}/></span></div>
            <div className="number">2 - ДВА <span className="hearing-icon"><HearingIcon onClick={() => playSound(two)}/></span></div>
            <div className="number">3 - ТРИ <span className="hearing-icon"><HearingIcon onClick={() => playSound(three)}/></span></div>
            <div className="number">4 - ЧЕТИРИ <span className="hearing-icon"><HearingIcon onClick={() => playSound(four)}/></span></div>
            <div className="number">5 - ПЕТ <span className="hearing-icon"><HearingIcon onClick={() => playSound(five)}/></span></div>
            <div className="number">6 - ШЕСТ <span className="hearing-icon"><HearingIcon onClick={() => playSound(six)}/></span></div>
            <div className="number">7 - СЕДАМ <span className="hearing-icon"><HearingIcon onClick={() => playSound(seven)}/></span></div>
            <div className="number">8 - ОСАМ <span className="hearing-icon"><HearingIcon onClick={() => playSound(eight)}/></span></div>
            <div className="number">9 - ДЕВЕТ <span className="hearing-icon"><HearingIcon onClick={() => playSound(nine)}/></span></div>
            </div>
        </div>
      );

}

export default NumbersPage