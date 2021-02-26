import React from "react";
import Img from "gatsby-image"
import {StaticQuery, graphql, Link} from "gatsby"

export default function Product({ product }) {
    const imagesResolutions = product.image.localFile.childImageSharp.fixed;

    return (
        <div className="product">
            <Img fixed={imagesResolutions} key={imagesResolutions.src}/>
            <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price}</p>
            </div>
        </div>
    )
}