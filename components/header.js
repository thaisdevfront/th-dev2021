import {
    Navbar,
    Nav,  
    Row,
    Container,
    Col,
    }from 'react-bootstrap';
  import Image from 'next/image'; 

  function Header(){
    return   <div>  
  {/* HEADER */}
    <Navbar expand="md" className="p-3 pt-1 pb-1">
      <Navbar.Brand href="#home">
            <img
            className="img-fluid"
            src="/logo_thais.png" 
            alt="logo.png"
            />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end align-items-center">
        <Nav className="pt-2">
          <Nav.Link className="text-white pt-2" href="#home">Sobre Mim</Nav.Link>
          <Nav.Link className="text-white pt-2" href="#portfolio">Habilidades</Nav.Link>
          <Nav.Link className="text-white pt-2" href="#skills">Portfólio</Nav.Link>
          <Nav.Link className="btn btn-primary text-white rounded-pill p-2 shadow-sm" href="https://wa.me/+5512983171532?text=">Contrate &nbsp; <i className="fab text-sucess fa-whatsapp"></i></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
  }

export default Header
 