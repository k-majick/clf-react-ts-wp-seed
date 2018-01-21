import * as React from 'react';

function Welcome(props: any) {
  return <h1>Welcome, {props.name}</h1>;
}

const Home = () => (
  <div className="container">
    <Welcome name="Anonymous" />
  </div>
)

export default Home;
