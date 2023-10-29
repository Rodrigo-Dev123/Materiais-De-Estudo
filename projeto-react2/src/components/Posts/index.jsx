import { useContext, useEffect, useRef } from "react";
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";
import { decrementCounter, incrementCounter } from "../../contexts/CounterProvider/action";

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;


  useEffect(() => {
    isMounted.current = true;
    loadPosts(postsDispatch).then((dispatch) => {
      if(isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
      console.log(isMounted.current);
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter {counterState.counter}+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Counter {counterState.counter}-</button>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

