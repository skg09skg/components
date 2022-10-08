import React from 'react';
import './index.scss';
import $ from 'jquery';

const ActiveCarousel = () => {
    
    $('.owl-demo').owlCarousel({
        loop: true,
        navigation : true,
        margin: 10,
        autoWidth: true,
        center: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 4
            },
            1000: {
                items: 5
            }
        }
    })

    return (
        <div>
            <div className='owl-demo owl-theme'>
                <div className='item'><h4>1</h4></div>
                <div className='item'><h4>2</h4></div>
                <div className='item'><h4>3</h4></div>
                <div className='item'><h4>4</h4></div>
                <div className='item'><h4>5</h4></div>
                <div className='item'><h4>6</h4></div>
                <div className='item'><h4>7</h4></div>
                <div className='item'><h4>8</h4></div>
                <div className='item'><h4>9</h4></div>
                <div className='item'><h4>10</h4></div>
                <div className='item'><h4>11</h4></div>
                <div className='item'><h4>12</h4></div>
            </div>
        </div>
    )
}

export default ActiveCarousel;