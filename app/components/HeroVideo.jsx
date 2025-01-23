import React from 'react';
import '~/styles/video.css';

const HeroVideo = () => {
  return (
    <section className="hero__video-section">
      <section
        id="shopify-section-template--18355397066979__6cf8709f-b5f0-42f6-be5f-a4a73a575431"
        className="shopify-section cc-video has-content-boundary-top has-content-boundary-top--flipped"
      >
        {/* <link
          rel="stylesheet"
          href="//alchemy-theme-sharp.myshopify.com/cdn/shop/t/61/assets/video.css?v=20238206854598262381736355012"
        />
        <link
          rel="stylesheet"
          href="//alchemy-theme-sharp.myshopify.com/cdn/shop/t/61/assets/text-overlay.css?v=78664566719006840301736355012"
        /> */}
        <div
          className="section section--m-0 color-scheme color-scheme--1 content-boundary content-boundary--top-flipped"
          id="template--18355397066979__6cf8709f-b5f0-42f6-be5f-a4a73a575431"
        >
          <div className="video-section video-section--full-width relative flex mx-auto overflow-hidden video-section--played">
            <div className="container flex justify-center items-center">
              <div
                className="text-overlay text-overlay--box align-ltr-center"
                style={{borderRadius: '0px'}}
              >
                <p className="text-overlay__block subheading">
                  WE HAVE A VISION
                </p>
                <h2 className="text-overlay__block text-overlay__heading h0">
                  Uniting people
                  <br />
                  to our movement
                </h2>
                <div className="text-overlay__block rte text-lg">
                  <p>To produce the best performance wear on the planet.</p>
                </div>
                <div className="text-overlay__block text-overlay__button">
                  <div className="btn-row flex flex-wrap content-align-center">
                    <a className="btn btn--hollow" href="/pages/about">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="video-section__media block w-full absolute top-0 left-0 h-full" style={{ paddingTop: 0,}}>
              <div className="video-section__bg-video pointer-events-none absolute top-0 left-0 w-full h-full no-js-hidden">
                <video-component
                  className="has-video block w-full h-full"
                  data-autoplay="true"
                  data-background="true"
                  data-description
                >
                  <video
                    playsInline="true"
                    autoPlay="autoplay"
                    muted="muted"
                    loop="loop"
                    preload="metadata"
                  >
                    <source
                      src="//alchemy-theme-sharp.myshopify.com/cdn/shop/videos/c/vp/fddfd1b64f7a404998387f3eb7db60c8/fddfd1b64f7a404998387f3eb7db60c8.HD-720p-1.6Mbps.mp4?v=0"
                      type="video/mp4"
                    />
                    <img
                      loading="lazy"
                      hidden
                      src="//alchemy-theme-sharp.myshopify.com/cdn/shop/files/preview_images/fddfd1b64f7a404998387f3eb7db60c8.thumbnail.0000000_small.jpg?v=1655138571"
                    />
                  </video>
                </video-component>
              </div>
              <div className="media media--has-overlay absolute top-0 left-0 w-full h-full">
                <img
                  src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/pexels-jeremy-bishop-1260133-2765872_EXT.webp?v=1737653702"
                  className="img-fit video-played-hidden"
                  loading="lazy"
                  fetchpriority="auto"
                  width={3200.0}
                  style={{ opacity: 1,}}
                  height={1800}
                  alt=""
                />
                {/* <video
                autoplay
                  src="https://cdn.shopify.com/videos/c/o/v/95f9850e6f534a65b255ec25da7d72a0.mp4"
                  className="img-fit video-played-hidden"
                  loading="lazy"
                  fetchpriority="auto"
                  width={3200.0}
                  height={1800}
                  style={{ opacity: 1,}}
                ></video> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HeroVideo;
