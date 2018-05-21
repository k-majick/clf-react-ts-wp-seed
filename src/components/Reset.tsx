import * as React from 'react';
import { inject, observer } from 'mobx-react';

interface Props {
  appState: any
}

@inject('AppState')
@observer
class Reset extends React.Component<Props, {}> {

  componentDidMount() {
    console.log(this.props.appState);
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <div>{this.props.appState.timer}</div>
        <button className="pure-button" onClick={this.props.appState.add}>
          add
        </button>
      </div>
    );
  }
}

export default Reset;
