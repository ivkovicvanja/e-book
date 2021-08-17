import React from 'react';
import './SubtractionPage.scss';
import HearingIcon from '@material-ui/icons/Hearing';

import subtraction1 from '../../audio/oduzimanje1.mp3';
import subtraction2 from '../../audio/oduzimanje2.mp3';
import subtraction3 from '../../audio/oduzimanje3.mp3';

function SubtractionPage() {

    const playSound = (audio) => { 
        new Audio(audio).play();
      }

    return (
        <div>
            <p>
              ОДУЗИМАЊЕ
            </p>
            <div className="description">
                ОДУЗИМАЊЕ је једна од основних аритметичких операција и представља операцију супротну сабирању. <span className="hearing-icon"><HearingIcon onClick={() => playSound(subtraction1)}/></span>
            </div>
            <div className="description">
                Математичку операцију одузимања представљамо знаком МИНУС (-). <span className="hearing-icon"><HearingIcon onClick={() => playSound(subtraction2)}/></span>
            </div>
            <div className="description">
                Број од кога се одузима назива се УМАЊЕНИК, број који се одузима је УМАЊИЛАЦ, а резултат одузимања назива се РАЗЛИКА. <span className="hearing-icon"><HearingIcon onClick={() => playSound(subtraction3)}/></span>
            </div>
        </div>
      );

}

export default SubtractionPage