import React from 'react';
import '~/styles/slideshow.css';

const ImageWithText = () => {
  return (
    <section className="image__with-text-section">
      <div
        id="shopify-section-template--18355397066979__slideshow_with_text_Qq8mpj"
        className="shopify-section cc-slideshow-with-text has-content-boundary-top has-content-boundary-top--flipped"
      >
        <div
          className="section content-boundary content-boundary--top-flipped section--padded section--m-0 cc-animate-init cc-animate-in"
          id="template--18355397066979__slideshow_with_text_Qq8mpj"
          data-cc-animate
        >
          <div className="container">
            <div className="media-with-text md:grid md:grid-cols-2 content-block overflow-hidden">
              <div
                className="slideshow-section media-with-text__media relative flex flex-col justify-center h-full overflow-hidden cc-animate-init cc-animate-in"
                data-cc-animate
              >
                <slide-show
                  className="block relative overflow-hidden"
                  role="region"
                  aria-roledescription="Carousel"
                  aria-label="Featured collections and new arrivals"
                  data-autoplay="false"
                  data-speed={5}
                  data-transition="slide-fade"
                >
                  <div
                    className="slideshow flex w-full h-full"
                    id="slideshow-template--18355397066979__slideshow_with_text_Qq8mpj"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    <div
                      className="slideshow__slide is-active w-full"
                      role="group"
                      aria-roledescription="Slide"
                      aria-label="1 of 2"
                      data-index={0}
                      style={{slideIndex: 1, paddingBottom: '100.0%'}}
                      aria-hidden="false"
                    >
                      <div className="media absolute top-0 left-0 w-full h-full has-motion">
                        <picture>
                          <source
                            srcSet="//alchemy-theme-sharp.myshopify.com/cdn/shop/files/imaage-1_1420x_Crop.jpg?v=1722970090&width=670 670w, //alchemy-theme-sharp.myshopify.com/cdn/shop/files/imaage-1_1420x_Crop.jpg?v=1722970090&width=800 800w"
                            media="(max-width: 480px)"
                            width={800}
                            height={800}
                          />
                          <img
                            src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/2T7A2377_2048.jpg?v=1737481807"
                            className="img-fit"
                            loading="lazy"
                            fetchpriority="auto"
                            width={1750.0}
                            height={1750}
                            alt=""
                          />
                        </picture>
                      </div>
                    </div>
                    <div
                      className="slideshow__slide w-full"
                      role="group"
                      aria-roledescription="Slide"
                      aria-label="2 of 2"
                      tabIndex={1}
                      data-index={1}
                      style={{slideIndex: 2, paddingBottom: '100.0%'}}
                      aria-hidden="true"
                    >
                      <div className="media absolute top-0 left-0 w-full h-full has-motion">
                        <picture>
                          <source
                            srcSet="//alchemy-theme-sharp.myshopify.com/cdn/shop/files/rockay-bg-free-shipping_Crop_Edit.jpg?v=1635856043&width=670 670w, //alchemy-theme-sharp.myshopify.com/cdn/shop/files/rockay-bg-free-shipping_Crop_Edit.jpg?v=1635856043&width=800 800w"
                            media="(max-width: 480px)"
                            width={800}
                            height={800}
                          />
                          <img
                            src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/2T7A2377_2048.jpg?v=1737481807"
                            className="img-fit"
                            loading="lazy"
                            fetchpriority="auto"
                            width={1250.0}
                            height={1250}
                            alt=""
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                  <div className="slideshow-ctrl container absolute flex justify-center w-full pointer-events-none no-js-hidden">
                    <div className="slideshow-pagination flex items-center">
                      <button
                        className="page-btn"
                        data-index={0}
                        aria-controls="slideshow-template--18355397066979__slideshow_with_text_Qq8mpj"
                        aria-current="true"
                        fdprocessedid="6ykw9j"
                      >
                        <span className="visually-hidden">
                          Load slide 1 of 2
                        </span>
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          className="page-btn__circle block pointer-events-none"
                        >
                          <circle
                            className="page-btn__fg-circle"
                            cx={15}
                            cy={15}
                            r="3.5"
                          />
                          <circle
                            className="page-btn__bg-circle"
                            cx={15}
                            cy={15}
                            r={6}
                          />
                        </svg>
                      </button>
                      <button
                        className="page-btn"
                        data-index={1}
                        aria-controls="slideshow-template--18355397066979__slideshow_with_text_Qq8mpj"
                        fdprocessedid="05j9cu"
                      >
                        <span className="visually-hidden">
                          Load slide 2 of 2
                        </span>
                        <svg
                          width={30}
                          height={30}
                          viewBox="0 0 30 30"
                          fill="none"
                          className="page-btn__circle block pointer-events-none"
                        >
                          <circle
                            className="page-btn__fg-circle"
                            cx={15}
                            cy={15}
                            r="3.5"
                          />
                          <circle
                            className="page-btn__bg-circle"
                            cx={15}
                            cy={15}
                            r={6}
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </slide-show>
              </div>
              <div className="media-with-text__text flex flex-col justify-center h-full align-ltr-left md-down-text-center p-8 md:p-10 lg:p-12 xl:p-20 mx-auto max-w-prose">
                <h2
                  className="section__heading fade-in-up cc-animate-init cc-animate-in"
                  data-cc-animate
                  data-cc-animate-delay="0.1s"
                  style={{animationDelay: '0.1s'}}
                >
                  We aim to use the best materials possible
                </h2>
                <div
                  className="rte fade-in-up cc-animate-init cc-animate-in"
                  data-cc-animate
                  data-cc-animate-delay="0.2s"
                  style={{animationDelay: '0.2s'}}
                >
                  <p>
                    Sustainability and performance, we believe they go
                    hand-in-hand. Reducing our carbon footprint is a core
                    philosophy at Rockay, and one of the biggest factors is the
                    materials we use in our socks, sleeves, apparel and
                    accessories. Wherever we can, we use recycled and
                    sustainable materials and technologies.
                  </p>
                </div>
                <div
                  className="media-with-text__link mt-8 fade-in-up cc-animate-init cc-animate-in"
                  data-cc-animate
                  data-cc-animate-delay="0.3s"
                  style={{animationDelay: '0.3s'}}
                >
                  <a className="feature-link" href="/pages/about">
                    About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithText;
