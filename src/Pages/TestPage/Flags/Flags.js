import React, {Component} from 'react';
import '../TestPage.scss';
import srbija from '../../../images/srbija.png';
import ceska from '../../../images/ceska.png';
import nemacka from '../../../images/nemacka.png';

class Flags extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            problemText: ['Србије', 'Чешке', 'Немачке'],
            correctAnswers: [3, 2, 2],
            correctAnswer: null,
            problemNumber:  null,
            answers: [],
            selectedAnswer: {},
            randomImages: [
                srbija,
                ceska,
                nemacka
            ]
        };
    }

    componentDidMount() {
        const problemNumber = this.getRandomIntBetween(0, 2);
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
        let allAnswers = document.getElementsByClassName("answer-flags");
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
                <span key={i} className="answer-flags" onClick={(e) => this.handleClick(e)}>{answers[i].answer}</span>
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
                    Задатак 5 - Колико примарних боја се налази на застави {problemText[problemNumber]}?
                </div>
                <div className="flags">
                    <img alt="zastave" className="image" src={randomImages[problemNumber]}></img>
      
                    <span className="answers-flags">
                    {this.getAnswers()}
                    </span>
                </div>
            </div>
        );
    }

}


export default Flags