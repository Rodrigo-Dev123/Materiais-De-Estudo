import { useCallback, useEffect, useState } from 'react';

import './styles.css';


import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    :
    posts;


  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  useEffect(() => {
    console.log(new Date().toLocaleString('pt-br'))
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }


  return (
    <section className='container'>
      <div className='search-container'>
        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>
        )}

        <TextInput
          searchValue={searchValue}
          handleChange={handleChange}
        />
      </div>


      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}
      {filteredPosts.length === 0 && (
        <p>Não existem posts =(</p>
      )}


      <div className="button-container">
        {!searchValue && (
          <Button
            text="Load more posts"
            onClick={loadMorePosts}
            disabled={noMorePosts}
          />
        )}

      </div>

    </section>
  );
}

// export class Home extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: ''
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   };

//   componentDidUpdate() {
//     console.log(this.props);
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;

//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   };

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       posts
//     } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value })
//   }

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchValue ?
//       posts.filter(post => {
//         return post.title.toLowerCase().includes(
//           searchValue.toLowerCase()
//         );
//       })
//       :
//       posts;

//     return (
//       <section className='container'>
//         <div className='search-container'>
//           {!!searchValue && (
//             <h1>Search value: {searchValue}</h1>
//           )}

//           <TextInput
//             searchValue={searchValue}
//             handleChange={this.handleChange}
//           />
//         </div>


//         {filteredPosts.length > 0 && (
//           <Posts posts={filteredPosts} />
//         )}
//         {filteredPosts.length === 0 && (
//           <p>Não existem posts =(</p>
//         )}


//         <div className="button-container">
//           {!searchValue && (
//             <Button
//               text="Load more posts"
//               quandoClica={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}

//         </div>

//       </section>
//     );
//   }
// }
