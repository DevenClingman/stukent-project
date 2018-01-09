import React, { Component } from 'react';
import PostIndex from '../components/post-index';
import PostHeader from '../components/post-header';
import Header from '../components/header';
import Footer from '../components/footer';
import PostView from './post-view';
import { 
    BrowserRouter as Router, 
    Route,
    Link
} from 'react-router-dom';

import WebpackerReact from 'webpacker-react';

class App extends Component {
  render(){
    return(
      <div>
        <Header /> 
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/post/:id">Home</Link>
          </div>
       </Router>

       <Route exact path="/" component={ PostIndex } />
       <Route path="/post" component={ PostView } />
       <Footer />
      </div>
    )
  }
}