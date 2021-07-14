import React, { useState, useEffect } from "react";
import SavedBooksList from "../components/SavedBooksList";

import { Link } from "react-router-dom";

import Navheader from "./components/Navheader";
import Jumbotronheader from "./components/Jumbotronheader";

import API from "./utils/API";
import ViewBtn from "../ViewBtn";
import { Container, Row, Col } from "./components/Grid";

import SingleBookCard from "./components/SingleBookCard";


function App() {

 
   

   return(
     <div>
          <Navheader />
          <Jumbotronheader />
          <Container>
             <Row> 
                  <Col size="xs-12">
                      <SavedBooksList>
                        {books.map(book =>{
                              return (
                                <SingleBookCard 
                                  key={book.title}
                                  authors={book.authors}
                                  link={book.link}
                                  description={book.description}
                                  thumbnail={book.thumbnail}
          
                                  />,
                                <ViewBtn />
                                
                              );                        
                            }
                        )}

                      </SavedBooksList>
                  </Col>
              </Row>
           </Container>
      </div>     
   );
}

export default App;
