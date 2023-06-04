import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './App.css';
import ReactImageMagnify from 'react-image-magnify';

import img1 from "./img/s1.webp"
import img2 from "./img/s2.jpg"
import img3 from "./img/s3.jpg"
import img4 from "./img/s4.jpg"
import img5 from "./img/s5.jpg"
import img6 from "./img/s6.webp"
import img7 from "./img/s7.webp"
import img8 from "./img/s8.jpg"
import img9 from "./img/s9.jpg"







function App() {
  const mainimg =[img1, img2, img3, img4, img5, img6, img7, img8, img9]
  const [activeImage, setActiveImage] = useState(img1);
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
              slidesPerView={window.innerWidth <= 991 ? 3 : 5}
              modules={[Navigation]}
              className="mySwiper"
            >
              {
                mainimg.map((imagall,i)=>(
                  <SwiperSlide 
                  key={i}
                  onClick={() => setActiveImage(imagall)}
                  >
                    <div className="img-box"><img src={imagall} alt="" /></div>
                 </SwiperSlide>
                ))
              }
             
              <div className="swiper-button-next next"></div>
                    <div className="swiper-button-prev prev"></div>
            </Swiper>
                
            
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12' >
            <div className='right-section'>
              <div className="xzoom_part">

                <h4>MuscleBlaze Creatine Monohydrate, 400 g (0.88 lb) <span> <iconify-icon icon="mdi:lacto-vegetarian"
                  className="veg-nonveg-icon"></iconify-icon></span> </h4>


                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore vero temporibus, accusamus
                  magnam maxime quis </h6>
                <p className="star"><i className="fas fa-star"></i>4.5
                </p>
                <h3>₹1289 <span>MRP:<del className="ms-1">1489</del></span> </h3>
                <div className=" btn-contain mb-2">
                  <p>Weight</p>
                  <div className="btn-body">
                    <p className="btn-views btn-views-1"><a href="/">5kg</a></p>
                    <p className="btn-views"><a href="/">10kg</a></p>
                  </div>
                </div>
                <div className=" btn-contain mb-2">
                  <p>Flavour</p>
                  <div className="btn-body">
                    <p className="btn-views btn-views-1"><a href="/">Chocolate</a></p>
                    <p className="btn-views"><a href="/">Vanila</a></p>
                    <p className="btn-views"><a href="/">Strawberry</a></p>
                  </div>
                </div>
                <div className=" btn-contain">
                  <p>Color</p>
                  <div className="btn-body">
                    <p className="btn-views  btn-views-1"><a href="/">Blue</a></p>
                    <p className="btn-views"><a href="/">Black</a></p>
                    <p className="btn-views"><a href="/">Red</a></p>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <label htmlFor=""> Qty: </label>
                  <input type="number" value="1" className="form-control" />
                  <div className="btn-xzone-body ">
                    <a href="cart-page.html">
                      <p className="btn-xzone"> <i className="bi bi-cart2"></i><span> Add To Cart
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
