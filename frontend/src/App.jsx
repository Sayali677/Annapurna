import './App.css';
import { Card, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Recipe Book</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div className="container mt-3">
        <h1>Recipe Book</h1>
        <div className="row">
          <div className="col-md-4">
            <Card className="mb-4" key="spaghetti-carbonara">
              <Card.Img variant="top" src="path_to_image" alt="Spaghetti Carbonara" />
              <Card.Body>
                <Card.Title>Spaghetti Carbonara</Card.Title>
                <Card.Text>
                  A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.
                </Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4" key="chicken-curry">
              <Card.Img variant="top" src="path_to_image" alt="Chicken Curry" />
              <Card.Body>
                <Card.Title>Chicken Curry</Card.Title>
                <Card.Text>
                  A flavorful dish made with chicken, spices, and coconut milk.
                </Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="mb-4" key="chocolate-cake">
              <Card.Img variant="top" src="path_to_image" alt="Chocolate Cake" />
              <Card.Body>
                <Card.Title>Chocolate Cake</Card.Title>
                <Card.Text>
                  A rich and moist chocolate cake topped with chocolate frosting.
                </Card.Text>
                <Button variant="primary">View Recipe</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
