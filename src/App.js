import React, { useState } from 'react';
import './App.scss';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
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
import GeometricShapes from './Pages/GeometricShapes/GeometricShapes';
import LogicProblemOne from './Pages/LogicProblemOne/LogicProblemOne';

function App() {

  const minPage = 1;
  const maxPage = 21;

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
        return <GeometricShapes />
      case 20:
        return <LogicProblemOne />
      case 21:
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

        <div className="navbar">
          <div className="dropdown">
            <MenuBookIcon />
            <div className="dropdown-content">
              <span onClick={() => setPage(1)}>Почетна страна</span>
              <span onClick={() => setPage(2)}>Садржај</span>
              <span onClick={() => setPage(3)}>Бројеви</span>
              <span onClick={() => setPage(4)}>Једноцифрени бројеви</span>
              <span onClick={() => setPage(5)}>Бројеви - задатак 1</span>
              <span onClick={() => setPage(6)}>Бројеви - Претходник и следбеник</span>
              <span onClick={() => setPage(7)}>Бројеви - задатак 2</span>
              <span onClick={() => setPage(8)}>Бројеви - задатак 3</span>
              <span onClick={() => setPage(9)}>Сабирање</span>
              <span onClick={() => setPage(10)}>Сабирање - пример</span>
              <span onClick={() => setPage(11)}>Сабирање - задатак 1</span>
              <span onClick={() => setPage(12)}>Сабирање - задатак 2</span>
              <span onClick={() => setPage(13)}>Одузимање</span>
              <span onClick={() => setPage(14)}>Одузимање - пример</span>
              <span onClick={() => setPage(15)}>Одузимање - задатак 1</span>
              <span onClick={() => setPage(16)}>Одузимање - задатак 2</span>
              <span onClick={() => setPage(17)}>Боје - основне боје</span>
              <span onClick={() => setPage(18)}>Боје - изведене боје</span>
              <span onClick={() => setPage(19)}>Геометријски облици</span>
              <span onClick={() => setPage(20)}>Логика - задатак</span>
            </div>
          </div>
        </div>

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
