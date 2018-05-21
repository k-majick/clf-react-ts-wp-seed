import * as React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';

interface Props {
  appState: any
}

@observer
class Navigation extends React.Component<Props, {}> {

  componentDidMount() {
    this.props.appState.fetchMenu();
    console.log(this.props.appState);
  }

  render() {
    const { menu } = this.props.appState;
    return (
      <nav>
        {menu.map((item: any) =>
          <NavLink to={`/${item.object_slug}`} key={item.id}>{item.title && <p>{item.title}</p>}</NavLink>          
        )}
      </nav>
    );
  }
}

export default Navigation;
