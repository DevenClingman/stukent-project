// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import PostIndex from '../components/post-index';
import PostHeader from '../components/post-header';
import Header from '../components/header';
import Footer from '../components/footer';
import PostView from '../components/post-view';
import App from '../components/App';
import WebpackerReact from 'webpacker-react';

WebpackerReact.setup({PostIndex});
WebpackerReact.setup({PostHeader});
WebpackerReact.setup({Header});
WebpackerReact.setup({Footer});
WebpackerReact.setup({PostView});
WebpackerReact.setup({App});


