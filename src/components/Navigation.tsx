import * as React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

interface Props {
  appState: any
}

interface State {
  posts: any
}

@observer
class Navigation extends React.Component<Props, State> {

  componentDidMount() {
    this.props.appState.fetchMenu();
  }

  render() {
    const { menu } = this.props.appState;
    console.log(this.props.appState);
    return (
      <div>
        {menu.map((menu: any) =>
          <span dangerouslySetInnerHTML={{__html: menu.items}} key={menu.items[0].id} />
        )}
      </div>
    );

  }
}

export default Navigation;
