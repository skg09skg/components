import React from 'react';
import './index.scss';

const ActiveSlider = () => {

    const sectionsWithCarousel = document.querySelectorAll(
        ".section-with-carousel"
    );

    createOffsets();
    window.addEventListener("resize", createOffsets);

    function createOffsets() {
        const sectionWithLeftOffset = document.querySelector(
            ".section-with-left-offset"
        );
        const sectionWithLeftOffsetCarouselWrapper = sectionWithLeftOffset.querySelector(
            ".carousel-wrapper"
        );
        const sectionWithRightOffset = document.querySelector(
            ".section-with-right-offset"
        );
        const sectionWithRightOffsetCarouselWrapper = sectionWithRightOffset.querySelector(
            ".carousel-wrapper"
        );
        const offset = (window.innerWidth - 1100) / 2;
        const mqLarge = window.matchMedia("(min-width: 1200px)");

        if (sectionWithLeftOffset && mqLarge.matches) {
            sectionWithLeftOffsetCarouselWrapper.style.marginLeft = offset + "px";
        } else {
            sectionWithLeftOffsetCarouselWrapper.style.marginLeft = 0;
        }

        if (sectionWithRightOffset && mqLarge.matches) {
            sectionWithRightOffsetCarouselWrapper.style.marginRight = offset + "px";
        } else {
            sectionWithRightOffsetCarouselWrapper.style.marginRight = 0;
        }
    }

    for (const section of sectionsWithCarousel) {
        let slidesPerView = [1.5, 2.5, 3.5];
        if (section.classList.contains("section-with-left-offset")) {
            slidesPerView = [1.5, 1.5, 2.5];
        }
        const swiper = section.querySelector(".swiper");
        new Swiper(swiper, {
            slidesPerView: slidesPerView[0],
            spaceBetween: 15,
            loop: true,
            lazyLoading: true,
            keyboard: {
                enabled: true
            },
            navigation: {
                prevEl: section.querySelector(".carousel-control-left"),
                nextEl: section.querySelector(".carousel-control-right")
            },
            pagination: {
                el: section.querySelector(".swiper-pagination"),
                clickable: true,
                renderBullet: function (index, className) {
                    return `<div class=${className}>
                  <span class="number">${index + 1}</span>
                  <span class="line"></span>
              </div>`;
                }
            },
            breakpoints: {
                768: {
                    slidesPerView: slidesPerView[1]
                },
                1200: {
                    slidesPerView: slidesPerView[2]
                }
            }
        });
    }


    return (
        <div>
<section class="mt-5">
  <div class="container">
    <h1>About Tanzania </h1>
    <p>Tanzania, officially the United Republic of Tanzania, is a country in East Africa within the African Great Lakes region. It borders Uganda to the north; Kenya to the northeast; Comoro Islands and the Indian Ocean to the east; Mozambique and Malawi to the south; Zambia to the southwest; and Rwanda, Burundi, and the Democratic Republic of the Congo to the west. Mount Kilimanjaro, Africa's highest mountain, is in northeastern Tanzania.</p>
  </div>
</section>

<section class="section-with-carousel section-with-right-offset position-relative mt-5">
  <div class="container">
    <h2 class="mb-3">Tanzania Through Photos</h2>
  </div>
  <div class="carousel-wrapper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="https://assets.codepen.io/162656/tanzania1.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Nungwi, Zanzibar, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania2.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Ngorongoro Crater, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania3.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania4.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Serengeti, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania5.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lushoto District, Tanga Region, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="https://assets.codepen.io/162656/tanzania6.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Serengeti, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania7.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Serengeti National Park, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania8.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Tarangire National Park, Arusha, Tanzania
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-controls">
    <button class="carousel-control carousel-control-left" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
        <path fill-rule="evenodd" d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"></path>
      </svg>
    </button>
    <button class="carousel-control carousel-control-right" type="button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
        <path fill-rule="evenodd" d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"></path>
      </svg>
    </button>
  </div>
  <div class="swiper-pagination"></div>
</section>

<section class="mt-5">
  <div class="container">
    <h2 class="mb-3">
      Wildlife and conservation
    </h2>
    <p>Tanzania contains around 20% of the species of Africa's enormous warm-blooded animal populace, found over its 21 National parks, reserves, 1 conservation area, and 3 marine parks. Spread over a zone of in excess of 42,000 square kilometres (16,000 sq. mi) and shaping around 38% of the nation's area. Tanzania has 21 national parks, plus a variety of game and forest reserves, including the Ngorongoro Conservation Area. In western Tanzania, Gombe Stream National Park is the site of Jane Goodall's ongoing study of chimpanzee behaviour, which started in 1960.</p>
  </div>
</section>

<section class="section-with-carousel section-with-left-offset position-relative mt-5">
  <div class="container">
    <h2 class="mb-3">Tanzania Through Photos</h2>
  </div>
  <div class="carousel-wrapper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="https://assets.codepen.io/162656/tanzania1.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Nungwi, Zanzibar, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania2.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Ngorongoro Crater, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania3.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania4.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Serengeti, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania5.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Lushoto District, Tanga Region, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="480" src="https://assets.codepen.io/162656/tanzania6.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Serengeti, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania7.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Serengeti National Park, Tanzania
            </figcaption>
          </figure>
        </div>
        <div class="swiper-slide">
          <figure>
            <img width="640" height="427" src="https://assets.codepen.io/162656/tanzania8.jpg" alt=""/>
            <figcaption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                <path d="M12 13.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                <path fill-rule="evenodd" d="M19.071 3.429C15.166-.476 8.834-.476 4.93 3.429c-3.905 3.905-3.905 10.237 0 14.142l.028.028 5.375 5.375a2.359 2.359 0 003.336 0l5.403-5.403c3.905-3.905 3.905-10.237 0-14.142zM5.99 4.489A8.5 8.5 0 0118.01 16.51l-5.403 5.404a.859.859 0 01-1.214 0l-5.378-5.378-.002-.002-.023-.024a8.5 8.5 0 010-12.02z"></path>
              </svg>
              Tarangire National Park, Arusha, Tanzania
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="carousel-controls">
    <div class="carousel-control carousel-control-left">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
        <path fill-rule="evenodd" d="M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"></path>
      </svg>
    </div>
    <div class="carousel-control carousel-control-right">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40">
        <path fill-rule="evenodd" d="M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"></path>
      </svg>
    </div>
  </div>
  <div class="swiper-pagination"></div>
</section>

<section class="copyright my-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto">
        <p class="mb-0">Images from <a href="https://unsplash.com/" target="_blank">Unsplash</a></p>
      </div>
      <div class="col-auto">
        <p class="mb-0">Text from <a href="https://en.wikipedia.org/wiki/Tanzania" target="_blank">Wikipedia</a></p>
      </div>
    </div>

  </div>
</section>

<footer class="page-footer">
  <span>made by </span>
  <a href="https://georgemartsoukos.com/" target="_blank">
    <img width="24" height="24" src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg" alt="George Martsoukos logo"/>
  </a>
</footer>
        </div>
    )
}

export default ActiveSlider;