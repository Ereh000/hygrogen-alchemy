import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter__section">
      <section
        id="shopify-section-template--18355397066979__newsletter_FJWAwC"
        className="shopify-section cc-newsletter has-content-boundary-top has-content-boundary-top--flipped"
      >
        {/* <link
          rel="stylesheet"
          href="//alchemy-theme-sharp.myshopify.com/cdn/shop/t/61/assets/text-overlay.css?v=78664566719006840301736355012"
        /> */}
        <style
          data-shopify
          dangerouslySetInnerHTML={{
            __html:
              '#template--18355397066979__newsletter_FJWAwC .text-overlay {background-color: rgba(var(--bg-color) / 0.0);\n          background-image: var(--bg-gradient, none);}',
          }}
        />
        <div
          className="newsletter section section--m-0 color-scheme color-scheme--page content-boundary content-boundary--top-flipped relative cc-animate-init cc-animate-in"
          id="template--18355397066979__newsletter_FJWAwC"
          data-cc-animate
        >
          <div className="container  flex justify-start">
            <div className="media media--has-overlay absolute top-0 left-0 w-full h-full">
              <img
                src="https://cdn.shopify.com/s/files/1/0576/5391/9838/files/Rockay-Cornwall2021-JakeBaggaley-3402_2_7c05545d-c42e-47e6-9cc2-2a39930d63e8_EXT.webp?v=1737731244?v=1717772493&width=1680"
                className="img-fit"
                loading="lazy"
                fetchpriority="auto"
                width={3200.0}
                height={1316}
                alt=""
              />
            </div>
            <div
              className="text-overlay text-overlay--box align-ltr-center"
              style={{borderRadius: '0px'}}
            >
              <div className="mb-4 text-theme-heading">
                <svg
                  width={41}
                  height={26}
                  viewBox="0 0 41 26"
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  className="icon"
                >
                  <g fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M1.5 1v24h38V1z" />
                    <path d="m1.5 4 19 11 19-11" />
                  </g>
                </svg>
              </div>
              <h2 className="section__block section__block--heading h3">
                Subscribe to our emails
              </h2>
              <div className="section__block reading-width rte">
                <p>
                  Be the first to know about new collections and exclusive
                  offers.
                </p>
              </div>
              <div className="section__block form-width mx-auto">
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
                      htmlFor="template--18355397066979__newsletter_FJWAwC-signup"
                    >
                      Email
                    </label>
                    <div className="input-with-button input-with-button--sm-up">
                      <input
                        type="email"
                        className="input w-full focus-inset"
                        id="template--18355397066979__newsletter_FJWAwC-signup"
                        name="contact[email]"
                        defaultValue
                        placeholder="Your email"
                        autoComplete="email"
                        aria-required="true"
                        required
                        fdprocessedid="aau8vt"
                      />
                      <button
                        className="btn btn--primary"
                        fdprocessedid="f5ol4"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Newsletter;
