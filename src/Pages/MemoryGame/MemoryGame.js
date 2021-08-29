import React, { Component } from 'react';
import './MemoryGame.scss';

const Card = props => {
    let style = {};
    if (props.showing)
        style = { backgroundColor: props.backgroundColor, pointerEvents: "none" };
    return <div onClick={props.click} style={style} className="card" />;
};

const CardGrid = props => {
    const cards = props.cards.map(card => (
        <Card
            key={card.id}
            backgroundColor={card.backgroundColor}
            showing={card.cardState}
            click={() => props.handleClick(card.id)}
        />
    ));
    return <div className="cards-block">{cards}</div>;
};

const Newgame = props => {
    return (
        <button className="button-new-game" onClick={props.startNewGame}>
            ИГРАЈ ИСПОЧЕТКА
        </button>
    );
};

const CardState = {
    HIDING: 0,
    SHOWING: 1,
    MATCHING: 2
};

class MemoryGame extends Component {

    constructor(props) {
        super(props);

        let cards = [
            { id: 0, cardState: CardState.HIDING, backgroundColor: "red" },
            { id: 1, cardState: CardState.HIDING, backgroundColor: "red" },
            { id: 2, cardState: CardState.HIDING, backgroundColor: "blue" },
            { id: 3, cardState: CardState.HIDING, backgroundColor: "blue" },
            { id: 4, cardState: CardState.HIDING, backgroundColor: "green" },
            { id: 5, cardState: CardState.HIDING, backgroundColor: "green" },
            { id: 6, cardState: CardState.HIDING, backgroundColor: "yellow" },
            { id: 7, cardState: CardState.HIDING, backgroundColor: "yellow" },
            { id: 8, cardState: CardState.HIDING, backgroundColor: "orange" },
            { id: 9, cardState: CardState.HIDING, backgroundColor: "orange" },
            { id: 10, cardState: CardState.HIDING, backgroundColor: "purple" },
            { id: 11, cardState: CardState.HIDING, backgroundColor: "purple" },
            { id: 12, cardState: CardState.HIDING, backgroundColor: "pink" },
            { id: 13, cardState: CardState.HIDING, backgroundColor: "pink" },
            { id: 14, cardState: CardState.HIDING, backgroundColor: "lightskyblue" },
            { id: 15, cardState: CardState.HIDING, backgroundColor: "lightskyblue" }
        ];
        cards = this.shuffle(cards);
        this.state = { cards, secondClick: false };
    }

    shuffle = arr => arr.sort(() => 0.5 - Math.random());

    startNewGame = () => {
        let cards = [...this.state.cards];
        cards.map(card => {
            return card.cardState = CardState.HIDING;
        });
        cards = this.shuffle(cards);
        this.setState({ cards });
    };

    handleClick = id => {
        const showingCards = this.state.cards.map(card => {
            if (card.id === id) {
                return { ...card, cardState: 1 };
            }
            return card;
        });
        const { secondClick } = this.state;

        const showingCardsIds = showingCards
            .filter(card => card.cardState === 1)
            .map(card => card.id);

        const card1 = showingCards.filter(card => card.id === showingCardsIds[0]);
        const card1color = card1[0].backgroundColor;

        if (secondClick) {
            const card2 = showingCards.filter(card => card.id === showingCardsIds[1]);
            const card2color = card2[0].backgroundColor;
            if (card1color === card2color) {
                const matchedCards = showingCards.map(card =>
                    showingCardsIds.includes(card.id) ? { ...card, cardState: 2 } : card
                );
                this.setState({ cards: matchedCards, secondClick: false });
                return;
            } else if (card1color !== card2color) {
                const notMatchedCards = showingCards.map(card =>
                    showingCardsIds.includes(card.id) ? { ...card, cardState: 0 } : card
                );
                this.setState({ cards: showingCards }, () =>
                    setTimeout(
                        () => this.setState({ cards: notMatchedCards, secondClick: false }),
                        300
                    )
                );
                return;
            }
        }
        this.setState({ cards: showingCards, secondClick: true });
    };

    render() {
        return (
            <div>
                <div className="title">
                    ИГРА МЕМОРИЈЕ
                </div>
                <div className="game">
                    <CardGrid handleClick={this.handleClick} cards={this.state.cards} />
                    <Newgame startNewGame={this.startNewGame} />
                </div>
            </div>

        );
    }
}

export default MemoryGame