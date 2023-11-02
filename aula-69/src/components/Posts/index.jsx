import P from 'prop-types';
import './styles.css';

import { PostCard } from '../PostCard';
export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard cover={post.cover}
        key={post.id}
        alt={post.title}
        id={post.id}
        title={post.title}
        body={post.body} />
    ))}
  </div>
);

// Posts.defaultProps = {
//   posts: [],
// }

Posts.propTypes = {
  posts: P.arrayOf(P.shape({
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired,
  })),
}
