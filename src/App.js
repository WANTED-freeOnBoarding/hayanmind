import React, { useState, useEffect, useRef, useCallback } from "react";
import Comments from "./Comments";
import styled from "styled-components";

const URL = `https://jsonplaceholder.typicode.com/comments`;
const LIMIT = 10;

function App() {
  const [data, setData] = useState([]);
  const isEnd = useRef(false);
  const page = useRef(1);
  const loadRef = useRef();

  const getCommentAPI = async () => {
    try {
      const response = await fetch(
        `${URL}?_page=${page.current}&_limit=${LIMIT}`
      );
      const comments = await response.json();
      page.current += 1;
      console.log(comments);
      return comments;
    } catch (e) {
      console.log(`error: ${e}`);
    }
  };

  const setDataApi = useCallback(async () => {
    const commentData = await getCommentAPI();
    if (commentData.length === 0) {
      isEnd.current = true;
    }
    setData((data) => [...data, ...commentData]);
  }, []);

  const observerHandler = ([entry]) => {
    if (entry.isIntersecting && isEnd.current !== true) {
      setDataApi();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(observerHandler, options);

    observer.observe(loadRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <MainContainer>
      {data.map((x) => (
        <Comments key={x.id} id={x.id} email={x.email} comment={x.body} />
      ))}
      <div className="crash" ref={loadRef} />
    </MainContainer>
  );
}

const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
