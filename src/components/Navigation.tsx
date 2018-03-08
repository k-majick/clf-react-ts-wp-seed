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
    return (
      <nav>
        {menu.map((item: any) =>
          <NavLink to={`/${item.object_slug}`} key={item.id}>{item.title}</NavLink>
        )}
      </nav>
    );
  }
}

export default Navigation;
