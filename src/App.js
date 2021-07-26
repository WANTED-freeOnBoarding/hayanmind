import React, { useState, useEffect } from "react";
import Comments from "./Comments";

const URL = `https://jsonplaceholder.typicode.com/comments`;
let PAGE = 1;
const LIMIT = 10;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const setDataApi = async () => {
      const commentData = await getCommentAPI();
      setData(commentData);
      console.log(commentData);
    };
    setDataApi();
  }, []);

  const getCommentAPI = async () => {
    try {
      const response = await fetch(`${URL}?_page=${PAGE}&_limit=${LIMIT}`);
      const comments = await response.json();

      return comments;
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  return (
    <div className="App">
      {data.map((x) => (
        <Comments key={x.id} id={x.id} email={x.email} comment={x.body} />
      ))}
    </div>
  );
}

export default App;
