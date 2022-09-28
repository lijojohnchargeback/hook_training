import React from "react";
import axios from "axios";

const useApiCall = (api, email) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    let apiCall = async () => {
      try {
        const res = await axios.get(api);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    return apiCall;
  }, []);

  let name = "Lijo John";

  return { data, name, api, email };
};

export default useApiCall;
