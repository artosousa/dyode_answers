import "../styles/global.scss";
import * as React from "react";
import AnnounceHeader from "../components/announce-header";
import CollectionBlocks from "../components/collection-blocks";
import HeroSlider from "../components/hero-slider";
import Navigation from "../components/navigation";
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
    </main>
  );
};
export default IndexPage;
