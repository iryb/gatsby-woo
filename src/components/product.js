import React from "react";
import {StaticQuery, graphql, Link} from "gatsby"

export default function Product({ data }) {
    return (
        <StaticQuery
            query={graphql`
            query ProductQuery {
              allWpSimpleProduct {
                nodes {
                  id
                  price
                  name
                }
              }
            }
          `}


            render={data => (

                <div className="product">
                    {data.allWpSimpleProduct.nodes.map(product => (
                        <div className="product-inner">
                            <h3 className="product-title">{product.name}</h3>
                            <p className="product-price">{product.price}</p>
                        </div>
                    ))}
                </div>
            )}
        />
    )
}