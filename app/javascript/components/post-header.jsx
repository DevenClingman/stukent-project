import React, { Component } from 'react';

class PostHeader extends Component {
  render(){
    return (
      <div className="text-center">
        <h1>Posts</h1>
          <a href="#" className="btn btn-primary btn-lg">New Post</a>
        <br/><br/>
    </div> 
    )
  }
}

export default PostHeader;