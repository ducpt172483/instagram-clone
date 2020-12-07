import React, { useEffect, useState } from "react";
import postApi from "../../api/postApi";
import PostList from "./components/PostList";

PostFeature.propTypes = {};

function PostFeature(props) {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await postApi.getAll();
      // console.log(postList.data);

      setPostList(postList.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <PostList postList={postList} />
    </div>
  );
}

export default PostFeature;
