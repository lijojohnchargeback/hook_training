import React, { Fragment } from "react";
import useApiCall from "./useApiCall";
const UserComponent = () => {
  const userApi = useApiCall(
    "https://jsonplaceholder.typicode.com/users",
    "lijojohnrbs@gmail.com"
  );
  const { data, name } = userApi;
  return (
    <Fragment>
      <div style={{ marginLeft: 10 }}>
        <h1>list of users</h1>
        {data.map((user) => (
          <div>
            <p>{`Name is ${user.name} and email id is ${user.email} and username is ${user.username}`}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default UserComponent;
