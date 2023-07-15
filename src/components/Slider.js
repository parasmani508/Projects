import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Slider.css';


const Slider = ({start}) => {
    return (
        <Carousel fade>
       

       {start.map((item)=>(
            <Carousel.Item id='im'>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide" 
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
    )
}
export default Slider
{/* start method is fetched from our data.json file*/ }