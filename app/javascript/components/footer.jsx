import React, { Component } from 'react';

class Footer extends Component {
  render(){
    console.log(this.props.copyright)
    return (
      <div className="text-center">
        <hr/>
        <h4>&copy; { this.props.year } <strong>{ this.props.name }</strong> { this.props.rights_reserved }</h4>
      </div>
    )
  }
}

export default Footer;