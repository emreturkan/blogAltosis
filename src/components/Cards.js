import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./CardItem";
const Cards = ({ routeName }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${routeName}`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="d-flex justify-content-around align-items-around flex-wrap  mt-5 mb-5">
      {posts.map(post => (
        <CardItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Cards;
