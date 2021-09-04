import React, { useState, useEffect } from 'react';
import './SubtractionExamplePage.scss';
import subtraction1 from '../../images/oduzimanje1.jpg';
import subtraction2 from '../../images/oduzimanje2.jpg';

function SubtractionExamplePage() {

  const [value, setValue] = useState(0);
  let randomImages = [
    subtraction1,
    subtraction2
  ];

  useEffect(() => {
    setValue(getRandomIntBetween(0, 1));
  }, []);

  function getRandomIntBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    return (
        <div>
            <p>
              ОДУЗИМАЊЕ
            </p>
            <div className="description">
                <img alt="oduzimanje" className="image" src={randomImages[value]}></img>
            </div>
        </div>
      );

}

export default SubtractionExamplePage