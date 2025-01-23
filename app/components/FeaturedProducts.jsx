import React from 'react'
import '~/styles/quickAdd.css'
import '~/styles/product.css'
import ProductCard from '~/snippets/ProductCard'

const FeaturedProducts = () => {
    return (
    <section className='featured__product-section'>
        <section id="shopify-section-template--18355397066979__featured-collection" className="shopify-section cc-featured-collection">
            <div className="section section--px-0" id="template--18355397066979__featured-collection">
                <carousel-slider className="carousel block xl:overflow-hidden">
                    <div className="container">
                        <div className="carousel__header flex items-center justify-between mb-6">
                            <h2 className="section__heading flex-auto mb-0 cc-animate-init cc-animate-in" data-cc-animate>
                                <a href="/collections/socks" title>Award  Winning Socks</a>
                            </h2>
                        <div className="slider-nav flex no-js-hidden">
                            <button type="button" className="slider-nav__btn btn has-ltr-icon" name="prev" aria-controls="slider-template--18355397066979__featured-collection" disabled>
                                <span className="visually-hidden">Previous</span>
                                <svg width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false" role="presentation" className="icon">
                                    <path d="m3.75 11.3 8.5 8.5M4.75 12h15.5M3.75 12.7l8.5-8.5" />
                                </svg>
                            </button>
                            <button type="button" className="slider-nav__btn btn has-ltr-icon" name="next" aria-controls="slider-template--18355397066979__featured-collection">
                                <span className="visually-hidden">Next</span>
                                <svg width={24} height={24} viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false" role="presentation" className="icon">
                                    <path d="m12.25 19.8 8-8.5M3.75 12h15.5M12.25 4.2l8 8.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="slider relative" id="slider-template--18355397066979__featured-collection">
                        <div className="container">
                            <ul className="slider__grid grid grid-flow-col auto-cols-2 md:auto-cols-3 lg:auto-cols-4 xl:auto-cols-5 gap-x-theme gap-y-card" role="list">
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                                <ProductCard/>
                            </ul>
                        </div>
                    </div> 
                </div>
            </carousel-slider>
        </div>
      </section>
    </section>
  )
}

export default FeaturedProducts;