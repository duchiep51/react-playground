import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const usePost = () => {
  const [posts, setPosts] = useState([]);
  const notify = () => {
    toast.success("success!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    notify();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
  };
};

export default usePost;
