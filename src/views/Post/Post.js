import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useEffectOnMount from "../../hooks/useEffectOnMount";
import usePost from "./usePost";

const Post = () => {
  //   const [posts, setPosts] = useState([]);
  const { posts } = usePost();
  
  //   const fetchPosts = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     console.log("res", res);
  //     const posts = await res.json();
  //     console.log("post", posts);
  //     setPosts(posts);
  //     // return posts
  //   };

  //   useEffectOnMount(() => fetchPosts(), []);

  console.log("outside");

//   useEffect(() => {
//     // console.log("hello", state);
//     // return () => {
//     //   console.log("unmount");
//     // };
//     //   fetchPosts();
//     console.log("here");
//   }, []);

  return (
    <div>
      {posts.map((p, index) => (
        <div key={p.id}>
          <p>
            {index}-{p.title}
          </p>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
