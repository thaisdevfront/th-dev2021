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
                <Container>
                  <Row>
                    <Col>
                      <Navbar bg="transparent" expand="lg" className=" p-0 pt-2 pb-2">
                        <Navbar.Brand href="#home">
                           
                              <img
                              className="img-fluid"
                              src="/logo_thais.png" 
                              alt="First slide"
                              />

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 p-0" />
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="ml-auto">
                            <Nav.Link className="text-white" href="#home">Sobre Mim</Nav.Link>
                            <Nav.Link className="text-white" href="#portfolio">Habilidades</Nav.Link>
                            <Nav.Link className="text-white" href="#skills">Portfólio</Nav.Link>
                            <Nav.Link className="btn btn-primary text-white rounded-pill p-2 shadow-sm" href="https://wa.me/+5512983171532?text=">Contrate &nbsp; <i className="fab text-sucess fa-whatsapp"></i></Nav.Link>
                           
                          </Nav>
                        </Navbar.Collapse>
                      </Navbar>
                    </Col>
                  </Row>
                </Container>
                {/* END: HEADER */}
            </div>
  }

export default Header
 