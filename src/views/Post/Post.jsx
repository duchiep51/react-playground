import usePost from "../../hooks/usePost";

const Post = () => {
  const { posts } = usePost();
  
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
