import { useParams } from "react-router-dom";

const Post = () => {
  const { id, name } = useParams();

  return (
    <div>
      <h1>Post {id}</h1>
      <p>Name: {name}</p>
    </div>
  );
};

export default Post;
