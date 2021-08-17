import React from 'react';
import './ContentPage.scss';

function ContentPage({setPage}) {

    return (
        <div>
            <p>САДРЖАЈ</p>
            <div className="button-group-content">
                <button className="button-content" onClick={() => setPage(3)}>МАТЕМАТИКА</button>
                <button className="button-content" onClick={() => setPage(5)}>ЛОГИКА</button>
            </div>
        </div>
      );

}

export default ContentPage;