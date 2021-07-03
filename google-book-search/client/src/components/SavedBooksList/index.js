import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";
import SingleBookCard from "../SingleBookCard";
import ViewBtn from "../ViewBtn";
import DeleteBtn from "../DeleteBtn";


function SavedBooksList({ children }) {
  return (
    <div className="list-overflow-container">
      <h1>Saved</h1>
      <Container>
          <SingleBookCard />
          <ViewBtn />
          <DeleteBtn />
      </Container>
    </div>
  );
}

export default SavedBooksList;


