import React from 'react';
import './AdditionExamplePage.scss';
import addition from '../../images/sabiranje-autici.jpeg';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function AdditionExamplePage() {

    return (
        <div>
            <p>
              САБИРАЊЕ
            </p>
            <div className="description">
                <img className="image-addition" src={addition}></img>
            </div>
            <div className="arrows">
              <ArrowUpwardIcon></ArrowUpwardIcon>
              <ArrowUpwardIcon></ArrowUpwardIcon>
              <ArrowUpwardIcon></ArrowUpwardIcon>
              <div>ПРВИ САБИРАК</div>
              <div>ДРУГИ САБИРАК</div>
              <div>ЗБИР</div>
            </div>
        </div>
      );

}

export default AdditionExamplePage