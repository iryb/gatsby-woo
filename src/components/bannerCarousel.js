import {graphql, StaticQuery} from "gatsby";
import React from "react";
import Img from "gatsby-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
}

export default function BannerCarousel({ data }) {
    return (
        <StaticQuery query={ graphql`
            query ProductCarouselQuery {
              allWpSimpleProduct(limit: 3) {
                nodes {
                  id
                  image {
                    sourceUrl
                    altText
                    localFile {
                      size
                      childImageSharp {
                         fixed(width: 800, height: 500) {
                            ...GatsbyImageSharpFixed
                         }
                      }
                    }
                  }
                }
              }
            }
          `}
         render={data => (
             <Slider {...settings} className="overflow-hidden">
                 {data.allWpSimpleProduct.nodes.map(product => (
                     <Img key={product.id} fixed={product.image.localFile.childImageSharp.fixed} />
                 ))}
             </Slider>
         )}
        />
    )
}