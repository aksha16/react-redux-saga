import React from "react";
import Button from "./componets/button";
import  Loading  from "./componets/loading";
import NewsItem from './componets/newsItem';
const App = () => {
  return (
    <div style={{textAlign:'center'}}>
    <Button />
    <NewsItem />
      <Loading />
    </div>
  );
};

export default App;
