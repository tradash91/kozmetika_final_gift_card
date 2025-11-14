import styled from "styled-components";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "./LoadingPage";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Footer from "../components/Footer";

import { posts } from "../api/blog";
import { settings } from "../api/settings";
import AnimatedWrapper from "../components/AnimatedWrapper";
import { useState } from "react";

const StyledGallerySection = styled.section`
  width: 100%;
  height: 100dvh;
  padding: 0 5rem 5rem 5rem;
  display: grid;
  grid-template-areas:
    "img_01 img_01 img_02 img_03"
    "img_04 img_05 img_06 img_06"
    "img_07 img_05 img_08 img_09";
  gap: 2rem;
  @media (max-width: 700px) {
    height: 110dvh;
    grid-template-areas:
      "img_01 img_01"
      "img_02 img_02"
      "img_03 img_04"
      "img_05 img_04"
      "img_06 img_06"
      "img_07 img_07"
      "img_08 img_09";
  }
  .img_01 {
    grid-area: img_01;
    background-color: #3e98e7;
  }
  .img_02 {
    grid-area: img_02;
    background-color: #3e98e7;
  }
  .img_03 {
    grid-area: img_03;
    background-color: #3e98e7;
  }
  .img_04 {
    grid-area: img_04;
    background-color: #3e98e7;
  }
  .img_05 {
    grid-area: img_05;
    background-color: #3e98e7;
  }
  .img_06 {
    grid-area: img_06;
    background-color: #3e98e7;
  }
  .img_07 {
    grid-area: img_07;
    background-color: #3e98e7;
  }
  .img_08 {
    grid-area: img_08;
    background-color: #3e98e7;
  }
  .img_09 {
    grid-area: img_09;
    background-color: #3e98e7;
  }
`;

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(null);
  const { isLoading: isBlogPostsLoading, data: blogData } = useQuery({
    queryFn: posts,
    queryKey: ["posts"],
  });
  const { isLoading, data } = useQuery({
    queryFn: settings,
    queryKey: ["getSettings"],
  });

  if (isBlogPostsLoading) return <LoadingPage />;

  return (
    <div>
      <Navbar blogData={blogData} />
      <button
        type="button"
        onClick={() => {
          setIndex(1);
          setOpen(true);
        }}
      >
        Open Lightbox
      </button>

      <Lightbox
        index={index}
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: "/images/konzultacio.jpg" },
          { src: "/images/masszazs.jpg" },
          { src: "/images/me.jpg" },
          { src: "/images/kozmetikamasszazs.jpg" },
        ]}
      />

      <>
        <AnimatedWrapper>
          <SectionTitle heading={"Galéria"}>Galéria</SectionTitle>

          <StyledGallerySection>
            <div className="img_01"></div>
            <div className="img_02"></div>
            <div className="img_03"></div>
            <div className="img_04"></div>
            <div className="img_05"></div>
            <div className="img_06"></div>
            <div className="img_07"></div>
            <div className="img_08"></div>
            <div className="img_09"></div>
          </StyledGallerySection>
        </AnimatedWrapper>
        <Footer data={blogData} />
      </>
    </div>
  );
}

export default Gallery;
