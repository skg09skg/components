import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const ActiveSlider1 = () => {

    const slideImages = [
        {
          url: '../../assets/image/slider2.jpg',
          caption: 'Slide 1'
        },
        {
          url: 'image/slider3.jpg',
          caption: 'Slide 2'
        },
        {
          url: 'assets/image/slider4.jpg',
          caption: 'Slide 3'
        },
      ];

  return (
    <div>
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </div>
  )
}

export default ActiveSlider1;