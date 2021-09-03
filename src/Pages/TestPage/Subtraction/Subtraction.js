import React, {Component} from 'react';
import '../TestPage.scss';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';

class Subtraction extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            firstNumber:  null,
            secondNumber: null,
            answers: [],
            selectedAnswer: {}
        };
    }

    componentDidMount() {
        const firstNumber = this.getRandomIntBetween(5, 9);
        const secondNumber = this.getRandomIntBetween(1, 4);
        this.setState({firstNumber: firstNumber, secondNumber: secondNumber});

        let { answers } = this.state;
        answers = [];
        const correctAnswer = firstNumber - secondNumber;
        let incorrectAnswerOne = this.getRandomIntBetween(1, 9);
        while (incorrectAnswerOne === correctAnswer) {
            incorrectAnswerOne = this.getRandomIntBetween(1, 9);
        }
        let incorrectAnswerTwo = this.getRandomIntBetween(1, 9);
        while (incorrectAnswerTwo === correctAnswer || incorrectAnswerTwo === incorrectAnswerOne) {
            incorrectAnswerTwo = this.getRandomIntBetween(1, 9);
        }
        answers.push(
            {answer: correctAnswer, correct: true}, 
            {answer: incorrectAnswerOne, correct: false}, 
            {answer: incorrectAnswerTwo, correct: false});
        answers.sort(function() {return 0.5 - Math.random()});
        this.setState({ answers: answers });
    }

    getRandomIntBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    displayFlowers(number) {
        let i = 0;
        let stars = [];
        while (i < number) {
          i++;
          stars.push(<FilterVintageIcon key={i}/>);
        }
        return stars;
    }

    handleClick(event) {
        let selected = null;
        this.state.answers.map((answer, index) => {
            if (answer.answer == event.target.outerText) {
                selected = this.state.answers[index];
            }
            return answer;
        });
        let allAnswers = document.getElementsByClassName("answer-subtraction");
        let ans = Object.values(allAnswers);
        ans.forEach(element => {
            element.style.backgroundColor = "#ffbb33"
        });
        event.target.style.backgroundColor = 'azure';
        this.setState({ selectedAnswer: selected }, () => this.props.onChange(this.state));
    }

    getAnswers() {
        let { answers } = this.state;
        let displayedAnswers = [];
        let i = 0;
        while (i < answers.length) {
            displayedAnswers.push(
                <span key={i} className="answer-subtraction" onClick={(e) => this.handleClick(e)}>{answers[i].answer}</span>
            );
            i++;
          }
        return displayedAnswers;
    }

    render() {
        const {firstNumber, secondNumber} = this.state

        return (
            <div>
                <div className="title">
                    Задатак 2 - Одузми цветиће: 
                </div>
                <div className="subtraction">
                    {this.displayFlowers(firstNumber)} - {this.displayFlowers(secondNumber)} = 
      
                    <span className="answers-subtraction">
                    {this.getAnswers()}
                    </span>
                </div>
            </div>
        );
    }

}


export default Subtraction