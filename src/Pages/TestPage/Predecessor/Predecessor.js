import React, {Component} from 'react';
import '../TestPage.scss';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

class Predecessor extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            firstNumber:  null,
            answers: [],
            correctAnswer: null,
            counter: 0
        };
    }

    componentDidMount() {
        const firstNumber = this.getRandomIntBetween(1, 8);
        this.setState({firstNumber: firstNumber});

        let { answers } = this.state;
        answers = [];
        const correctAnswer = firstNumber + 1;
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
        this.setState({ answers: answers, correctAnswer: correctAnswer });
    }

    getRandomIntBetween(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    displayEmoji(number) {
        let i = 0;
        let stars = [];
        while (i < number) {
          i++;
          stars.push(<InsertEmoticonIcon key={i}/>);
        }
        return stars;
    }


    displayEmojiAnswer(number) {
        let i = 0;
        let emoji = [];
        while (i < number) {
          i++;
          emoji.push(<span className="answer-emoji" onClick={(e) => this.handleClick(e)}><InsertEmoticonIcon key={i}/></span>);
          if (i%3 === 0) {
              emoji.push(<br key={i+number}></br>)
          }
        }
        return emoji;
    }

    handleClick(event) {
        if (event.target.style[0] == undefined) {
            event.target.children[0].style.color = 'brown';
            event.target.style.pointerEvents = 'none';
            this.setState({ counter: this.state.counter + 1 }, () => this.props.onChange(this.state));   
        }
    }

    render() {
        const {firstNumber} = this.state

        return (
            <div>
                <div className="title">
                    Задатак 3 - Обележи смајлиће тако да број обележених буде једнак следбенику броја датих смајлића
                </div>
                <div className="predecessor">
                    <span className="emoji">{this.displayEmoji(firstNumber)}</span>  {`=>`}  <span className="answers-emoji">{this.displayEmojiAnswer(9)}</span>
                </div>
            </div>
        );
    }

}


export default Predecessor