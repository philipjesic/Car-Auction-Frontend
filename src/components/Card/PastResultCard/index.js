import {Card, Button, ButtonGroup} from 'react-bootstrap/';
import CarPhoto from '../../../temp/car-photo.jpg';
import { BiCheckSquare, BiStar } from 'react-icons/bi'

import propTypes from 'prop-types';

const PastResultCard = ({title, description, cardImage}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" className="AuctionListItem-img" src={cardImage} />
          <Card.ImgOverlay>
            <ButtonGroup pill className="me-2" aria-label="First group">
              <Button size="sm" variant="secondary"><BiCheckSquare /> Met Reserve - $8000</Button>
            </ButtonGroup>
          </Card.ImgOverlay>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <ButtonGroup size="sm" className="me-2" aria-label="First group">
            <Button style={{ border: "0px" }} variant="outline-warning">
              <BiStar />
            </Button>
            <Button style={{ border: "0px" }} variant="secondary">
              Ended 9/22/21
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </>
  )
}

PastResultCard.defaultProps = {
  title: 'No title currently available',
  description: 'No description currently available',
  cardImage: CarPhoto,
}

PastResultCard.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
}

export default PastResultCard;