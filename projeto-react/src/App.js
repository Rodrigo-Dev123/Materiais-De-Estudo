import { Component } from 'react';

import './App.css';

import { PostCard } from './components/PostCard';
import { loadPosts } from './utils/load-posts';

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className="posts">
          
          {posts.map(post => (
            <PostCard cover={post.cover}
            alt={post.title}
            key={post.id}
            title={post.title}
            body={post.body} />
          ))}
        </div>
      </section>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

