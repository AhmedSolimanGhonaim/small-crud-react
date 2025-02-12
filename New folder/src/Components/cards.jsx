
import '../styles/instructors.css';

import instructor1 from "../assets/imgs/person2-1.jpg";
import instructor2 from "../assets/imgs/person3-1.jpg";
import instructor3 from "../assets/imgs/person5-1.jpg";
import instructor4 from "../assets/imgs/person6-1.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



const instructors = [
  { id: 1, name: "Mona Ahmed", bio: "Expert in Web Development", img: instructor1 },
  { id: 2, name: "Abdallah Ali", bio: "Data Science Specialist", img: instructor2 },
  { id: 3, name: "Asmaa Hassan", bio: "Cybersecurity Expert", img: instructor3 },
  { id: 4, name: "Eslam Mohamed", bio: "UI/UX Design Guru", img: instructor4 },
];

const Cards = function (){
  return (


    <section className='instructors'>
      <Container>
        <Row>

          {instructors.map((instructor) => (

            <Col key={instructor.id}>

              <Card >
                <Card.Img variant="top" src={instructor.img} alt={instructor.name}  />
                <Card.Body>
                  <Card.Title>{instructor.name}</Card.Title>
                  <Card.Text>{instructor.bio}</Card.Text>
                </Card.Body>
              </Card>

            </Col>

          ))}

        </Row>
      </Container>
    </section>

   
  );
};

export default Cards;
