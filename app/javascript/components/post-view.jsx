import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostView extends Component {

  render(){
    return(
      <div>
        <div className="card">
          <div className="card-header">
            <div className="card-title h2 text-center">{ this.props.title } about factorials { this.props.factorial }</div>
          </div>
          <div className="card-body">
            <p>{ this.props.body }></p>
          </div>
          <div className="card-footer text-center">
            <p>Published: <span className="btn btn-primary btn-sm">{ this.props.published }</span></p>
          </div>
        </div>

        <div className="text-center">
          <br/><br/>
          <button onClick={ this.factorialChangeHandler } className="btn btn-primary btn-sm">Edit</button>
          <span> | </span>
          <button className="btn btn-success btn-sm">Back</button>
        </div>
      </div>
    )
  }
}

export default PostView;