import React from "react";


import "./style.css";
import ViewBtn from "../ViewBtn";
import SaveBtn from "../SaveBtn";
import SingleBookCard from "../SingleBookCard";


function ResultsList({ children }) {
  return (
    <ul className="list-group">
      <h1>Results</h1>
      {children}
      {/* <Container>
          <SingleBookCard />
          <ViewBtn />
          <SaveBtn />
      </Container> */}
    </ul>
  );
}

export default ResultsList;
