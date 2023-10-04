import './styles.css';

import { PostCard } from '../PostCard';
export const Posts = ({ posts }) => (
    <div className="posts">
        {posts.map(post => (
            <PostCard cover={post.cover}
                alt={post.title}
                id={post.id}
                title={post.title}
                body={post.body} />
        ))}
    </div>
)