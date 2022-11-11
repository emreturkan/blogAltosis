import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import SingleCard from "../components/SingleCard";
const PostSingle = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);
  const getPost = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPostComments = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
    getPostComments();
  }, []);

  return (
    <>
      <Navbar />
      <SingleCard {...post} comment={comment} />
    </>
  );
};

export default PostSingle;
