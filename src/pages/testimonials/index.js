import React from 'react';
import { SlideTestimonial, FadeTestimonial, ZoomTestimonial } from 'react-materialui-testimonials-transition'

const Testimonial1 = () => {
  return (
    <div>
      <SlideTestimonial
        image='/images/1.jpg'
        alt='Arif Shariati'
        imageRadius='50%'
        title='Arif Shariati'
        subtitle='CEO'
        testimonial={'Awesome React Material UI Testimonial component Package'}
        backgroundGradient={['#FE6B8B', '#FF8E53']}
        backgroundColor='#f9f9f9'
        transition={true}
        direction='left'
        speed={1000}
        shadow={5}
      />
      <FadeTestimonial
        image='/images/1.jpg'
        alt='Arif Shariati'
        imageRadius='50%'
        title='Arif Shariati'
        subtitle='CEO'
        testimonial={'Awesome React Material UI Testimonial component Package'}
        backgroundGradient={['#FE6B8B', '#FF8E53']}
        backgroundColor='#f9f9f9'
        transition={true}
        speed={1000}
        shadow={5}
      />
      <ZoomTestimonial
        backgroundGradient={['#FE6B8B', '#FF8E53']}
        backgroundColor='#f9f9f9'
        transition={true}
        speed={1000}
        shadow={5}
      >
        <div>
          image='/images/1.jpg'
          alt='Arif Shariati'
          imageRadius='50%'
          title='Arif Shariati'
          subtitle='CEO'
          testimonial={'Awesome React Material UI Testimonial component Package'}
        </div>
      </ZoomTestimonial>
      <ZoomTestimonial
        transition={true}
        speed={1000}
        shadow={5}
      >
        <div >
          <h1>Welcome to world of SmartPools</h1>
          <div ></div>
          <p>The world’s most Advanced Swimming System and an award winning innovation, it can generate real currents that are gentle and can be turned into a force if desired, making swimming an exhilarating experience.</p>
        </div>
        <div >
          <h1>Welcome to world of SmartPools</h1>
          <div ></div>
          <p>The world’s most Advanced Swimming System and an award winning innovation, it can generate real currents that are gentle and can be turned into a force if desired, making swimming an exhilarating experience.</p>
        </div>
        <div >
          <h1>Welcome to world of SmartPools</h1>
          <div ></div>
          <p>The world’s most Advanced Swimming System and an award winning innovation, it can generate real currents that are gentle and can be turned into a force if desired, making swimming an exhilarating experience.</p>
        </div>
        <div >
          <h1>Welcome to world of SmartPools</h1>
          <div ></div>
          <p>The world’s most Advanced Swimming System and an award winning innovation, it can generate real currents that are gentle and can be turned into a force if desired, making swimming an exhilarating experience.</p>
        </div>
        <div >
          <h1>Welcome to world of SmartPools</h1>
          <div ></div>
          <p>The world’s most Advanced Swimming System and an award winning innovation, it can generate real currents that are gentle and can be turned into a force if desired, making swimming an exhilarating experience.</p>
        </div>
      </ZoomTestimonial>
    </div>
  )
}

export default Testimonial1;