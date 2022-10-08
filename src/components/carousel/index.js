import React from 'react';
import './index.scss';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider6.jpg';
import slider3 from '../../assets/image/slider5.jpg';
import slider4 from '../../assets/image/slider4.jpg';
import slider5 from '../../assets/image/slider3.jpg';
import slider6 from '../../assets/image/slider2.jpg';

const CarouselNew = ( onChange, onClickItem, onClickThumb) => {
    return (
        <div>
            <Carousel showArrows={true} onChange={() => onChange()} onClickItem={ ()=>onClickItem()} infiniteLoop={true}
            transitionTime={1400}>
                <div>
                    <img src={slider1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={slider3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={slider4} />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src={slider5} />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src={slider6} />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        </div>
    )
}

export default CarouselNew;