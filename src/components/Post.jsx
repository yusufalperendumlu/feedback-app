import { Navigate, useNavigate, Routes, Route } from "react-router-dom";

const Post = () => {
  // const { id, name } = useParams();
  const status = 200; // çalışma durumunu belirtme
  const navigate = useNavigate();

  const onClick = () => {
    console.log("hello");
    navigate("/about");
  };

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  return (
    <div>
      <h1>Post</h1>
      {/* <p>Name: {name}</p> */}
      <button onClick={onClick}>Click</button>

      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
