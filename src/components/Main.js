import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import AllCards from './allcards'

const baseURL = "https://api.tvmaze.com/search/shows?q=all";

const Main = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) {
    return null;
  }

  return (
    <div
      className="container d-flex flex-wrap justify-content-center justify-content-between"
      style={{ marginTop: "30px", marginBottom: "30px", height: "100%" }}
    >
      {post.map((items) => {
                return <AllCards data = {items} />
      }
      )}
    </div>
  );
};

export default Main;
