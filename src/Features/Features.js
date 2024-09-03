import React from "react";
import './Features.css';
import land from './one.png';
import Locationdata from "./Locationdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }



const Features = ()=>{

     
    const location = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };



    return(
        <div className="features">
            

     <div className="location">  
        <div className="workspace-typ">
          <h1>Our Workspace Locations</h1>

        <Slider {...location}>
            {Locationdata.map((i,index)=>
            <div className="location-container">
                <h1>{i.name}</h1>
                <div className="location-image">
                <img src={i.img} alt=""/>
                </div>
                
                <p>{i.content}</p>
            </div>
            )}
            </Slider>
        </div>

        </div>



            <div className="spaces">
            <h1>spaces As Per Need</h1>
            <div className="spaces-container">
            <div className="space-pic">
               <img src={land} alt=""/>
                 </div>
               <div className="space-content">
               <p>We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!</p>
                </div>
                
            </div>
               
            </div>

            <div className="extension">
                <h1>Extension Of Your Brand</h1>
                <img src={land} alt=""/> 
                <p>We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!</p>           
                </div>
        </div>
    )
}

export default Features;