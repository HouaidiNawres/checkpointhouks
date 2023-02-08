import React,{useState} from 'react';
import { Container , Navbar } from 'react-bootstrap';
import ReactStars from 'react-stars'
import { Button , Modal} from 'bootstrap';


const navi = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
                       Movie App
          </Navbar.Brand>
          <input type="text" placeholder='Enter Movie Title' />
          <ReactStars
  count={5},
  size={24},
  color2={'#ffd700'} half={false} />
  <Button variant="warning" onClick={handleShow}>Add Movie</Button>{' '}
        </Container>
      </Navbar>
    

         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label>Movie Title</label>
            <input type="text" /><label>Movie Trailer</label><label>Movie image</label><input type="text" /><label>Movie description</label><input type="text" /><label>Movie Title</label><input type="text" /><label>Movie rating</label><input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default navi
