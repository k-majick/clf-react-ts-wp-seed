import * as React from 'react';
import { inject, observer } from 'mobx-react';

interface Props {
  appState: any
}

interface State {
  count: number;
}

@inject('AppState')
@observer
class Reset extends React.Component<Props, State> {

  constructor(props: any, state: any) {
    super(props);
    this.state = { count: 66 };
  }

  componentDidMount() {
    console.log(this.props.appState);
  }

  handleChange(e: any): void {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        Current count: {this.state.count}

        <div>{this.props.appState.timer}</div>

        <button className="pure-button" onClick={this.props.appState.add}>
          add p
        </button>
        <button className="pure-button" onClick={this.props.appState.reset}>
          reset
        </button>

        <button className="pure-button" onClick={ e => this.handleChange(e) }>
          modify s
        </button>
      </div>
    );
  }
}

export default Reset;
