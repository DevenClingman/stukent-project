import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <header className="navbar">
        <section className="navbar-section">
          <div className="navbar-brand mr-2">Champ</div>
          <a href="#" className="btn btn-link">View Posts</a>
        </section>
      </header>
    )
  }
}

export default Header;