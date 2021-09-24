import { Card, Button, ButtonGroup } from "react-bootstrap/";
import CarPhoto from "../../../temp/car-photo.jpg";
import { BiLocationPlus, BiStar } from "react-icons/bi";

import propTypes from "prop-types";

const BuyNowCard = ({ title, description, cardImage }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            className="AuctionListItem-img"
            src={cardImage}
          />
          <Card.ImgOverlay>
            <ButtonGroup pill className="me-2" aria-label="First group">
              <Button size="sm" variant="warning">
                <BiLocationPlus /> Location
              </Button>
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
              Asking $15 000
            </Button>
          </ButtonGroup>
        </Card.Footer>
      </Card>
    </>
  );
};

BuyNowCard.defaultProps = {
  title: "No title currently available",
  description: "No description currently available",
  cardImage: CarPhoto,
};

BuyNowCard.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
};

export default BuyNowCard;
