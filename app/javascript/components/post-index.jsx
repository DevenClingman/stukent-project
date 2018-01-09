import React, { Component } from 'react';

class PostIndex extends Component {
  render() {
    console.log(this.props.published);
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <div className="card-title h3 text-center">{ this.props.title } about { this.props.factorial }</div>     
          </div>
          <div className="card-body">
            { this.props.body }...        
          </div>
          <div className="card-footer">
            Published: { this.props.published }<br/><br/>
          </div>
          <div className="text-center">
            <a href="#" className="btn btn-primary btn-sm">View</a>
            <a href="#" className="btn btn-success btn-sm">Edit</a>
            <a href="#" className="btn btn-error btn-sm">Delete</a>
          </div>
        </div>
        <br/>
      </div>
    )
  }
}

export default PostIndex;

