 
 import {
  Carousel,
  }from 'react-bootstrap';
  
  function Fullbanner(){
    return   <div>
                 {/* Full Slide */}

                 <Carousel class="full-banner position-relative">
                  <Carousel.Item>
                    <img
                      className="d-block d-sm-none w-100 " 
                      src="banner-mob.png" 
                      alt="First slide"
                      />

                      <img
                      className="d-none d-sm-block w-100"
                      src="/banner_top.png" 
                      alt="First slide"
                      />

                    <Carousel.Caption className="text-white text-left border border-start border-danger border-top-0 border-bottom-0 border-right-0 w-100">
                      <h1 className="d-none d-sm-block">Profissional Designer,<strong>  Desenvolvedora de Aplicações Digitais. </strong>
                      </h1>

                      <h1 className="d-block d-sm-none">Profissional Designer, <strong>Desenvolvedora de Aplicações Digitais.</strong></h1>
                      
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>

                    <img
                      className="d-block d-sm-none w-100"   //image mobile
                      src="/bnn_mob_3.png" 
                      alt="First slide"
                      />

                      <img
                      className="d-none d-sm-block w-100"   //image desktop
                      src="/banner_top.png" 
                      alt="First slide"
                      />
                    <Carousel.Caption className="text-primary text-left border bord er-start border-danger border-top-0 border-bottom-0 border-right-0">
                      <h1 className="d-none d-sm-block">Sua empresa de <strong>portas abertas para um mundo de posibilidades </strong>
                      na tecnologia.
                      </h1>

                      <h1 className="d-block  d-sm-none">Sua Empresa de Portas <strong> abertas para um Mundo na tecnologia. </strong></h1>
                      
                    </Carousel.Caption>
                  </Carousel.Item>
       
                </Carousel>



            </div>
  }

export default Fullbanner
 