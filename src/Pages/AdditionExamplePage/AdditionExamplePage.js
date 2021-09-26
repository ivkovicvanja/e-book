import React, { useState, useEffect } from 'react';
import './AdditionExamplePage.scss';
import addition1 from '../../images/sabiranje1.jpg';
import addition2 from '../../images/sabiranje2.jpg';

function AdditionExamplePage() {

  const [value, setValue] = useState(0);
  let randomImages = [
    addition1,
    addition2
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
              САБИРАЊЕ
            </p>
            <div className="description">
                <img alt="sabiranje" className="image" src={randomImages[value]}></img>
            </div>
        </div>
      );

}

export default AdditionExamplePage