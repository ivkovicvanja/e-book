import React from 'react';
import './GeometricShapes.scss';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import description from '../../audio/oblici.mp3';
import circle from '../../audio/krug.mp3';
import square from '../../audio/kvadrat.mp3';
import triangle from '../../audio/trougao.mp3';
import rectangle from '../../audio/pravougaonik.mp3';

function GeometricShapes() {

  const playSound = (audio) => { 
    new Audio(audio).play();
  }

    return (
        <div>
            <p>
              ГЕОМЕТРИЈСКИ ОБЛИЦИ
            </p>
            <div className="description">
                Основни геометријски облици су ТРОУГАО, КВАДРАТ, КРУГ И ПРАВОУГАОНИК. <span className="hearing-icon"><VolumeUpIcon onClick={() => playSound(description)}/></span>
            </div>
            <div className="answers-shapes">
              <div className="triangle" onClick={() => playSound(triangle)}></div>
              <div className="square" onClick={() => playSound(square)}></div>
              <div className="circle" onClick={() => playSound(circle)}></div>
              <div className="rectangle" onClick={() => playSound(rectangle)}></div>
              <div className="shape-name">ТРОУГАО</div>
              <div className="shape-name">КВАДРАТ</div>
              <div className="shape-name">КРУГ</div>
              <div className="shape-name">ПРАВОУГАОНИК</div>

            </div>
        </div>
      );

}

export default GeometricShapes