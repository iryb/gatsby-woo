import {graphql, StaticQuery} from "gatsby";
import Product from "../product/product";
import React from "react";

export default function FeaturedProducts({ data }) {
    return (
        <StaticQuery query={ graphql`
            query ProductQuery {
              allWpSimpleProduct(limit: 3) {
                nodes {
                  id
                  price
                  name
                  image {
                    sourceUrl
                    altText
                    localFile {
                      size
                      childImageSharp {
                         fixed(width: 225, height: 245) {
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
             <div className="productsList">
                 {data.allWpSimpleProduct.nodes.map(product => (
                     <Product key={product.id} product={product} />
                 ))}
             </div>
         )}
        />
    )
}