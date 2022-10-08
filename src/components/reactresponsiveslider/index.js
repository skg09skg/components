import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/image/slider1.jpg';
import img2 from '../../assets/image/slider2.jpg';
import img3 from '../../assets/image/slider3.jpg';
import img4 from '../../assets/image/slider4.jpg';
import img5 from '../../assets/image/slider5.jpg';

const ResponsiveCarousel = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={img1} alt='' />
                    <p className='legend'>Legend 1</p>
                </div>
                <div>
                    <img src={img1} alt='' />
                    <p className='legend'>Legend 2</p>
                </div>
                <div>
                    <img src={img1} alt='' />
                    <p className='legend'>Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default ResponsiveCarousel;