import React, { Fragment } from "react";
import PostComponent from "./component/PostComponent";
import UserComponent from "./component/UserComponent";
const App = () => {
  return (
    <Fragment>
      <UserComponent />
      <br />
      <PostComponent />
    </Fragment>
  );
};

export default App;
