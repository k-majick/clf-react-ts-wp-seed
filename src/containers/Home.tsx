import * as React from 'react';
import PostList from '../components/PostList';
import AppState from '../stores/AppState';

const appState = new AppState();

const Home = () => (
  <div className="container">
    <h2>Articles</h2>
    <PostList appState={appState} />
  </div>
)

export default Home;
