import {
    ProgressBar, 
    Row,
    Container,
    Col,
    Card,
    Button, 
    }from 'react-bootstrap';
    import Image from 'next/image'; 
  
   
    function Benefits(){
      return   <div>
    <section id="experiences" className="mt-5 pt-5">
        <Container>
            <Row>
                <Col md={5}>
                    <div className="p-0 d-flex align-items-center">
                        <span class="badge badge-pill badge-danger text-danger align-items-center">.</span>
                        <h6 className="text-muted pt-2 ml-2">Experiências </h6>
                    </div>
                    <h2  className="h1 text-primary-main mb-3">
                        Empresas e Projetos, <br></br> <strong> que contribui nos últimos anos.</strong>
                    </h2>
                    <p className="mt-4 mb-4">
                     Busco harmonizar a relação entre produtos e pessoas, aproximar de maneira agrádavel o melhor de um produto, a necessidade de seu consumidor ideal.
                    </p>
                    <div className="buttons d-flex pt-md-4">
                        <Button className="rounded-pill mr-2" variant="danger">Portfólio</Button>{' '}
                        <Button className="rounded-pill" variant="transparent border border-primary-main text-primary-main">Habilidades</Button>{' '}
                    </div>
                </Col>
                <Col sm={12} md={7} lg={7} className="pt-5 p-md-2 pl-md-5 ">
                  <Row>
                    <Col sm={12} md={6}>
                        <Card className="mt-0 mb-4 border-0 bg-primary-m shadow-lg-m p-2" >
                            <Card.Body >
                                <div className="text-white d-flex justify-content-end align-items-center text-small">
                                    <span> <strong>2020 - 2021 </strong> </span>
                                    <i class="far fa-bookmark ml-2"></i> 
                                </div>
                                <Card.Title className="text-white fw-bold">
                                    <h6> <strong> OLFATI  <br></br> Marketing Olfativo </strong> </h6>
                                </Card.Title>

                                <Card.Text><p className="text-white">Html, Css e Bootstrap.</p> </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2" >
                            <Card.Body >
                                <div className="d-flex justify-content-end align-items-center text-small">
                                    <span> <strong>2020 - 2020</strong> </span>
                                    <i class="far fa-bookmark ml-2"></i> 
                                </div>
                                <Card.Title className="text-primary-main fw-bold">
                                    <h6> <strong> Gráfica Rápida  <br></br> Agência de Design Gráfico </strong> </h6>
                                </Card.Title>
                                <Card.Text><p>Pacote Adobe.</p> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="mt-0 mb-4 border-0 shadow-lg-m p-2" >
                            <Card.Body >
                                <div className="d-flex justify-content-end align-items-center text-small">
                                    <span> <strong>2017 - 2017</strong> </span>
                                    <i class="far fa-bookmark ml-2"></i> 
                                </div>
                                <Card.Title className="text-primary-main fw-bold">
                                    <h6> <strong> CONIAL VILLAGE II  <br></br> Condomínio em Pindamonhangaba </strong> </h6>
                                </Card.Title>
                                <Card.Text><p>Photoshop, Html, Css.</p> </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                  </Row>
                </Col>
            </Row>
        </Container>
    </section>
</div>
    }
  
  export default Benefits
   