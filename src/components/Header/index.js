import React from 'react';
import './header.css'
import logo from '../../images/ssbu.jpg'

class Header extends React.Component {

  render() {
    return (
      <div id='wrapper'>
          <div className="d-flex bd-highlight mb-3">
            <div className="mr-auto p-2 bd-highlight"><h3>Super Smash Memory Game</h3></div>
            <div className="p-2 bd-highlight"><h4>Click on a card to start!</h4></div>
            <div className="p-2 bd-highlight"><h4>Score:{this.props.score}</h4></div>
          </div>
          <div className="text-center">        
          <img id='logo' src={logo} alt='logo'/>
          </div>
      </div>
    );
  }

}

export default Header;

