import React from 'react'
import { Card,CardGroup,Button } from 'react-bootstrap'
import soya from "./img/SOYA.jpg"

function CardGrop() {
  return (
      <>
    <br/>
    <br/>
    <br/>
    <CardGroup>
        
    <Card>
      <Card.Img variant="top" src={soya} />
      <Card.Body>
        <Card.Title>SOYABEAN</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button>
        Bid
      </Button>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>COTTON</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button>
        Bid
      </Button>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title> MANGO</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button>
        Bid
      </Button>
      </Card.Footer>
    </Card>
  </CardGroup>
  </>
  )
}

export default CardGrop