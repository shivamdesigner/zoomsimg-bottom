import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './App.css';
import ReactImageMagnify from 'react-image-magnify';

import car1 from "./img/s1.webp"
import car2 from "./img/s2.jpg"
import car3 from "./img/s3.jpg"
import car4 from "./img/s4.jpg"
import car5 from "./img/s5.jpg"
import car6 from "./img/s6.webp"
import car7 from "./img/s7.webp"
import car8 from "./img/s8.jpg"
import car9 from "./img/s9.jpg"


// import catImgeUrl from "./img/10.jpg";




function App() {
  const [activeImage, setActiveImage] = useState(car1);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="zoom-img-box">
          <div className="small-image-container" >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: activeImage,
                  
                },
                largeImage: {
                  src: activeImage,
                  width: 1200,
                  height: 1200,
                },
              }

              }
            />
            
            </div>
            
          </div>
          <div className="downsection">
            <Swiper
              // slidesPerView={5}
              // spaceBetween={20}
              navigation={
                      {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                      }
                    }
              pagination={{
                clickable: true,
              }}
              slidesPerView={window.innerWidth <= 768 ? 3 : 5}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide onClick={() => setActiveImage(car1)}><div className="img-box"><img src={car1} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car2)}><div className="img-box"><img src={car2} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car3)}><div className="img-box"><img src={car3} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car4)}><div className="img-box"><img src={car4} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car5)}><div className="img-box"><img src={car5} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car6)}><div className="img-box"><img src={car6} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car7)}><div className="img-box"><img src={car7} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car8)}><div className="img-box"><img src={car8} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car9)}><div className="img-box"><img src={car9} alt="" /></div> </SwiperSlide>
              <div className="swiper-button-next next"></div>
                    <div className="swiper-button-prev prev"></div>
            </Swiper>
            
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12' >
            <div className='right-section'>
              <div class="xzoom_part">

                <h4>MuscleBlaze Creatine Monohydrate, 400 g (0.88 lb) <span> <iconify-icon icon="mdi:lacto-vegetarian"
                  class="veg-nonveg-icon"></iconify-icon></span> </h4>


                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero temporibus, accusamus
                  magnam maxime quis </h6>
                <p class="star"><i class="fas fa-star"></i>4.5
                </p>
                <h3>₹1289 <span>MRP:<del class="ms-1">1489</del></span> </h3>
                <div class=" btn-contain mb-2">
                  <p>Weight</p>
                  <div class="btn-body">
                    <p class="btn-views btn-views-1"><a href="/">5kg</a></p>
                    <p class="btn-views"><a href="/">10kg</a></p>
                  </div>
                </div>
                <div class=" btn-contain mb-2">
                  <p>Flavour</p>
                  <div class="btn-body">
                    <p class="btn-views btn-views-1"><a href="/">Chocolate</a></p>
                    <p class="btn-views"><a href="/">Vanila</a></p>
                    <p class="btn-views"><a href="/">Strawberry</a></p>
                  </div>
                </div>
                <div class=" btn-contain">
                  <p>Color</p>
                  <div class="btn-body">
                    <p class="btn-views  btn-views-1"><a href="/">Blue</a></p>
                    <p class="btn-views"><a href="/">Black</a></p>
                    <p class="btn-views"><a href="/">Red</a></p>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-3">
                  <label for=""> Qty: </label>
                  <input type="number" value="1" class="form-control" />
                  <div class="btn-xzone-body ">
                    <a href="cart-page.html">
                      <p class="btn-xzone"> <i class="bi bi-cart2"></i><span> Add To Cart
                      </span></p>
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
