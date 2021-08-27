import React from 'react';
import './AdditionExamplePage.scss';
import addition from '../../images/sabiranje.jpg';

function AdditionExamplePage() {

    return (
        <div>
            <p>
              САБИРАЊЕ
            </p>
            <div className="description">
                <img alt="sabiranje" className="image" src={addition}></img>
            </div>
        </div>
      );

}

export default AdditionExamplePage