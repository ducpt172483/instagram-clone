import React from "react";
import PostForm from "../PostForm";

PostUpload.propTypes = {};

function PostUpload(props) {
  const handleSubmit = (values) => {
    console.log("Form Submit: ", values);
  };
  return (
    <div>
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
}

export default PostUpload;
