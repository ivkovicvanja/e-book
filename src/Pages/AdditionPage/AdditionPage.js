import React from 'react';
import './AdditionPage.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import addition1 from '../../audio/sabiranje1.mp3';
import addition2 from '../../audio/sabiranje2.mp3';
import addition3 from '../../audio/sabiranje3.mp3';

function AdditionPage() {

    const playSound = (audio) => { 
        new Audio(audio).play();
    }

    return (
        <div>
            <p>
              САБИРАЊЕ
            </p>
            <div className="description">
                САБИРАЊЕ је једна од основних аритметичких операција. Сабирањем сазнајемо укупан број две или више величина (бројева). <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(addition1)}/></span>
            </div>
            <div className="description">
                Математичку операцију сабирања представљамо знаком ПЛУС (+). <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(addition2)}/></span>
            </div>
            <div className="description">
                Бројеви које сабирамо називају се САБИРЦИ, а резултат сабирања назива се ЗБИР. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(addition3)}/></span>
            </div>
        </div>
      );

}

export default AdditionPage