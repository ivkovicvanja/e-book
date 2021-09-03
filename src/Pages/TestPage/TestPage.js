import React, { Component } from 'react';
import './TestPage.scss';

import Addition from './Addition/Addition';
import Subtraction from './Subtraction/Subtraction';
import Predecessor from './Predecessor/Predecessor';

class TestPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            counter: 0,
            problemOne: false,
            problemTwo: false,
            problemThree: false
        };

        this.checkAnswers = this.checkAnswers.bind(this);
    }

    playSound = (audio) => {
        new Audio(audio).play();
    }

    handleClick = (event) => {
        event.target.style.backgroundColor = 'green';
    }

    checkAnswers() {
        this.setState({
            message: 'Одговорио си тачно на ' + this.state.counter + '/3 питања.'
        });
    }

    eventHandlerOne = data => {
        if (this.state.problemOne !== data.selectedAnswer.correct) {
            this.setState({
                problemOne: data.selectedAnswer.correct
            });
            if (data.selectedAnswer.correct) {
                this.setState({
                    counter: this.state.counter + 1 
                })
            }
            else {
                this.setState({
                    counter: this.state.counter - 1 
                })
            }
        }
    }

    eventHandlerTwo = data => {
        if (this.state.problemTwo !== data.selectedAnswer.correct) {
            this.setState({
                problemTwo: data.selectedAnswer.correct
            });
            if (data.selectedAnswer.correct) {
                this.setState({
                    counter: this.state.counter + 1 
                })
            }
            else {
                this.setState({
                    counter: this.state.counter - 1 
                })
            }
        }
    }

    eventHandlerThree = data => {
        let correct = null;
        if (data.counter === data.correctAnswer) {
            correct = true;
        }
        else {
            correct = false;
        }
        if (this.state.problemThree !== correct) {
            this.setState({
                problemThree: correct
            });
            if (correct) {
                this.setState({
                    counter: this.state.counter + 1 
                })
            }
            else {
                this.setState({
                    counter: this.state.counter - 1 
                })
            }
        }
    }

    render() {
        return (
            <div>
                <div className="title">
                    Тестирај своје знање
            </div>
            <div className="problem">
                <Addition onChange={this.eventHandlerOne}/>
            </div>
            <div className="problem">
                <Subtraction onChange={this.eventHandlerTwo}/>
            </div>
            <div className="problem">
                <Predecessor onChange={this.eventHandlerThree}/>
            </div>

            <div>
                <button type="button" className="button-new-game" onClick={this.checkAnswers}>
                    ПРОВЕРИ ОДГОВОРЕ
                </button>                
                <div>{this.state.message}</div>

            </div>
        </div>
        );
    }

}

export default TestPage