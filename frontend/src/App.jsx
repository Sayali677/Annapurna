import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './Routes/auth'; // Importing the Auth component
import { Card, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import Footer from './Footer'; // Ensure Footer is imported

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Annapurna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">receipes</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
          <Nav.Link href="/auth">Login/Register</Nav.Link>
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
              <Card.Img variant="top" src="https://via.placeholder.com/150?text=Spaghetti+Carbonara" alt="Spaghetti Carbonara" />
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
              <Card.Img variant="top" src="https://via.placeholder.com/150?text=Chicken+Curry" alt="Chicken Curry" />
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
              <Card.Img variant="top" src="https://via.placeholder.com/150?text=Chocolate+Cake" alt="Chocolate Cake" />
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
      <Footer />
    </Router>
  );
}

export default App;
