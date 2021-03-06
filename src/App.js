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
import MemoryGame from './Pages/MemoryGame/MemoryGame';
import TestPage from './Pages/TestPage/TestPage';

function App() {

  const minPage = 1;
  const maxPage = 22;

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
        return <MemoryGame />
      case 22:
        return <TestPage />
      default:
        return <HomePage />;
    }
  }

  const handleChangeValue = (event) => {
    const value = parseInt(event.target.value);
    setPage((value < minPage || value > maxPage) ? 1 : value);
  }

  return (
    <div>

      <header>

        <div className="navbar">
          <div className="dropdown">
            <MenuBookIcon />
            <div className="dropdown-content">
              <span onClick={() => setPage(1)}>?????????????? ????????????</span>
              <span onClick={() => setPage(2)}>??????????????</span>
              <span onClick={() => setPage(3)}>??????????????</span>
              <span onClick={() => setPage(4)}>???????????????????????? ??????????????</span>
              <span onClick={() => setPage(5)}>?????????????? - ?????????????? 1</span>
              <span onClick={() => setPage(6)}>?????????????? - ???????????????????? ?? ??????????????????</span>
              <span onClick={() => setPage(7)}>?????????????? - ?????????????? 2</span>
              <span onClick={() => setPage(8)}>?????????????? - ?????????????? 3</span>
              <span onClick={() => setPage(9)}>????????????????</span>
              <span onClick={() => setPage(10)}>???????????????? - ????????????</span>
              <span onClick={() => setPage(11)}>???????????????? - ?????????????? 1</span>
              <span onClick={() => setPage(12)}>???????????????? - ?????????????? 2</span>
              <span onClick={() => setPage(13)}>??????????????????</span>
              <span onClick={() => setPage(14)}>?????????????????? - ????????????</span>
              <span onClick={() => setPage(15)}>?????????????????? - ?????????????? 1</span>
              <span onClick={() => setPage(16)}>?????????????????? - ?????????????? 2</span>
              <span onClick={() => setPage(17)}>???????? - ?????????????? ????????</span>
              <span onClick={() => setPage(18)}>???????? - ???????????????? ????????</span>
              <span onClick={() => setPage(19)}>???????????????????????? ????????????</span>
              <span onClick={() => setPage(20)}>???????????? - ??????????????</span>
              <span onClick={() => setPage(21)}>???????? ????????????????</span>
              <span onClick={() => setPage(22)}>????????</span>
            </div>
          </div>
        </div>

        <div className="page-section">
          <div className="page-label">????????????</div>
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
