

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  c from "../../assets/img/programminglanguages/c.png";
import java from '../../assets/img/programminglanguages/java.png';
import php from '../../assets/img/programminglanguages/php.png';
import Cplusplus from '../../assets/img/programminglanguages/C++.png'

const CarouselItem=()=>{


    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 3,
        swipe:true,
        touchMove:true,
        rows:1,
        autoplay: true,
        autoplaySpeed: 3000, 
       
      
      
    
        responsive: [
            {
                breakpoint: 991.98, // At max-width of 1024px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                    
                    swipe:true,
                    touchMove:true,
                    speed: 800,
                    rows:1,
                    


                }
            },
            {
                breakpoint: 767.98, // At max-width of 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    swipe:true,
                    touchMove:true,
                    speed: 800,
                   
                    infinite: false,
                    rows:1,

                   
                }
            },
            {
                breakpoint: 499.98, // At max-width of 480px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    swipe:true,
                    touchMove:true,
                    speed: 800,
                    infinite: false,
                   

                }
            }
        ]
    };

   
  return (
    <section  className="container content-overlay mt-4 mb-2 mt-lg-5 mb-lg-4 pt-5 pb-md-2" style={{marginBottom:"50px",marginTop:"100px"}}>
   

   
    <Slider  {...settings} className="row ">
    <div className="col px-2">
        <a href="#" className="icon-box card flex-row align-items-center  border btn-translucent-dark rounded-pill py-2 ps-2 pe-4">
  <div className="icon-box-media bg-light  rounded-circle me-2">
    
    <img src={c}/>
  </div>
  <h3 className="icon-box-title fs-sm ps-1 mb-0 text-center">C</h3>
</a>
</div>



<div className="col px-2">
        <a href="#" className="icon-box card flex-row align-items-center  border bg-secondary rounded-pill py-2 ps-2 pe-4">
  <div className="icon-box-media bg-light text-primar rounded-circle me-2">
  <img src={java}/>
  </div>
  <h3 className="icon-box-title fs-sm ps-1 mb-0">Java</h3>
</a>
</div>   <div className="col px-2">
        <a href="#" className="icon-box card flex-row align-items-center  border bg-secondary rounded-pill py-2 ps-2 pe-4">
  <div className="icon-box-media bg-light  rounded-circle me-2">
  <img src={Cplusplus}/>
  </div>
  <h3 className="icon-box-title fs-sm ps-1 mb-0">C++</h3>
</a>
</div>   <div className="col px-2">
        <a href="#" className="icon-box card flex-row align-items-center  border bg-secondary rounded-pill py-2 ps-2 pe-4">
  <div className="icon-box-media bg-light  rounded-circle me-2">
  <img src={php}/>
  </div>
  <h3 className="icon-box-title fs-sm ps-1 mb-0">Php</h3>
</a>
</div>   <div className="col px-2">
        <a href="#" className="icon-box card flex-row align-items-center  border bg-secondary rounded-pill py-2 ps-2 pe-4">
  <div className="icon-box-media bg-light  rounded-circle me-2">
    <i className="fi-spa"></i>
  </div>
  <h3 className="icon-box-title fs-sm ps-1 mb-0">Background card</h3>
</a>
</div>   <div className="col px-2">
        <a href="#" className="icon-box card flex-row align-items-center  border bg-secondary rounded-pill py-2 ps-2 pe-4">
  <div className="icon-box-media bg-light  rounded-circle me-2">
    <i className="fi-spa"></i>
  </div>
  <h3 className="icon-box-title fs-sm ps-1 mb-0">Background card</h3>
</a>
</div>
    </Slider>
    </section>
  )
}

export {CarouselItem}