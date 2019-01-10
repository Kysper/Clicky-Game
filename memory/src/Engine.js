import React from 'react';
import Header from './components/Header';
import Card from './components/Card'
import cardImg from './images.json'
import './Engine.css'

class Engine extends React.Component {
  state = {
    cardImg,
    clickedCards:[],
    score:0,
  }

  imageClick = event => {
    const currentCard = event.target.alt;
    const cardsClicked = this.state.clickedCards.indexOf(currentCard) > -1;
  
   if(cardsClicked){
    this.setState({
      cardImg: this.state.cardImg.sort(function(a,b){
        return 0.5 - Math.random();
      }),
    clickedCards:[],
    score:0
    })
    alert('You lose. Click a card to play again!')
    } else {
    this.setState({
      cardImg: this.state.cardImg.sort(function(a,b){
        return 0.5 - Math.random()
      }),
      clickedCards: this.state.clickedCards.concat(currentCard),
      score:this.state.score + 1
    },
    () => {
      if(this.state.score === 16) {
        alert('Congrats you win!')
        this.setState({
          cardImg: this.state.cardImg.sort(function(a,b){
            return 0.5 - Math.random();
          }),
        clickedCards: [],
        score:0
        })
      }
    })
  }
}
render() {
  return (
    <div>
    <Header
    score={this.state.score}
    highScore={this.state.highScore}/>
    <div className='wrapper'>
    {this.state.cardImg.map(cardImg => (
    <Card
    imageClick={this.imageClick}
    id={cardImg.id}
    key={cardImg.id}
    image={cardImg.image}
    />))}
    </div>
    </div>
  )
  }
}
export default Engine;