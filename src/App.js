import React, { useState } from 'react';
import './App.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import HomePage from './Pages/HomePage/HomePage';
import ContentPage from './Pages/ContentPage/ContentPage';
import NumbersPage from './Pages/NumbersPage/NumbersPage';
import ColorsPage from './Pages/ColorsPage/ColorsPage';
import NumbersDescriptionPage from './Pages/NumbersDescriptionPage/NumbersDescriptionPage';
import NumbersProblemOne from './Pages/NumbersProblemOne/NumbersProblemOne';
import NumbersProblemTwo from './Pages/NumbersProblemTwo/NumbersProblemTwo';
import NumbersProblemThree from './Pages/NumbersProblemThree/NumbersProblemThree';
import PredecessorAndSuccessorPage from './Pages/PredecessorAndSuccessorPage/PredecessorAndSuccessorPage';
import AdditionPage from './Pages/AdditionPage/AdditionPage';
import AdditionExamplePage from './Pages/AdditionExamplePage/AdditionExamplePage';
import AdditionProblemOne from './Pages/AdditionProblemOne/AdditionProblemOne';
import AdditionProblemTwo from './Pages/AdditionProblemTwo/AdditionProblemTwo';
import SubtractionPage from './Pages/SubtractionPage/SubtractionPage';
import SubtractionExamplePage from './Pages/SubtractionExamplePage/SubtractionExamplePage';
import SubtractionProblemOne from './Pages/SubtractionProblemOne/SubtractionProblemOne';
import SubtractionProblemTwo from './Pages/SubtractionProblemTwo/SubtractionProblemTwo';
import SecondaryColorsPage from './Pages/SecondaryColorsPage/SecondaryColorsPage';

function App() {

  const minPage = 1;
  const maxPage = 20;

  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page !== maxPage)
      setPage(page + 1);
  }

  const previousPage = () => {
    if (page !== minPage) {
      setPage(page - 1);
    }
  }

  function SwitchCase(props) {
    switch (props.value) {
      case 1:
        return <HomePage />;
      case 2:
        return <ContentPage setPage={setPage} />;
      case 3:
        return <NumbersDescriptionPage />;
      case 4:
        return <NumbersPage />;
      case 5:
        return <NumbersProblemOne />;
      case 6:
        return <PredecessorAndSuccessorPage />;
      case 7:
        return <NumbersProblemTwo />;
      case 8:
        return <NumbersProblemThree />;
      case 9:
        return <AdditionPage />
      case 10:
        return <AdditionExamplePage />
      case 11:
        return <AdditionProblemOne />
      case 12:
        return <AdditionProblemTwo />
      case 13:
        return <SubtractionPage />
      case 14:
        return <SubtractionExamplePage />
      case 15:
        return <SubtractionProblemOne />      
      case 16:
        return <SubtractionProblemTwo />
      case 17:
        return <ColorsPage />
      case 18:
        return <SecondaryColorsPage />
      case 19:
        return <HomePage />
      case 20:
        return <HomePage />
      default:
        return <HomePage />;
    }
  }

  const handleChangeValue = (event) => {
    const value = parseInt(event.target.value);
    setPage((value < minPage || value > maxPage) ? 1 : value);
  }

  return (
    <div className="wrapper">

      <header>

        <div className="page-section">
          <div className="page-label">СТРАНА</div>
          <div className="page">
            <div className={`button-previous ${page === minPage ? "hidden" : ""}`}><NavigateBeforeIcon onClick={previousPage}></NavigateBeforeIcon></div>
            <div className="input-page">
              <input type="number" min={minPage} max={maxPage} name="page" value={page} onChange={handleChangeValue}></input>
            </div>
            <div className={`button-next ${page === maxPage ? "hidden" : ""}`}><NavigateNextIcon onClick={nextPage}></NavigateNextIcon></div>
          </div>

        </div>

      </header>

      <section>
        <SwitchCase value={page} />
      </section>

    </div>
  );
}

export default App;
