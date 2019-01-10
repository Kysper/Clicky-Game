import React from 'react';
import './header.css'
import logo from '../../images/ssbu.jpg'

class Header extends React.Component {

  render() {
    return (
      <div id='wrapper'>
          <div className="d-flex bd-highlight mb-3">
            <div className="mr-auto p-2 bd-highlight">SB Memory Click</div>
            <div className="p-2 bd-highlight">Click on a card to start!</div>
            <div className="p-2 bd-highlight">Score:{this.props.score}</div>
          </div>
          <div class="text-center">        
          <img id='logo' src={logo} alt='logo'/>
          </div>
      </div>
    );
  }

}

export default Header;

