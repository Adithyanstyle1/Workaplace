import React from "react";
import './Clients.css';
import OurClients from "./ourclients";
import land from './one.png';
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



const Clients =()=>{

    const ourClient = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
      const clients = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };



    return(
        <div className="clients">
               <div className="land">
                <h1>Who All Are Our Clients</h1>
                <img src={land} alt=""/>
                <p>We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!</p>
                
                
            </div>


            <div className="our-clients">
            <h1>Our Clients</h1>

        <Slider {...ourClient}>
            {OurClients.map((g,index)=>
            <div className="our-clients-container">
               
                <div className="our-clients-image">
                <img src={g.img} alt=""/>
                </div>
                <h1>{g.name}</h1>
            </div>
            )}
            </Slider>
        </div>


        <div className="our-clients">
            <h1>Our Clients</h1>

        <Slider {...clients}>
            {OurClients.map((a,index)=>
            <div className="our-clients-container">
               <div className="client-container">
                <h1>{a.name}</h1>
                <p>{a.review}</p>
                <div className="nameofclient">
                    <h2>{a.clientName}</h2>
                </div>
               </div>
                
            </div>
            )}
            </Slider>
        </div>
         
         
 </div>
       
    )
}

export default Clients;