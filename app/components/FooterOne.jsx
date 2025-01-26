import React from 'react';
import '~/styles/footer.css'

const FooterOne = () => {
  return (
    <section className="footer__one-section">
      <div
        id="shopify-section-sections--18355397492963__footer"
        className="shopify-section shopify-section-group-footer-group has-content-boundary-top has-content-boundary-top--flipped"
      >
        {/* <link
          rel="stylesheet"
          href="//alchemy-theme-sharp.myshopify.com/cdn/shop/t/61/assets/footer.css?v=113439351468982172041736355012"
        />
        <style
          data-shopify
          dangerouslySetInnerHTML={{
            __html:
              '.footer {\n    --bg-color: 51 51 51 / 1.0;\n    --heading-color: 248 248 248;\n    --text-color: 248 248 248;\n    --link-color: 248 248 248;\n  }',
          }}
        /> */}
        <footer className="footer content-boundary content-boundary--top-flipped">
          <div className="container">
            <div className="footer__main flex flex-wrap lg:flex-nowrap gap-12 gap-y-10">
              <div className="footer-block footer-block--text w-full md:flex-1 md:grow-[3]">
                <div
                  className="footer-block__image mb-8"
                  style={{maxWidth: '140px'}}
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/ALCHEMY_Rockay_Logo_WHT.webp?v=1737733574?v=1633690326&width=280"
                    className="footer-block__image"
                    loading="lazy"
                    fetchpriority="auto"
                    width={280}
                    height={41}
                    alt="Alchemy"
                  />
                </div>
                <div className="footer-block__text rte">
                  <p>
                    Thanks to{' '}
                    <a
                      href="https://rockay.com/"
                      title="https://rockay.com/"
                      target="_blank"
                    >
                      <strong>Rockay</strong>
                    </a>{' '}
                    for allowing us to use their photography and products in
                    this demo store. These assets and content remain their sole
                    property and are not for re-use across any other stores.
                  </p>
                </div>
              </div>
              <div className="footer-block footer-block--links flex-1">
                <h2 className="footer-block__heading h6 mb-5 uppercase">
                  SHOP
                </h2>
                <ul className="footer-menu" role="list">
                  <li className="footer-menu__item">
                    <a href="/collections/apparel">Apparel</a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="/collections/socks">Socks</a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="/collections">Our Collections</a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="/collections/all-products">All Products</a>
                  </li>
                </ul>
              </div>
              <div className="footer-block footer-block--links flex-1">
                <h2 className="footer-block__heading h6 mb-5 uppercase">
                  ABOUT
                </h2>
                <ul className="footer-menu" role="list">
                  <li className="footer-menu__item">
                    <a href="/pages/our-athletes">Our Athletes</a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="/pages/about">About Us</a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="/blogs/news">Blog</a>
                  </li>
                  <li className="footer-menu__item">
                    <a href="/pages/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer-block footer-block--newsletter w-full md:flex-1 lg:grow-[2]">
                <h2 className="footer-block__heading h6 mb-5 uppercase">
                  Newsletter
                </h2>
                <div className="rte">
                  <p>
                    Sign up for exclusive offers and discounts, original
                    stories, VIP access to special events and much more.
                  </p>
                </div>
                <div className="mt-6">
                  <form
                    method="post"
                    action="/contact#contact_form"
                    id="contact_form"
                    acceptCharset="UTF-8"
                    className="form"
                  >
                    <input
                      type="hidden"
                      name="form_type"
                      defaultValue="customer"
                    />
                    <input type="hidden" name="utf8" defaultValue="✓" />
                    <input
                      type="hidden"
                      name="contact[tags]"
                      defaultValue="prospect, newsletter"
                    />
                    <div className="form__field">
                      <label
                        className="label visually-hidden"
                        htmlFor="footer-signup"
                      >
                        Email
                      </label>
                      <div className="input-with-arrow relative">
                        <input
                          type="email"
                          className="input w-full focus-inset"
                          id="footer-signup"
                          name="contact[email]"
                          defaultValue
                          placeholder="Your email"
                          autoComplete="email"
                          aria-required="true"
                          required
                          fdprocessedid="7ars6d"
                        />
                        <button
                          className="btn absolute top-0 ltr:right-0 rtl:left-0 h-full focus-inset has-ltr-icon"
                          fdprocessedid="7bcxp"
                        >
                          <span className="visually-hidden">Subscribe</span>
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
                            <path d="m12.25 19.8 8-8.5M3.75 12h15.5M12.25 4.2l8 8.5" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-footer">
            <div className="container">
              <div className="lower-footer__left">
                <form
                  method="post"
                  action="/localization"
                  id="footer-localization"
                  acceptCharset="UTF-8"
                  className="form localization"
                  encType="multipart/form-data"
                >
                  <input
                    type="hidden"
                    name="form_type"
                    defaultValue="localization"
                  />
                  <input type="hidden" name="utf8" defaultValue="✓" />
                  <input type="hidden" name="_method" defaultValue="put" />
                  <input type="hidden" name="return_to" defaultValue="/" />
                  <div className="localization__grid">
                    <div className="localization__selector">
                      <input
                        type="hidden"
                        name="country_code"
                        defaultValue="US"
                      />
                      <country-selector>
                        <label
                          className="label visually-hidden no-js-hidden"
                          htmlFor="footer-localization-country-button"
                        >
                          Country/Region
                        </label>
                        <div className="custom-select relative w-full no-js-hidden">
                          <button
                            className="custom-select__btn input items-center"
                            type="button"
                            aria-expanded="false"
                            aria-haspopup="listbox"
                            id="footer-localization-country-button"
                            fdprocessedid="95g9sh"
                          >
                            <span className="text-start">
                              United States (USD&nbsp;$)
                            </span>
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              className="icon"
                              role="presentation"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <path
                                d="M20 8.5 12.5 16 5 8.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                fill="none"
                              />
                            </svg>
                          </button>
                          <ul
                            className="custom-select__listbox absolute invisible"
                            role="listbox"
                            tabIndex={-1}
                            aria-hidden="true"
                            hidden
                            aria-activedescendant="footer-localization-country-opt-0"
                          >
                            <li
                              className="custom-select__option flex items-center js-option"
                              id="footer-localization-country-opt-0"
                              role="option"
                              data-value="US"
                              aria-selected="true"
                            >
                              <span className="pointer-events-none">
                                United States (USD&nbsp;$)
                              </span>
                            </li>
                          </ul>
                        </div>
                      </country-selector>
                      {/* 
                      <noscript>
                        &lt;label for="footer-localization-country-native"
                        class="label
                        visually-hidden"&gt;Country/Region&lt;/label&gt; &lt;div
                        class="select inline-block relative"&gt; &lt;select
                        class="custom-select__native"
                        id="footer-localization-country-native"
                        name="country_code"&gt;&lt;option
                        value="AU"&gt;Australia
                        (AUD&amp;nbsp;$)&lt;/option&gt;&lt;option
                        value="AT"&gt;Austria
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="BE"&gt;Belgium
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="CA"&gt;Canada
                        (CAD&amp;nbsp;$)&lt;/option&gt;&lt;option
                        value="CZ"&gt;Czechia
                        (CZK&amp;nbsp;Kč)&lt;/option&gt;&lt;option
                        value="DK"&gt;Denmark
                        (DKK&amp;nbsp;kr.)&lt;/option&gt;&lt;option
                        value="FI"&gt;Finland
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="FR"&gt;France
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="DE"&gt;Germany
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="HK"&gt;Hong Kong SAR
                        (HKD&amp;nbsp;$)&lt;/option&gt;&lt;option
                        value="IE"&gt;Ireland
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="IL"&gt;Israel
                        (ILS&amp;nbsp;₪)&lt;/option&gt;&lt;option
                        value="IT"&gt;Italy
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="JP"&gt;Japan
                        (JPY&amp;nbsp;¥)&lt;/option&gt;&lt;option
                        value="NL"&gt;Netherlands
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="NZ"&gt;New Zealand
                        (NZD&amp;nbsp;$)&lt;/option&gt;&lt;option
                        value="NO"&gt;Norway
                        (USD&amp;nbsp;$)&lt;/option&gt;&lt;option
                        value="PL"&gt;Poland
                        (PLN&amp;nbsp;zł)&lt;/option&gt;&lt;option
                        value="PT"&gt;Portugal
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="SG"&gt;Singapore
                        (SGD&amp;nbsp;$)&lt;/option&gt;&lt;option
                        value="KR"&gt;South Korea
                        (KRW&amp;nbsp;₩)&lt;/option&gt;&lt;option
                        value="ES"&gt;Spain
                        (EUR&amp;nbsp;€)&lt;/option&gt;&lt;option
                        value="SE"&gt;Sweden
                        (SEK&amp;nbsp;kr)&lt;/option&gt;&lt;option
                        value="AE"&gt;United Arab Emirates
                        (AED&amp;nbsp;د.إ)&lt;/option&gt;&lt;option
                        value="GB"&gt;United Kingdom
                        (GBP&amp;nbsp;£)&lt;/option&gt;&lt;option value="US"
                        selected&gt;United States
                        (USD&amp;nbsp;$)&lt;/option&gt;&lt;/select&gt;
                        &lt;/div&gt;
                      </noscript> 
                      */}
                    </div>
                  </div>
                  <noscript>
                    &lt;div class="mt-6"&gt; &lt;button class="btn
                    btn--primary"&gt;Update&lt;/button&gt; &lt;/div&gt;
                  </noscript>
                </form>
              </div>
              <div className="lower-footer__right">
                <ul className="social inline-flex flex-wrap">
                  <li>
                    <a
                      className="social__link flex items-center justify-center"
                      href="https://facebook.com/shopify"
                      target="_blank"
                      rel="noopener"
                      title="Alchemy Sharp Theme on Facebook"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 14222 14222"
                        fill="currentColor"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon"
                      >
                        <path d="M14222 7112c0 3549.352-2600.418 6491.344-6000 7024.72V9168h1657l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4968.72C2600.418 13603.344 0 10661.352 0 7112 0 3184.703 3183.703 1 7111 1s7111 3183.703 7111 7111Zm-8222 7025c362 57 733 86 1111 86-377.945 0-749.003-29.485-1111-86.28Zm2222 0v-.28a7107.458 7107.458 0 0 1-167.717 24.267A7407.158 7407.158 0 0 0 8222 14137Zm-167.717 23.987C7745.664 14201.89 7430.797 14223 7111 14223c319.843 0 634.675-21.479 943.283-62.013Z" />
                      </svg>
                      <span className="visually-hidden">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="social__link flex items-center justify-center"
                      href="https://youtube.com/user/shopify"
                      target="_blank"
                      rel="noopener"
                      title="Alchemy Sharp Theme on YouTube"
                    >
                      <svg
                        width={48}
                        height={34}
                        viewBox="0 0 48 34"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon"
                      >
                        <path
                          d="m19.044 23.27-.001-13.582 12.968 6.814-12.967 6.768ZM47.52 7.334s-.47-3.33-1.908-4.798C43.787.61 41.74.601 40.803.49 34.086 0 24.01 0 24.01 0h-.02S13.914 0 7.197.49C6.258.6 4.213.61 2.387 2.535.947 4.003.48 7.334.48 7.334S0 11.247 0 15.158v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.906 4.798c1.827 1.926 4.226 1.866 5.294 2.067C11.52 33.885 24 34 24 34s10.086-.015 16.803-.505c.938-.113 2.984-.122 4.809-2.048 1.439-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824Z"
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="visually-hidden">YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="social__link flex items-center justify-center"
                      href="https://instagram.com/shopify"
                      target="_blank"
                      rel="noopener"
                      title="Alchemy Sharp Theme on Instagram"
                    >
                      <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon"
                      >
                        <path
                          d="M24 0c-6.518 0-7.335.028-9.895.144-2.555.117-4.3.523-5.826 1.116-1.578.613-2.917 1.434-4.25 2.768C2.693 5.362 1.872 6.701 1.26 8.28.667 9.806.26 11.55.144 14.105.028 16.665 0 17.482 0 24s.028 7.335.144 9.895c.117 2.555.523 4.3 1.116 5.826.613 1.578 1.434 2.917 2.768 4.25 1.334 1.335 2.673 2.156 4.251 2.77 1.527.592 3.271.998 5.826 1.115 2.56.116 3.377.144 9.895.144s7.335-.028 9.895-.144c2.555-.117 4.3-.523 5.826-1.116 1.578-.613 2.917-1.434 4.25-2.768 1.335-1.334 2.156-2.673 2.77-4.251.592-1.527.998-3.271 1.115-5.826.116-2.56.144-3.377.144-9.895s-.028-7.335-.144-9.895c-.117-2.555-.523-4.3-1.116-5.826-.613-1.578-1.434-2.917-2.768-4.25-1.334-1.335-2.673-2.156-4.251-2.769-1.527-.593-3.271-1-5.826-1.116C31.335.028 30.518 0 24 0Zm0 4.324c6.408 0 7.167.025 9.698.14 2.34.107 3.61.498 4.457.827 1.12.435 1.92.955 2.759 1.795.84.84 1.36 1.64 1.795 2.76.33.845.72 2.116.827 4.456.115 2.53.14 3.29.14 9.698s-.025 7.167-.14 9.698c-.107 2.34-.498 3.61-.827 4.457-.435 1.12-.955 1.92-1.795 2.759-.84.84-1.64 1.36-2.76 1.795-.845.33-2.116.72-4.456.827-2.53.115-3.29.14-9.698.14-6.409 0-7.168-.025-9.698-.14-2.34-.107-3.61-.498-4.457-.827-1.12-.435-1.92-.955-2.759-1.795-.84-.84-1.36-1.64-1.795-2.76-.33-.845-.72-2.116-.827-4.456-.115-2.53-.14-3.29-.14-9.698s.025-7.167.14-9.698c.107-2.34.498-3.61.827-4.457.435-1.12.955-1.92 1.795-2.759.84-.84 1.64-1.36 2.76-1.795.845-.33 2.116-.72 4.456-.827 2.53-.115 3.29-.14 9.698-.14Zm0 7.352c-6.807 0-12.324 5.517-12.324 12.324 0 6.807 5.517 12.324 12.324 12.324 6.807 0 12.324-5.517 12.324-12.324 0-6.807-5.517-12.324-12.324-12.324ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm15.691-20.811a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0Z"
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                      <span className="visually-hidden">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="social__link flex items-center justify-center"
                      href="https://tiktok.com/@shopify"
                      target="_blank"
                      rel="noopener"
                      title="Alchemy Sharp Theme on TikTok"
                    >
                      <svg
                        width={15}
                        height={16}
                        viewBox="0 0 15 16"
                        aria-hidden="true"
                        focusable="false"
                        role="presentation"
                        className="icon"
                      >
                        <path
                          fill="currentColor"
                          d="M7.638.013C8.512 0 9.378.007 10.245 0c.054 1.02.42 2.06 1.167 2.78.746.74 1.8 1.08 2.826 1.193V6.66c-.96-.033-1.926-.233-2.8-.647a8.238 8.238 0 0 1-1.08-.62c-.006 1.947.007 3.894-.013 5.834a5.092 5.092 0 0 1-.9 2.626c-.873 1.28-2.387 2.114-3.94 2.14-.953.054-1.907-.206-2.72-.686C1.438 14.513.492 13.06.352 11.5a12.36 12.36 0 0 1-.007-.993A5.003 5.003 0 0 1 2.065 7.2c1.107-.96 2.653-1.42 4.1-1.147.013.987-.027 1.974-.027 2.96-.66-.213-1.433-.153-2.013.247-.42.273-.74.693-.907 1.167-.14.34-.1.713-.093 1.073.16 1.093 1.213 2.013 2.333 1.913.747-.006 1.46-.44 1.847-1.073.127-.22.267-.447.273-.707.067-1.193.04-2.38.047-3.573.007-2.687-.007-5.367.013-8.047Z"
                        />
                      </svg>
                      <span className="visually-hidden">TikTok</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="social__link flex items-center justify-center"
                      href="https://twitter.com/shopify"
                      target="_blank"
                      rel="noopener"
                      title="Alchemy Sharp Theme on Twitter"
                    >
                      <svg
                        className="icon"
                        fill="currentColor"
                        role="presentation"
                        focusable="false"
                        width={40}
                        height={40}
                        viewBox="1 1 22 22"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="visually-hidden">Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-footer">
            <div className="container">
              <div className="lower-footer__left">
                <div className="copyright">
                  <span className="seg">
                    © 2025 <a href="/">Alchemy Sharp Theme</a>.
                  </span>
                  <a
                    target="_blank"
                    rel="nofollow"
                    href="https://www.shopify.com?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore"
                  >
                    Powered by Shopify
                  </a>
                </div>
              </div>
              <div className="lower-footer__right payment-methods">
                <div className="payment-methods__inner flex flex-wrap" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FooterOne;
