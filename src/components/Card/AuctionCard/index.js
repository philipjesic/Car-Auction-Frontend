import { Card, Button, ButtonGroup } from "react-bootstrap/";
import CarPhoto from "../../../temp/car-photo.jpg";
import { BiTimeFive, BiStar, BiMap } from "react-icons/bi";

import propTypes from "prop-types";

const AuctionCard = ({ title, description, cardImage }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={cardImage} />
          <Card.ImgOverlay>
            <ButtonGroup className="me-2" aria-label="First group">
              <Button size="sm" variant="info">
                <BiTimeFive /> 10:00:00
              </Button>
              <Button size="sm" variant="success">
                {" "}
                $ 5000
              </Button>
            </ButtonGroup>
          </Card.ImgOverlay>
          <Card.Title className="mb-1">{title}</Card.Title>
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
              69 Bids
            </Button>
          </ButtonGroup>
          <BiMap />
          <small >San Diego, CA</small>
        </Card.Footer>
      </Card>
    </>
  );
};

AuctionCard.defaultProps = {
  title: "No title currently available",
  description: "No description currently available",
  cardImage: CarPhoto,
};

AuctionCard.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
};

export default AuctionCard;
