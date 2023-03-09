import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const usePost = () => {
  const [posts, setPosts] = useState([]);
  const notify = () => {
    // toast("Wow so easy !");

    toast.success("success!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("res ok", res.ok);
    console.log(res.status)
    const posts = await res.json();
    notify();
    console.log("post", posts);
    setPosts(posts);
    // return posts
  };

  useEffect(() => {
    console.log('over here')
    fetchPosts();
  }, []);

  return {
    posts,
  };
};

export default usePost;
