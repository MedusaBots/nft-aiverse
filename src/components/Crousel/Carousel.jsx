import "./Carousel.css";
import React from 'react'
import Carousel from 'react-grid-carousel';
import ps from "../../assets/images/ps1.png";
import mfs from "../../assets/images/ps1.png";
import sui from "../../assets/images/sui1.png";
import nvidia from "../../assets/images/nvidia.png";
import defiant from "../../assets/images/defiant1.png";
import polygon from "../../assets/images/polygon1.png";
import sketchfab from "../../assets/images/sketchfab1.png";
 
const Carousl = () => {
  return (
    <div>
        <h1 className='carousel-h1'>Partners</h1>
        <Carousel cols={4} rows={1} mobileBreakpoint={767} style={{backgroundColor:"blue"}}>
            <Carousel.Item>
                <img src={sui} className="carousel-image0" width="50%" />
                <p className='company-name'  style={{top:"-45%" , color:"white" ,left:"24%"}}><strong>Startupindia</strong></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={polygon} className="carousel-image1" width="50%" />
                <p className='company-name'  style={{top:"-12%" , color:"white"}}><strong>Polygon</strong></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={mfs} className="carousel-image2" width="64%" />
                <p className='company-name'  style={{top:"-9%" , color:"white"}}><strong>Microsoft for startups</strong></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={sketchfab} className="carousel-image3" width="30%" />
                <p className='company-name' style={{top:"4%", color:"white"}}><strong>Sketchfab</strong></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={defiant} className="carousel-image4" width="60%" />
                <p className='company-name'  style={{top:"-8%", color:"white"}}><strong>Defiant</strong></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={ps} className="carousel-image5" width="64%" />
                <p className='company-name'  style={{top:"-10%", color:"white"}}><strong>Polygon Studios</strong></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src={nvidia} className="carousel-image6" width="42%" />
                <p className='company-name' style={{top:"10%", color:"white"}}><strong>NVIDIA</strong></p>
            </Carousel.Item>
        </Carousel>
    </div>
    
  )
}

export default Carousl;