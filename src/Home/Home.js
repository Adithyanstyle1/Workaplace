import React from "react";
import './Home1.css';
import land from './one.png';
import Great from "./Great";
import Work from "./Work";
import Clientdata from "./Clientdata";
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
  

const Home = ()=>{
    
    
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };

        const clients= {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        };


       const work = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 2,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
              
           
    return(
        <div className="home">
            <div className="landImg">
            <img src={land} alt=""/>
            </div><div className="welcome">
                <h1>Welcome to Worksplace</h1>
                <img src={land} alt=""/>
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
                    </p>
            </div>
            <div className="two-sec">
                <div className="what">
                    <h1>What we do?</h1>
                <img src={land} alt=""/>
                <p>We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!</p>
                    
                    <div className="but"><button>Experience the benefits of 
                        a well-designed workaplace</button>
                        </div>
                </div>
                <div className="why">
                    <h1>Why choose workaplace?</h1>
                <img src={land} alt=""/>
                <p>We're thrilled to have you join our dynamic team.
                    At Workaplace, we believe in fostering innovation and collaboration.
                    Your journey with us is about to embark on exciting new heights.
                    Together, we'll achieve great success and make lasting impacts.
                    Let's create, inspire, and grow as one!</p>
                    <div className="but">      <button>Why workaplace?</button></div>
              


                </div>
            </div>
            <div className="great-features">
                <h1 className="great-title">Great features Only On Workaplace</h1>
               
                <div className="slider">
                <Slider {...settings}>
                    {Great.map((d,index)=>
                    <div className="slides">
                        <div className="title">
                            <h1>{d.title}</h1>
                            </div>
                            <div className="two">
                                <div className="image">
                                    <img src={d.img} alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>{d.content}</p>
                                    </div>
                                </div>
                          </div>
                    )}
                    </Slider>
                    </div>
               </div>


         
         <div className="home-clients">
        <h1>Some of the world's biggest brands use 
          Workaplace to build community . Take a look at their amazing stories
        </h1>
        <Slider {...clients}>
          {Clientdata.map((f, index)=>
        <div className="home-clients-slider">
          <h1>{f.name}</h1>
          <div className="home-clients-slide">
            <div className="home-clients-img">
              <img src={f.img} alt=""/>
            </div>
            <div className="home-client-review">
              <p>{f.review}</p>
            </div>
          </div>
        </div>
        )}

        </Slider>
       </div>


              

             


          


        <div className="work">
          <h1>What's New in the world of work</h1>

        <Slider {...work}>
            {Work.map((g,index)=>
            <div className="work-container">
                <h1>{g.title}</h1>
                <div className="work-image">
                <img src={g.img} alt=""/>
                </div>
                
                <p>{g.content}</p>
            </div>
            )}
            </Slider>
        </div>
              





        </div>
    )
}

export default Home;