import * as React from 'react';
import * as Component from 'react';

interface IMyComponentProps {
  someDefaultValue: string
}

interface IMyComponentState {
  someValue: string
}

class Home extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = { someValue: this.props.someDefaultValue };
  }

  public render() {
    return (
      <div className="container">
      Value set as {this.state.someValue}
      </div>
    );
  }
}

/*
  function Welcome(props: any) {
    return <h1>Welcome, {props.name}</h1>;
  }

const Home = () => (
  <div className="container">
    <Welcome name="Anonymous" />
  </div>
)
*/

export default Home;
