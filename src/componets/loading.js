import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((state) => state.loading);
  console.log("isloading?", isLoading);

  return isLoading ? (
    <div>
      <img src="771.gif" alt="loading" />
      <h1>LOADING</h1>
    </div>
  ) : null;
};

export default Loading;
