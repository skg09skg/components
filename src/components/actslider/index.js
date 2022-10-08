import React from 'react';
import './index.scss';
// import CarouselSlider from "react-carousel-slider"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ActSlider = () => {

    // let data = [
    //     {
    //         des: "1",
    //         imgSrc: "https://i.imqur.com/yourImage.jpg"
    //     },
    //     {
    //         des: "2",
    //         imgSrc: "https://i.imqur.com/yourImage2.jpg"
    //     }
    // ];

    return (
        <div>
            {/* <CarouselSlider slideItems={data} /> */}
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={6}
            >
                <Slider>
                    <Slide index={0}>
                        <div className='seller__left'>
                            <h1>Are you a Seller?</h1>
                            <h2>Easy Product Listing</h2>
                            <p>No more spending endless hours writing product details manually. Choose the product from
                                ProcEazy market database, add selling price & quantity. That s it. </p>
                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className='seller__center'>
                            <h1>Are you a Seller?</h1>
                            <h2>Zero Commission</h2>
                            <p>Keep all the revenue you earned. ProcEzy does not take any commission or cut from the sale
                                you make. </p>
                        </div>
                    </Slide>
                    <Slide index={2}>
                        <div className='seller__right'>
                            <h1>Are you a Seller?</h1>
                            <h2>Sell more effectively</h2>
                            <p>Improved product visibility to potential buyers from across the country. An opportunity to
                                increase sales. Never loose track of enquiries.</p>
                        </div>
                    </Slide>
                    <Slide index={3}>
                        <div className='buyer__left'>
                            <h1>Are you a Buyer?</h1>
                            <h2>Complete clarit  over chat</h2>
                            <p>Intuitive chat interface to talk to sellers from across the country. Negotiate with seller in real
                                time and get regular updates at one place. </p>
                        </div>
                    </Slide>
                    <Slide index={4}>
                        <div className='buyer__center'>
                            <h1>Are you a Buyer?</h1>
                            <h2>Wide variety of products</h2>
                            <p>No more spending endless hours calling vendors asking for quotes.
                                Log into ProcEzy for real time prices & availability for products
                                from across the country. </p>
                        </div>
                    </Slide>
                    <Slide index={5}>
                        <div className='buyer__right'>
                            <h1>Are you a Buyer?</h1>
                            <h2>Procure more  Effectively</h2>
                            <p>Browse through products from sellers across the country.
                                Share your required specs, check availability and get in touch with
                                sellers from across the country.</p>
                        </div>
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </div>
    )
}

export default ActSlider;