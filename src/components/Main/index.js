import AuctionCard from "../Card/AuctionCard";
import BuyNowCard from "../Card/BuyNowCard";
import PastResultCard from "../Card/PastResultCard";
import Header from "../Header";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../../api";

const Main = () => {
  const [liveAuctions, setLiveAuctions] = useState([]);

  useEffect(() => {
    api.get("car-auction-listings/", {
      params: {
        featured: "true",
      },
    }).then((response) => {
      console.log(response.data);
      setLiveAuctions(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <Container id="Header">
        <Header></Header>
      </Container>
      <Container id="LiveAuctions">
        <h1>
          Live Auctions <Button variant="secondary">See All</Button>
        </h1>
        <Row xs={2} md={4} className="g-4">
          {liveAuctions.map((auction, idx) => (
            <Col>
              <AuctionCard title={auction.title}></AuctionCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container id="BuyNow">
        <h1>
          Buy Now <Button variant="secondary">See All</Button>
        </h1>
        <Row xs={2} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <BuyNowCard></BuyNowCard>
            </Col>
          ))}
        </Row>
      </Container>
      <Container id="Previous Results">
        <h1>
          Past Results <Button variant="secondary">See All</Button>
        </h1>
        <Row xs={2} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <PastResultCard></PastResultCard>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Main;
