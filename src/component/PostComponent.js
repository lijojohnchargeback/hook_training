import React, { Fragment } from "react";
import useApiCall from "./useApiCall";
const PostComponent = () => {
  let postApi = useApiCall(
    "https://jsonplaceholder.typicode.com/posts",
    "john@gmail.com"
  );
  let { api, data, email, name } = postApi; //object destructuring

  let commentApi = useApiCall(
    "https://jsonplaceholder.typicode.com/comments",
    "abc@gmail.com"
  );

  return (
    <Fragment>
      <div style={{ marginLeft: 10 }}>
        <h1>list of posts</h1>
        <h1>{name}</h1>
        <h1>{api}</h1>
        <h1>{email}</h1>
        {data.map((item) => (
          <p>{item.title}</p>
        ))}
      </div>
      <h1>This is comment</h1>
      <div>
        {commentApi.data.map((item) => (
          <p>{item.body}</p>
        ))}
      </div>
    </Fragment>
  );
};

export default PostComponent;
