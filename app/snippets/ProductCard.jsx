import React from 'react';

const ProductCard = () => {
  return (
    <li className="flex flex-col slider__item">
      <product-card
        className="card card--product relative grow flex w-full fade-in cc-animate-init cc-animate-in"
        data-cc-animate
        data-cc-animate-delay="0.15s"
        style={{animationDelay: '0.15s'}}
      >
        <div className="card__media has-hover-image relative">
          <a
            href="/collections/socks/products/evo"
            className="media block relative js-prod-link"
            style={{paddingTop: '100%'}}
            tabIndex={-1}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/Men_sNunatakSmock_FadedTeak-Front.jpg?v=1737481973"
              className="img-fit card__main-image object-center"
              data-media-id={25538400190691}
              loading="lazy"
              fetchpriority="auto"
              width={1600.0}
              height={1600}
              alt=""
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/Men_sMonsoonNunatakSmock_FadedTeak_2048px.jpg?v=1737481973"
              className="img-fit card__hover-image object-center"
              loading="lazy"
              fetchpriority="auto"
              width={1600.0}
              height={1600}
              alt="Evo"
            />
          </a>
          <div className="product-label-container pointer-events-none absolute top-0 left-0">
            <div className="product-label-wrapper">
              <span className="product-label product-label--sale">
                Up to 50% off
              </span>
            </div>
          </div>
        </div>
        <div className="md:flex flex-auto relative">
          <div className="card__info w-full align-ltr-left">
            <p className="card__title">
              <a
                href="/collections/socks/products/evo"
                className="card-link text-current js-prod-link"
              >
                Evo
              </a>
            </p>
            <div className="price price--on-sale">
              <div className="price__default">
                <span className="price__current">$9.50</span>
                <s className="price__was">$19.00</s>
              </div>
              <div className="unit-price text-xs" hidden>
                <span className="unit-price__price" />
                <span className="unit-price__separator"> / </span>
                <span className="unit-price__unit" />
              </div>
              <div className="price__no-variant" hidden>
                <span className="price__current">Unavailable</span>
              </div>
            </div>
            <div className="card__rating mt-2">
              <div
                className="rating"
                role="img"
                aria-label="3.67 out of 5.0 stars"
              >
                <span
                  className="rating__stars"
                  aria-hidden="true"
                  style={{rating: '3.5', ratingMax: 5.0}}
                >
                  ★★★★★
                </span>
                <span className="rating__count">3</span>
              </div>
            </div>
            <p className="mt-2 text-sm">1 color</p>
          </div>
          <div className="card__quick-add hide-until-md">
            <div className="no-js-hidden">
              <button
                type="button"
                className="btn btn--primary js-quick-add"
                aria-label="Choose options"
                aria-haspopup="dialog"
                data-product-url="/collections/socks/products/evo"
              >
                <span className="quick-add-btn-icon inline-block pointer-events-none">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    role="presentation"
                    className="icon"
                  >
                    <path d="M22.394 18.728c.544 0 .993.407 1.059.933l.008.134V23h3.206a1.067 1.067 0 0 1 .133 2.125l-.133.009H23.46l.001 3.205a1.067 1.067 0 0 1-2.125.134l-.008-.134v-3.205h-3.206a1.067 1.067 0 0 1-.134-2.125l.134-.009h3.205v-3.205c0-.59.478-1.067 1.067-1.067zM16 2.667c3.601 0 6.536 2.665 6.662 6l.005.222v1.778H25.6c.542-.007.994.396 1.059.922l.008.115v5.885a1.067 1.067 0 0 1-2.125.133l-.008-.133v-.258h-.002l.001-4.59H7.467V27.26l1.48-.001.078-.005h7.14a1.04 1.04 0 0 1 .142 2.07l-.141.01H6.4c-.55 0-1.002-.404-1.06-.924l-.007-.113V11.704c.009-.542.425-.982.952-1.033l.115-.004h2.933V8.889c0-3.436 2.986-6.222 6.667-6.222zm0 2.074c-2.453 0-4.444 1.856-4.444 4.147v1.779h8.888V8.889c0-2.292-1.99-4.148-4.444-4.148z" />
                  </svg>
                </span>
                <span
                  className="quick-add-btn-text block pointer-events-none"
                  aria-hidden="true"
                >
                  Choose options
                </span>
              </button>
            </div>
          </div>
        </div>
      </product-card>
    </li>
  );
};

export default ProductCard;
