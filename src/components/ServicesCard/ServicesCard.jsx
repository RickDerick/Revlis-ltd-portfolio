// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ServiceCard.css"

function ServicesCard({title, text, photo}) {
  return (
    <Card className= "serviceCard" style={{ width: '16rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ServicesCard;