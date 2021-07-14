import React from "react";
import Thumbnail from "../Thumbnail";
import "./style.css";
import { Container, Row, Col } from "../Grid";


function SingleBookCard({
    thumbnail,
    title,
    authors,
    description,
    link
}){
    return(
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                       <Thumbnail src={thumbnail || "https://placehold.it/300x300"}/>
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>
                        <h4>{authors}</h4>
                        <p>{description}</p>
                        <a rel="noreferrer noopener" target="_blank" href={link}>
                        check this book!
                        </a>
                    </Col>

                </Row>
            </Container>
        </li>
    );
}

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// function SingleBookCard(props) {
//   return (
//     <Card style={{ width: '80rem' }}>
//         <Card.Body>
//             <Card.Title>{title}</Card.Title>
//             <Card.Text>{authors} </Card.Text>
//             <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />     
//             <Card.Link href="#">{link}</Card.Link>
//         </Card.Body>

//         <Card.Body>
//             <Card.Text>{description} </Card.Text>    
//         </Card.Body>
//   </Card>
//   );
// }

export default SingleBookCard;