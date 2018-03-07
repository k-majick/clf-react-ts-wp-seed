import * as React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

interface Props {
  appState: any
}

interface State {
  posts: any
}

@observer
class PostList extends React.Component<Props, State> {

  componentDidMount() {
    this.props.appState.fetchPosts();
  }

  render() {
    const { posts } = this.props.appState;
    return (
      <div>
        {posts.map((post: any) =>
          <div dangerouslySetInnerHTML={{__html: post.title.rendered}} key={post.id} />
        )}
      </div>
    );
  }
}

export default PostList;
