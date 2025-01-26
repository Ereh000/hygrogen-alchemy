import React from 'react';
import CollectionCard from '~/snippets/CollectionCard';

const FeaturedCollection = ({collections}) => {
//   console.log(collections);
  return (
    <section className="featured__collection-section">
      <section
        id="shopify-section-template--18355397066979__collection_list_eHYPFQ"
        className="shopify-section cc-collection-list"
      >
        <div className="section">
          <carousel-slider className="carousel block xl:overflow-hidden">
            <div className="container">
              <div className="carousel__header flex items-center justify-between mb-6">
                <h2
                  className="section__heading flex-auto mb-0 cc-animate-init cc-animate-in"
                  data-cc-animate
                >
                  Our Collections
                </h2>
                <div className="slider-nav flex no-js-hidden">
                  <button
                    type="button"
                    className="slider-nav__btn btn has-ltr-icon"
                    name="prev"
                    disabled
                  >
                    <span className="visually-hidden">Previous</span>
                    <svg
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon"
                    >
                      <path d="m3.75 11.3 8.5 8.5M4.75 12h15.5M3.75 12.7l8.5-8.5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="slider-nav__btn btn has-ltr-icon"
                    name="next"
                  >
                    <span className="visually-hidden">Next</span>
                    <svg
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      className="icon"
                    >
                      <path d="m12.25 19.8 8-8.5M3.75 12h15.5M12.25 4.2l8 8.5" />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="slider"
                id="slider-template--18355397066979__collection_list_eHYPFQ"
              >
                <div className="container">
                  <ul
                    className="slider__grid grid grid-flow-col auto-cols-2 sm:auto-cols-2 lg:auto-cols-3 xl:auto-cols-4 gap-x-theme gap-y-card"
                    role="list"
                  >
                    {collections.edges.map((collection) => (
                      <CollectionCard collection={collection.node} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </carousel-slider>
        </div>
      </section>
    </section>
  );
};

export default FeaturedCollection;
