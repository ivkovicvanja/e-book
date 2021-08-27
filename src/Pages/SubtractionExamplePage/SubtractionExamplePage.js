import React from 'react';
import './SubtractionExamplePage.scss';
import subtraction from '../../images/oduzimanje.jpg';

function SubtractionExamplePage() {

    return (
        <div>
            <p>
              ОДУЗИМАЊЕ
            </p>
            <div className="description">
                <img alt="oduzimanje" className="image" src={subtraction}></img>
            </div>
        </div>
      );

}

export default SubtractionExamplePage