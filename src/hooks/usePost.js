import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { from, map, mergeMap } from "rxjs";

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

  const fetchPostWithObservable = () => {
    from(axios.get("https://jsonplaceholder.typicode.com/posts"))
      .pipe(
        mergeMap((res) => {
          console.log("res", res);
          return res.data.map((item) => item.id);
        }),
        map((i) => i)
      )
      .subscribe((item) => {
        console.log(item);
      });
  };

  useEffect(() => {
    // fetchPosts();
    fetchPostWithObservable();
  }, []);

  return {
    posts,
  };
};

export default usePost;
