import React from 'react'

import {  Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination  } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Style from './Carrossel.module.css'

import futebol from "../../../public/imagens/futebol.jpg"
import desenvolvedor_android from "../../../public/imagens/desenvolvedor_android.jpg"
import desenvolvimento_web from "../../../public/imagens/desenvolvimento_web.png"
import mobile_dois from "../../../public/imagens/mobile_dois.png"
import web_designer from "../../../public/imagens/web_designer.png"

export function Carrossel() {

  const slides = [futebol,desenvolvedor_android,desenvolvimento_web,mobile_dois,web_designer]

      return(
        <div className={Style.divPai}>   

            <Swiper className={Style.carrossel_container}
                modules={[Navigation, Pagination]}
                navigation
                pagination
            >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index} className={Style.slide_item}>
                    <img src={slide} alt={slides} className={Style.imagem} />
                  </SwiperSlide>
                ))}
            </Swiper>
            
       </div>
      )
  }
 
  // modules={Navigation}  navigation={true}
 