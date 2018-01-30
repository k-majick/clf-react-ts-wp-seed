import * as React from 'react';
import PostList from '../components/PostList';
import AppState from '../AppState';

const appState = new AppState();

const About = () => (
  <div className="container">
    <h2>What about</h2>
    <PostList appState={appState} />
  </div>
)

export default About;
