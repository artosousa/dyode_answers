import "../styles/global.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import * as React from "react";
import AnnounceHeader from "../components/announce-header";
import CollectionBlocks from "../components/collection-blocks";
import HeroSlider from "../components/hero-slider";
import Navigation from "../components/navigation";
import NewArrivals from "../components/new-arrivals";
import { pageData } from "../data/page-data";

const data = pageData;

// markup
const IndexPage = () => {
  return (
    <main>
      <title>DYODE Developer Test</title>
      <AnnounceHeader data={data} />
      <Navigation />
      <HeroSlider data={data} />
      <CollectionBlocks data={data} />
      <NewArrivals data={data} />
    </main>
  );
};
export default IndexPage;
