import React from 'react';

const CollectionCard = ({collection}) => {
  // console.log(collection.image);
  return (
    <li className="slider__item">
      <div
        className="card relative flex flex-col fade-in cc-animate-init cc-animate-in"
        data-cc-animate
        // data-cc-animate-delay="0.15s"
        style={{animationDelay: '0.15s',}}
      >
        <div className="card__media relative">
          <a
            href="/collections/men"
            className="media media-hover-effect block relative"
            tabIndex={-1}
            style={{paddingTop: '100%'}}
          >
            <img
              // src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/Men_sBaselinePull-onZipTop_LightBarkMarl_2048px.jpg?v=1737482001"
              src={collection.image.transformedSrc}
              className="img-fit object-center"
              loading="lazy"
              fetchpriority="auto"
              alt=""
            />
          </a>
        </div>
        <div className="card__info relative align-ltr-center">
          <div className="card__title">
            <a href="/collections/men" className="card-link">
              {collection.title}
            </a>
          </div>
          <div className="text-sm">13 products</div>
        </div>
      </div>
    </li>
  );
};

export default CollectionCard;
