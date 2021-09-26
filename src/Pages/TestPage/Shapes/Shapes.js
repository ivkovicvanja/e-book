import React, {Component} from 'react';
import '../TestPage.scss';
import shapes1 from '../../../images/oblici1.jpg';
import shapes2 from '../../../images/oblici2.jpg';

class Shapes extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            problemText: ['Колико жутих кругова има на слици?', 'Колико наранџастих троуглова има на слици?'],
            correctAnswers: [8, 6],
            correctAnswer: null,
            problemNumber:  null,
            answers: [],
            selectedAnswer: {},
            randomImages: [
                shapes1,
                shapes2
            ]
        };
    }

    componentDidMount() {
        const problemNumber = this.getRandomIntBetween(0, 1);
        const correctAnswer = this.state.correctAnswers[problemNumber];
        this.setState({problemNumber: problemNumber, correctAnswer: correctAnswer});

        let { answers } = this.state;
        answers = [];
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

    handleClick(event) {
        let selected = null;
        this.state.answers.map((answer, index) => {
            if (answer.answer == event.target.outerText) {
                selected = this.state.answers[index];
            }
            return answer;
        });
        let allAnswers = document.getElementsByClassName("answer-shapes");
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
                <span key={i} className="answer-shapes" onClick={(e) => this.handleClick(e)}>{answers[i].answer}</span>
            );
            i++;
          }
        return displayedAnswers;
    }

    render() {
        const {problemText, problemNumber, randomImages} = this.state

        return (
            <div>
                <div className="title">
                    Задатак 4 - {problemText[problemNumber]}
                </div>
                <div className="shapes">
                    <img alt="oblici" className="image" src={randomImages[problemNumber]}></img>
      
                    <span className="answers-shapes">
                    {this.getAnswers()}
                    </span>
                </div>
            </div>
        );
    }

}


export default Shapes