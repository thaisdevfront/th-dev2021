import {
    Navbar,
    Nav, 
    Carousel,
    Row,
    Container,
    Col,
    Card,
    Button, 
    }from 'react-bootstrap';
    import Image from 'next/image'; 
  
   
    function Benefits(){
      return   <div>
    <section className="benefits mt-5 pt-md-3">
        <Container>
          <Row>
              <Col xs={12} md={6} lg={4} className="">
                   <div className="p-0 d-flex align-items-center mb-2">
                      <span class="badge badge-pill badge-danger text-danger align-items-center">.</span>
                      <h6 className="text-muted pt-2 ml-2">Vantagens </h6>
                      </div>
                  <h2  className="h1 text-primary-main mb-3">
                      Aplicações rápidas que  <strong> otimizam o envolvimento.</strong>
                  </h2>
                  <p className="mt-4 mb-4 ">
                      Conheça vantagens de se obter uma aplicação fluida e de auto desempenho para seu negócio.
                  </p>
                  <div className="buttons d-flex pt-md-4">
                      <a className="rounded-pill mr-2 btn btn-danger" href="#portfolio">Ver Portfólio</a>
                      <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main ml-2">Habilidades</Button>{' '}
                  </div>
              </Col>
              <Col lg={4}  className="justify-content-center align-items-start d-none d-lg-flex pt-md-2"> 
                  <Image className="img-fluid"
                      src="/mockup_benefits.png"
                      alt="Picture of the author"
                      width={485}
                      height={870}
                      />
              </Col>
              <Col xs={12} md={6} lg={4} className="pt-5 p-md-2 pl-md-5 p-lg-0 ">
                  <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2 mr-4 ml-3 " >
                  <Card.Body >
                      <Card.Title className="text-primary-main fw-bold">
                      <h6>
                          <strong> 
                          Auto Desempenho  
                          </strong> 
                      </h6>
                      </Card.Title>
                      <Card.Text><p>Aplicações rápidas e avançadas para aplicativos de Internet que otimizam o envolvimento.</p> </Card.Text>
                  </Card.Body>
                  </Card>
                  <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2 mr-4 ml-3" >
                  <Card.Body>
                      <Card.Title className="text-primary-main">
                      <h6> 
                      <strong> 
                      Experiências do Usuário
                      </strong>
                      </h6>
                      </Card.Title>
                      <Card.Text><p>Veja como UX pode ajudar a aumentar as conversões do seus site.</p> </Card.Text>
                  </Card.Body>
                  </Card>
                  <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2 mr-4 ml-3 d-md-none d-lg-block" >
                  <Card.Body>
                      <Card.Title className="text-primary-main fw-bold ">
                      <h6> 
                      <strong>
                          Search Engine Optimization   
                      </strong>
                      </h6>
                      </Card.Title> 
                      <Card.Text><p>Otimização de Sites é o conjunto de estratégias com objetivo.</p> </Card.Text>
                  </Card.Body>
                  </Card>
              </Col>
          </Row>
      </Container>
    </section>
  </div>
    }
  
  export default Benefits
   