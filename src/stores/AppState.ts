import { observable, action } from 'mobx';

class AppState {

  @observable posts: any = []
  @observable totalPages: any = 0
  @observable menu: any = []
  @observable timer: number = 1

  @action add = (): void => {
    this.timer++;
  };

  @action reset = (): void => {
    this.timer = 0;
  };

  constructor() {
    setInterval(() => {
      this.timer += 1;
    }, 1000);
  }

  fetchPosts(postType: string) {
    return fetch(`http://cyberleaf.pl/wp-json/wp/v2/posts/?per_page=2`)
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
    return fetch('http://cyberleaf.pl/en/wp-json/wp-api-menus/v2/menus/16')
      .then(res => Promise.all([
        res.json()
      ]))
      .then(menuData => {
        this.menu = menuData[0].items;
      });
  }

  fetchPost(slug: string) {
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

}

export default AppState;
