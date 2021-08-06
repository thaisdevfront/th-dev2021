 
 import {
  Carousel,
  }from 'react-bootstrap';
  // import Carousel from 'react-bootstrap/Carousel'
  
  function Fullbanner(){
    return   <div>
                 {/* Full Slide */}
                 <Carousel class="full-banner position-relative">
                  <Carousel.Item>
                    <img
                      className="d-block d-sm-none w-100" 
                      src="bnnr_mobile.png" 
                      alt="First slide"
                      />
                      <img
                      className="d-none d-sm-block w-100"
                      src="/bnner_top.png" 
                      alt="First slide"
                      />
                    <Carousel.Caption className="text-white text-left border-start">
                      <h1 className="">Profissional Designer,<strong>  Desenvolvedora de Aplicações Digitais. </strong>
                      </h1>
                      {/* <h1 className="d-block d-sm-none">Sua Empresa de Portas <strong> abertas para um Mundo na tecnologia. </strong></h1> */}
                    </Carousel.Caption>

                    {/* <Carousel.Caption className="text-primary text-left border-start">
                      <h1 className="d-none d-sm-block">Sua empresa de <strong>portas abertas para um mundo de posibilidades </strong>
                      na tecnologia.
                      </h1>
                      <h1 className="d-block d-sm-none">Sua Empresa de Portas <strong> abertas para um Mundo na tecnologia. </strong></h1>
                    </Carousel.Caption> */}

                  </Carousel.Item>

                  <Carousel.Item>
                    <img
                      className="d-block d-sm-none w-100"   //image mobile
                      src="/bnnr_mobile_1.png" 
                      alt="First slide"
                      />
                      <img
                      className="d-none d-sm-block w-100"   //image desktop
                      src="/bnner_top_1.png" 
                      alt="First slide"
                      />
                    <Carousel.Caption className="text-primary text-left border-start">
                      <h1 className="">Sua empresa de <strong>portas abertas para um mundo de tecnologia. </strong>
                      </h1>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            </div>
  }

export default Fullbanner
 