import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '../css/nav.css';
function Ns() {
  return (
    <>
    <Navbar className="bg-s" variant="dark" expand="lg">
    <Navbar.Brand>
      INVESTOMENTOR
   </Navbar.Brand>
  <Navbar.Toggle/>
  <Navbar.Collapse>
  <Nav >
      <Nav.Link 
  className='tx'>
Why us?
      </Nav.Link>
      <Nav.Link className='tx'>


Memberships
</Nav.Link>
<Nav.Link className='tx'>
Contact Us
</Nav.Link>
<Nav.Link className='tx'>
About Us
</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  
    </Navbar>
  <Navbar className="s-foot" variant="dark" fixed="bottom">
    <Navbar.Brand>
    @2022 INVESTOMENTOR
    </Navbar.Brand>
   </Navbar>
 </>
  );
}

export default Ns;