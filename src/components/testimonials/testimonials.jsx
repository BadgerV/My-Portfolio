import React from 'react';
import './testimonials.css';
import  AVTR1 from '../../asset/client1.jpg';
import  AVTR2 from '../../asset/client2.jpg';
import  AVTR3 from '../../asset/client3.jpg';
import  AVTR4 from '../../asset/client4.jpg';


// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
        // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />  
          </div>  

          <h5 className='Earnest Achiever'>Earnest Acheiver</h5>
            <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis explicabo accusamus laudantium dolor reprehenderit excepturi! Quisquam ipsum at, enim, similique deleniti doloremque sit non rerum aperiam corporis ab in unde.</small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />  
          </div>  

          <h5 className='Earnest Achiever'>Earnest Acheiver</h5>
            <small className="client__review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis explicabo accusamus laudantium dolor reprehenderit excepturi! Quisquam ipsum at, enim, similique deleniti doloremque sit non rerum aperiam corporis ab in unde.</small>
        </SwiperSlide> 
        
      </Swiper>
    </section>
  )
}

export default Testimonials