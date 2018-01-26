import * as React from 'react';

interface Props {
  posts: any
}

interface State {
  posts: any
}

class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    let dataURL = "http://cyberleaf.pl/wp-json/wp/v2/posts";
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          posts: res
        })
      })
  }

  render() {
    let posts = this.state.posts.map((post: any, index: any) => {
      return <div key={index}>
      <p>{post.title.rendered}</p>
      </div>

    });
    return (
     <div className="container">
      <h2>Articles</h2>
      {posts}
     </div>
    )
  }
}

export default Home;
