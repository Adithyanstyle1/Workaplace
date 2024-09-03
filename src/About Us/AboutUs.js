import React from "react";
import './AboutUs.css'
import land from './one.png';
import Workspacesdata from "./Workspacesdata";
import Aboutuslocdata from "./Aboutuslocdata";
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


const AboutUs = ()=>{

    
    const workspaces = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
     
      const aboutusLocations = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };


    return(
        <div className="aboutUs">
            <div className="workaplace">
                <h1 className="title">Workaplace</h1>
                <img src={land} alt=""/>
            </div>
            <div className="about">
                <h1>About Us</h1>
                <p>We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!
                    We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!
                    We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!
                    We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!
                    We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!
                    </p>
            </div>


          <div className="one">  
        <div className="workspace-typ">
          <h1>Types of workspaces we have</h1>

        <Slider {...workspaces}>
            {Workspacesdata.map((h,index)=>
            <div className="workspace-container">
                <h1>{h.title}</h1>
                <div className="workspace-image">
                <img src={h.img} alt=""/>
                </div>
                
                <p>{h.content}</p>
            </div>
            )}
            </Slider>
        </div>

        </div>
           
           
        <div className="aboutus-locations">
          <h1>Locations we have workspaces in Bangalore</h1>

        <Slider {...aboutusLocations}>
            {Aboutuslocdata.map((g,index)=>
            <div className="aboutus-locations-container">
               
                <div className="aboutus-locations-image">
                <img src={g.img} alt=""/>
                </div>
                <h1>{g.name}</h1>
            </div>
            )}
            </Slider>
        </div>
              


        </div>
    )
}
export default AboutUs;