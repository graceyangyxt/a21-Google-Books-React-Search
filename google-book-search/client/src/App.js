import React, {useState } from 'react';
import Navheader from "./components/Navheader";
import Jumbotronheader from "./components/Jumbotronheader";

import API from "./utils/API";
// import ViewBtn from "../ViewBtn";
// import SaveBtn from "../SaveBtn";
import { Input, SearchBtn } from "./components/SearchCard";
import { Container, Row, Col } from "./components/Grid";
import ResultsList from "./components/ResultsList";
import SingleBookCard from "./components/SingleBookCard";


function App() {
   // Setting our component's initial state
   const [books, setBooks] = useState([]);
   const [booksSearch, setBooksSearch] = useState("");

  const handleInputChange = event => {
    const{value}=event.target;
    setBooksSearch(value);
  };

  const handleFormSubmit = event =>{
    event.preventDefault();
    API.getBooks(booksSearch)
       .then(res=> setBooks(res.data))
       .catch(err=>console.log(err));
  };

  //  function handleFormSubmit(event){
  //      event.preventDefault();
  //      if (formObject.title) {
  //          API.saveBook({
  //            title: formObject.title
  //          })
  //            .then(res => loadBooks())
  //            .catch(err => console.log(err));
  //  }

   return(
     <div>
          <Navheader />
          <Jumbotronheader />
          <Container>
             <Row>
                  <Col size="xs-9 sm-10">
                      <Input 
                      onChange={handleInputChange}
                      name="BooksSearch"
                      value={booksSearch} />
                  </Col>
                  <Col size="xs-3 sm-2">
                      <SearchBtn
                      onClick={handleFormSubmit}
                      >
                      Search
                      </SearchBtn>        
                  </Col>
             </Row>
             <Row> 
                  <Col size="xs-12">
                      <ResultsList>
                        {books.map(book =>{
                              return (
                                <SingleBookCard 
                                  key={book.title}
                                  authors={book.authors}
                                  link={book.link}
                                  description={book.description}
                                  thumbnail={book.thumbnail}
          
                                  />
                              );                        
                            }
                        )}

                      </ResultsList>
                  </Col>
              </Row>
           </Container>
      </div>     
   );
}

export default App;
