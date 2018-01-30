import { observable, autorun, toJS } from 'mobx';

class AppState {
  @observable posts: any = []
  @observable totalPages: any = 0

  fetchPosts() {
    return fetch('http://cyberleaf.pl/wp-json/wp/v2/posts')
      .then(res => Promise.all([
        res.headers.get('X-WP-TotalPages'),
        res.json(),
      ]))
      .then(postsData => {
        this.totalPages = postsData[0]
        this.posts = postsData[1]
      });
  }
}

export default AppState;
