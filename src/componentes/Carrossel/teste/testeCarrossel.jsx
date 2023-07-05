import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from "react-bootstrap";

export function Carrossel(){
  return(
    <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><Image 
    src="https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg" alt="estadio de futebol"
    />
    </SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
    ...
  </Swiper>
  )
}





export default ControlledCarousel;


import Carousel from 'react-bootstrap/Carousel';

export function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg"
          alt="Estadio de futebol"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg"
          alt="Estadio de futebol"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg"
          alt="Estadio de futebol"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}



import Carousel from 'react-bootstrap/Carousel';

export function Carrossel() {
  return (
        
    <div className={Style.divPaiCarrossel}>   
    
        <Swiper className={Style.carrossel_container}
            modules={[Navigation, Pagination]}
            navigation
            pagina
            tion
        >
            {slides.map((slide, index) => (
    
              <SwiperSlide key={index} className={Style.slide_item}>
    
                <img src={slide} alt={slides} className={Style.imagem} />
    
              </SwiperSlide>
            ))}
        </Swiper>
    </div>
  );
}
