import React from 'react';
import './NumbersDescriptionPage.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description from '../../audio/jednocifreni_brojevi.mp3';
import smallestNumber from '../../audio/najmanji_broj.mp3';
import biggestNumber from '../../audio/najveci_broj.mp3';

function NumbersDescriptionPage() {

    const playSound = (audio) => { 
        new Audio(audio).play();
      }

    return (
        <div>
            <p>
              БРОЈЕВИ
            </p>
            <div className="description">
              БРОЈЕВИ 1, 2, 3, 4, 5, 6, 7, 8 и 9 пишу се једном цифром и називају се ЈЕДНОЦИФРЕНИ БРОЈЕВИ. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="description">
              НАЈМАЊИ једноцифрени број је 1. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(smallestNumber)}/></span>
            </div>
            <div className="description">
              НАЈВЕЋИ једноцифрени број је 9. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(biggestNumber)}/></span>
            </div>
        </div>
      );

}

export default NumbersDescriptionPage