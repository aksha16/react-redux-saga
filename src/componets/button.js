import React from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../redux/actions";

const Button = (props) => {
  const dispatch = useDispatch();
  console.log("actions====>>>>>", getNews, props);

  return (
    <div style={{ alignSelf: "center" }}>
      <button
        style={{
          backgroundColor: "hotpink",
          width: 250,
          height: 100,
          borderRadius: 100,
          margin: 50,
          fontSize: 25,
          border: "3px solid",
        }}
        onClick={() => dispatch(getNews())}
      >
        Press to see news
      </button>
    </div>
  );
};

export default Button;
