 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/swiper.min.css';
import {
  
  Container, 
  Card,
  
  }from 'react-bootstrap';
  function Highligts(){
    return   <div> 
      <section className="highligts mt-4 mb-4">
        <Container>
          <Swiper 
             spaceBetween={20}
             slidesPerView={2}
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
           >
          <SwiperSlide>
            <Card className="border-0 p-3" >
              <Card.Body className="p-2">
                <Card.Title className="text-primary-main fw-bolde">
                  <h2>
                    Designer<br/>  Gráfico  
                  </h2>
                </Card.Title>
                <Card.Text className="pr-lg-5 d-lg-block">Protótipos criados para identidade vizual, como peças publicitárias,<br/> interfaces digitais e Social Media.</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="border-0 p-3" >
              <Card.Body className="p-2">
                <Card.Title className="text-primary-main fw-bolde">
                  <h2>
                    Desenvolvimento<br/> FrontEnd 
                  </h2>
                </Card.Title>
                <Card.Text className="">Aplicações 'MOBILFIRST' 'DINAMICAS' em diferentes linguagens, Design aplicado, tecnologia, negócios e muito mais. </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="border-0 p-3 bg-danger-m" >
              <Card.Body className="p-2">
                <Card.Title className="text-white-main fw-bolde">
                  <h2 className="text-white"> 
                      Integrador <br/>de E-commerce
                  </h2>
                </Card.Title>
                <Card.Text className=""><p className="text-white">Desenvolvedor de lojas online, Single Page, e Pixel Perfec, AI, Design aplicado, tecnologia, negócios e muito mais em diferentes plataformas.</p></Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>   
  </div>
}
export default Highligts
 