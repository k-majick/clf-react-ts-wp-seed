import { observable, autorun, toJS } from 'mobx';

class AppState {
  @observable posts: any = []
  @observable totalPages: any = 0
  @observable menu: any = []

  fetchPosts() {
    return fetch('http://cyberleaf.pl/wp-json/wp/v2/posts')
      .then(res => Promise.all([
        res.headers.get('X-WP-TotalPages'),
        res.json()
      ]))
      .then(postsData => {
        this.totalPages = postsData[2];
        this.posts = postsData[1];
      });
  }

  fetchMenu() {
    return fetch('http://cyberleaf.pl/en/wp-json/wp-api-menus/v2/menus/2')
      .then(res => Promise.all([
        res.json()
      ]))
      .then(menuData => {
        this.menu = menuData[0].items;
      });
  }
}

export default AppState;
