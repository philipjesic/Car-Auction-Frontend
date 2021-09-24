import {
  Nav,
  Navbar,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import { BiStar } from "react-icons/bi";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Auction Source</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Auctions" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Live Auctions</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Previous Results
              </NavDropdown.Item>
            </NavDropdown>
            <Nav>
          </Nav>
          <Nav>
            <Button variant="outline-warning" href="#deets">
              <BiStar/>
              {" "} Favourites
            </Button>{" "}
          </Nav>
            <Nav.Link href="#pricing">Sales Data</Nav.Link>
            <i class="cis-magnifying-glass"></i>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-5"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav>
            <Button variant="danger" href="#deets">
              Sell Here!
            </Button>{" "}
            <Button href="#deets">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
