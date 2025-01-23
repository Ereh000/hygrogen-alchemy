import React from 'react';
import '~/styles/textOverlay.css';
import '~/styles/homeBanner.css';

const HomeBanner = () => {
  return (
    <section className="home__banner-section">
      <section
        id="shopify-section-template--18355397066979__slideshow_pbqFER"
        className="shopify-section cc-slideshow banner-candidate active-banner"
      >
        <div id="template--18355397066979__slideshow_pbqFER-bg" className>
          <div
            className="slideshow-section section section--m-0"
            id="template--18355397066979__slideshow_pbqFER"
          >
            <slide-show
              className="block relative overflow-hidden"
              role="region"
              aria-roledescription="Carousel"
              aria-label="Featured collections and new arrivals"
              data-autoplay="true"
              data-speed={8}
              data-transition="slide-fade"
              data-direction="next"
              style={{playState: 'paused'}}
            >
              <div
                className="slideshow flex"
                id="slideshow-template--18355397066979__slideshow_pbqFER"
                aria-live="polite"
                aria-atomic="true"
              >
                <div
                  className="slideshow__slide image-banner w-full fixed-height"
                  role="group"
                  aria-roledescription="Slide"
                  aria-label="1 of 2"
                  data-index={0}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <div className="image-banner__image media media--has-overlay absolute top-0 left-0 w-full h-full has-motion">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/Rockay-Homepage-Carousel-1_6c32e40c-f5e0-4354-aeca-b40938080895_Enlarged_B.webp?v=1737645413"
                        className="img-fit"
                        loading="eager"
                        fetchpriority="auto"
                        width={4000.0}
                        height={1572}
                        alt=""
                        style={{objectPosition: '23.3508% 67.6203%'}}
                      />
                  </div>
                  <div className="slideshow__text-container flex items-center absolute top-0 left-0 w-full h-full">
                    <div className="slideshow__text container--page-width flex justify-start md-down-justify-center">
                      <div className="text-overlay px-2 sm:px-0 align-ltr-left md-down-text-center has-motion">
                        <p className="text-overlay__block subheading">
                          Premium Quality
                        </p>
                        <h2 className="text-overlay__block text-overlay__heading h0">
                          SUSTAINABLE
                          <br />
                          PERFORMANCE
                        </h2>
                        <div className="text-overlay__block rte text-lg max-w-[580px]">
                          <p>
                            Delivering a force for good with eco-friendly
                            sportswear.
                          </p>
                        </div>
                        <div className="text-overlay__btns">
                          <div className="btn-row flex flex-wrap content-align-left">
                            <a
                              className="btn btn--hollow"
                              href="/collections/men"
                              tabIndex={-1}
                            >
                              Shop Men's
                            </a>
                            <a
                              className="btn btn--hollow"
                              href="/collections/women"
                              tabIndex={-1}
                            >
                              Shop Women's
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="slideshow__slide image-banner w-full fixed-height is-active"
                  role="group"
                  aria-roledescription="Slide"
                  aria-label="2 of 2"
                  data-index={1}
                  aria-hidden="false">
                  <div className="image-banner__image media media--has-overlay absolute top-0 left-0 w-full h-full has-motion">
                    <picture>
                      <source
                        srcSet="//alchemy-theme-sharp.myshopify.com/cdn/shop/files/ALCHEMY_SHARP_SLIDER_Mobile_B_d136eff5-f697-40f5-bd7b-d8d74127dc89.jpg?v=1722979578&width=346 346w"
                        media="(max-width: 480px)"
                        width={346}
                        height={164}
                      />
                      <img
                        srcSet="//alchemy-theme-sharp.myshopify.com/cdn/shop/files/340827843_910238580226779_4094962197498980633_n_EXT_NEW_ALT_Flip.jpg?v=1722355031&width=600 480w, //alchemy-theme-sharp.myshopify.com/cdn/shop/files/340827843_910238580226779_4094962197498980633_n_EXT_NEW_ALT_Flip.jpg?v=1722355031&width=1225 980w, //alchemy-theme-sharp.myshopify.com/cdn/shop/files/340827843_910238580226779_4094962197498980633_n_EXT_NEW_ALT_Flip.jpg?v=1722355031&width=1500 1200w, //alchemy-theme-sharp.myshopify.com/cdn/shop/files/340827843_910238580226779_4094962197498980633_n_EXT_NEW_ALT_Flip.jpg?v=1722355031&width=1750 1400w, //alchemy-theme-sharp.myshopify.com/cdn/shop/files/340827843_910238580226779_4094962197498980633_n_EXT_NEW_ALT_Flip.jpg?v=1722355031&width=2000 1600w, //alchemy-theme-sharp.myshopify.com/cdn/shop/files/340827843_910238580226779_4094962197498980633_n_EXT_NEW_ALT_Flip.jpg?v=1722355031&width=2400 1920w"
                        src="//alchemy-theme-sharp.myshopify.com/cdn/shop/files/340827843_910238580226779_4094962197498980633_n_EXT_NEW_ALT_Flip.jpg?v=1722355031&width=1400"
                        className="img-fit"
                        loading="eager"
                        fetchpriority="auto"
                        width={2400.0}
                        height={1139}
                        alt="Content for Alchemy Premium Shopify theme by Clean Canvas"
                        style={{objectPosition: '46.706% 8.5805%'}}
                      />
                    </picture>
                  </div>
                  <div className="slideshow__text-container flex items-center absolute top-0 left-0 w-full h-full">
                    <div className="slideshow__text container--page-width flex justify-end md-down-justify-center">
                      <div className="text-overlay px-2 sm:px-0 align-ltr-left md-down-text-center has-motion">
                        <p className="text-overlay__block subheading">
                          Ground-breaking products
                        </p>
                        <h2 className="text-overlay__block text-overlay__heading h0">
                          100% Recycled
                          <br />
                          Sportswear
                        </h2>
                        <div className="text-overlay__block rte text-lg max-w-[580px]">
                          <p>
                            The ultimate in Sports Performance and
                            sustainability.
                          </p>
                        </div>
                        <div className="text-overlay__btns">
                          <div className="btn-row flex flex-wrap content-align-left">
                            <a
                              className="btn btn--hollow"
                              href="/collections/socks"
                            >
                              Shop Socks
                            </a>
                            <a
                              className="btn btn--hollow"
                              href="/collections/apparel"
                            >
                              Shop Apparel
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="slideshow-ctrl container absolute flex justify-center w-full pointer-events-none no-js-hidden">
                <div className="slideshow-nav flex items-center">
                  <button
                    type="button"
                    className="slideshow-nav__btn btn hidden md:block has-ltr-icon"
                    name="prev"
                    aria-controls="slideshow-template--18355397066979__slideshow_pbqFER"
                  >
                    <span className="visually-hidden">Previous</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon"
                    >
                      <path fill="none" d="m16 4.7-8 8 8 8" />
                    </svg>
                  </button>
                  <div className="slideshow-nav__counter">
                    <span className="slideshow-nav__counter-current">2</span>
                    <span aria-hidden="true"> / </span>
                    <span className="visually-hidden">of</span>
                    <span className="slideshow-nav__counter-total">2</span>
                  </div>
                  <div className="slideshow-nav__autoplay flex items-center">
                    <button
                      type="button"
                      className="slideshow-nav__btn autoplay-btn btn"
                    >
                      <span className="pause-icon block pointer-events-none">
                        <span className="visually-hidden">Pause slideshow</span>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 8 12"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon"
                        >
                          <path d="M1.2.75c-.387 0-.7.235-.7.525v9.45c0 .29.313.525.7.525.387 0 .7-.235.7-.525v-9.45c0-.29-.313-.525-.7-.525ZM6.8.75c-.387 0-.7.235-.7.525v9.45c0 .29.313.525.7.525.387 0 .7-.235.7-.525v-9.45c0-.29-.313-.525-.7-.525Z" />
                        </svg>
                      </span>
                      <span className="play-icon block pointer-events-none">
                        <span className="visually-hidden">Play slideshow</span>
                        <svg
                          width={10}
                          height={14}
                          viewBox="0 0 10 14"
                          fill="currentColor"
                          aria-hidden="true"
                          focusable="false"
                          role="presentation"
                          className="icon"
                        >
                          <path d="M1.482.815A1 1 0 0 0 0 1.69v10.517a1 1 0 0 0 1.525.851L10.54 7.5a1 1 0 0 0-.043-1.728L1.481.815Z" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="slideshow-nav__btn btn hidden md:block has-ltr-icon"
                    name="next"
                    aria-controls="slideshow-template--18355397066979__slideshow_pbqFER"
                  >
                    <span className="visually-hidden">Next</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon"
                    >
                      <path d="m8 4.7 8 8-8 6.6" fill="none" />
                    </svg>
                  </button>
                </div>
              </div>
            </slide-show>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeBanner;
