import React from 'react';

const CollectionCard = () => {
  return (
    <li className="slider__item">
      <div
        className="card relative flex flex-col fade-in cc-animate-init cc-animate-in"
        data-cc-animate
        data-cc-animate-delay="0.15s"
        style={{animationDelay: '0.15s'}}
      >
        <div className="card__media relative">
          <a
            href="/collections/men"
            className="media media-hover-effect block relative"
            tabIndex={-1}
            style={{paddingTop: '100%'}}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/Men_sBaselinePull-onZipTop_LightBarkMarl_2048px.jpg?v=1737482001"
              className="img-fit object-center"
              loading="lazy"
              fetchpriority="auto"
              alt=""
            />
            {/* <img
              alt="Hydrogen snowboard. Front and back."
              decoding="async"
              height="125"
              loading="lazy"
              className="img-fit object-center"
              sizes="(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw"
              src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/Rockay-Homepage-Carousel-1_6c32e40c-f5e0-4354-aeca-b40938080895_Enlarged_B.webp?v=1737645413"
              width="100"
              style={{width: '100%', aspectRatio: '4/5'}}
            /> */}
          </a>
        </div>
        <div className="card__info relative align-ltr-center">
          <div className="card__title">
            <a href="/collections/men" className="card-link">
              Men
            </a>
          </div>
          <div className="text-sm">13 products</div>
        </div>
      </div>
    </li>
  );
};

export default CollectionCard;
