import React from 'react';
import './index.scss';
import jQuery from 'jquery';

const TestmonialsSlider = () => {
    jQuery(document).ready(function ($) {
        'use strict';
        //  TESTIMONIALS CAROUSEL HOOK
        $('#customers-testimonials').owlCarousel({
            loop: true,
            center: true,
            items: 3,
            margin: 0,
            autoplay: true,
            dots: true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    });
    return (
        <div>
            <section className='testimonials'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-sm-12'>
                            <div id='customers-testimonials' className='owl-carousel'>

                                <div className='item'>
                                    <div className='shadow-effect'>
                                        <img className='img-circle' src='http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg' alt='' />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div className='testimonial-name'>EMILIANO AQUILANI</div>
                                </div>
                                <div className='item'>
                                    <div className='shadow-effect'>
                                        <img className='img-circle' src='http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg' alt='' />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div className='testimonial-name'>ANNA ITURBE</div>
                                </div>
                                <div className='item'>
                                    <div className='shadow-effect'>
                                        <img className='img-circle' src='http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg' alt='' />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div className='testimonial-name'>LARA ATKINSON</div>
                                </div>
                                <div className='item'>
                                    <div className='shadow-effect'>
                                        <img className='img-circle' src='http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg' alt='' />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div className='testimonial-name'>IAN OWEN</div>
                                </div>
                                <div className='item'>
                                    <div className='shadow-effect'>
                                        <img className='img-circle' src='http://themes.audemedia.com/html/goodgrowth/images/testimonial3.jpg' alt='' />
                                        <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate.</p>
                                    </div>
                                    <div className='testimonial-name'>MICHAEL TEDDY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TestmonialsSlider;