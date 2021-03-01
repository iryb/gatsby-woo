import React from "react"
import FeaturedProducts from "../components/featuredProducts/featuredProducts";
import BannerCarousel from "../components/bannerCarousel";

export default function Home() {
  return (
      <div>
        <BannerCarousel />
        <FeaturedProducts />
      </div>
  )
}
