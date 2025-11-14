import styled from "styled-components";
import data from "../assets/data.json";
import {
  cormorant_15_regular,
  cormorant_18_regular,
  cormorant_20_semiBold,
  cormorant_28_regular,
  cormorant_31_medium,
  cormorant_60_medium,
  flex,
  mont_13_lightItalic,
  mont_16_medium,
  mont_16_regular,
  mont_17_medium,
  mont_20_medium,
  mont_25_light,
  mont_29_lightItalic,
  mont_29_medium,
} from "../styles/GlobalStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import GalleryModal from "./Modal";
import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import CloseBtn from "./CloseBtn";
import Loader from "./Loader";
import CTA_btn from "./CTA_btn";
import { motion } from "motion/react";
import { h3 } from "motion/react-client";
import StepsBar from "./StepsBar";
const ServicesSection = styled.section``;
const Card = styled.figure`
  z-index: 10;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 43.27%,
      rgba(0, 0, 0, 0.8) 76.92%
    ),
    url(${(props) => props.$bg});
  background-size: cover;
  background-position: center;
  height: 520px;
  width: 20%;
  position: relative;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  cursor: pointer;
  border-radius: var(--radius-2);

  @media (max-width: 1075px) {
    background: linear-gradient(
        90deg,
        rgba(220, 194, 156, 0.7) 25.96%,
        rgba(220, 194, 156, 0.22) 73.08%
      ),
      url(${(props) => props.$bg});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 140px;
  }
`;
const CardCategory = styled.figcaption`
  ${cormorant_31_medium}

  grid-row: 4;
  align-self: start;
  color: var(--white);
  width: 100%;
  text-align: center;
  @media (max-width: 1075px) {
    color: var(--text-black);
    grid-row: 3;
    padding-left: 2rem;
    text-align: left;
  }
`;
const StyledServices = styled.div`
  ${flex("row")}
  gap: 2rem;
  padding: 0rem 10rem;
  @media (max-width: 1075px) {
    flex-direction: column;
  }
  @media (max-width: 580px) {
    padding: 0 3rem;
    margin-top: 3rem;
  }
`;
const SectionDecoration = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  &::after {
    content: "";
    z-index: 5;
    position: absolute;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
    top: 15%;
    height: 381px;
    background-color: var(--brown);
    border-radius: var(--radius-2);

    @media (max-width: 1075px) {
      background-color: var(--black);
      height: 120%;
      width: 50%;
      transform: translateX(-30%);
      top: -5%;
      right: 50%;
    }

    @media (max-width: 580px) {
      height: 650px;
      top: -2%;
      transform: translateX(-10%);
    }
  }
`;
const SwiperWrapper = styled.div`
  color: var(--text-black);
  position: fixed;
  inset: 0;
  top: 3%;
  z-index: 999;
  height: 90dvh;

  @media (max-width: 630px) {
    top: 10%;
    position: absolute;
    height: 1200px;
  }
`;
const StyledSwiper = styled(Swiper)`
  height: 98%;
  width: 95%;
  /* background: linear-gradient(180deg, #dcc29c 69.71%, #ffffff 100%); */
  background-color: var(--white);
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(7, auto);
  overflow-y: auto;
  padding: 6rem 2rem 2rem 2rem;
  row-gap: 2rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  h3 {
    ${cormorant_28_regular}
    background-color: var(--white);
    padding: 0.5rem 2rem;
    grid-column: 1/3;
    width: 90%;
    text-align: center;
    grid-row: 1/3;
    justify-self: center;
    align-self: start;
    background-color: var(--black);
    color: var(--white);
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 1;
      align-self: center;
    }
  }
  p {
    ${mont_17_medium}
    grid-column: 1;
    grid-row: 3;
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 2;
    }
  }
  .details {
    ${mont_16_regular}
    grid-column: 1;
    grid-row: 4/6;
    animation: fade 0.6s ease;

    @keyframes fade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 3;
    }
  }
  .priceDuration {
    grid-column: 1;
    grid-row: 6;
    background-color: var(--white);
    align-self: start;
    justify-self: start;
    padding: 3px 1rem;
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 5;
      align-self: end;
      margin-bottom: 5px;
    }
    .price {
      ${mont_29_medium}
      text-decoration: underline;
      margin-right: 2rem;
    }
    .duration {
      ${mont_25_light}
    }
  }
  .CTA_wrapper {
    grid-row: 7;
    grid-column: 1;
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 6;
    }
  }
`;

const StyledSubCategories = styled.ul`
  ${cormorant_15_regular}
  ${flex("column")}
  gap: 0.5rem;
  grid-column: 2;
  grid-row: 1/8;
  align-self: center;
  justify-self: end;
  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: 7;
    justify-self: stretch;
  }
  li {
    ${flex("row")}
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: var(--white);
  }
`;
const StyledSwiperNav = styled.div`
  ${flex("row")}
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 95%;
  margin: 0 auto;
  background-color: var(--black);

  .custom-pagination {
    ${flex("row")}
    gap: 2rem;
    .swiper-pagination-bullet {
      background-color: var(--white);
      width: 30px;
      border-radius: 2px;
      @media (max-width: 580px) {
        width: 15px;
      }
    }
  }

  img {
    width: 30px;
  }
`;
function Services({ setIsMenuOpen, servicesData }) {
  const [open, setOpen] = useState(false);
  const [targetIndex, setTargetIndex] = useState(null);
  const [subCategory, setsubCategory] = useState({});
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  function handleCloseModal() {
    setOpen(false);
    setIsMenuOpen((isOpen) => !isOpen);
    setActiveSubCategory(0);
  }

  const swiperRef = useRef(null);

  return (
    <>
      <SectionTitle heading={"Szolgáltatásaim"}>Szolgáltatásaim</SectionTitle>
      <SectionDecoration>
        <ServicesSection id="szolgáltatások">
          {/* <GalleryModal /> */}
          {open && (
            <SwiperWrapper
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <StyledSwiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                modules={[Navigation, Pagination]}
                navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
                pagination={{ clickable: false, el: ".custom-pagination" }}
                spaceBetween={30}
                slidesPerView={1}
                initialSlide={targetIndex}
                speed={300}
                onSlideChange={(swiper) => {
                  const newIndex = swiper.activeIndex;
                  setCurrentIndex(newIndex);
                  setsubCategory(servicesData[newIndex].sub_categories[0]);
                  setActiveSubCategory(0);
                }}
              >
                {servicesData.map((item, index) => {
                  return (
                    <StyledSwiperSlide key={index}>
                      <CloseBtn onClick={handleCloseModal} />
                      <h3>{subCategory?.category_name}</h3>
                      <p>{subCategory?.description}</p>
                      <div className={"priceDuration"}>
                        <span className={"price"}>{subCategory?.price} Ft</span>
                        <span className={"duration"}>
                          {subCategory?.duration} perc
                        </span>
                      </div>
                      <div className="CTA_wrapper">
                        <CTA_btn />
                      </div>

                      <ul className={"details"}>
                        {subCategory?.details.map((detail, index) => (
                          <li key={index}>
                            {index + 1}. {detail}
                          </li>
                        ))}
                      </ul>

                      {item.sub_categories && (
                        <StyledSubCategories>
                          {item.sub_categories.map((sub, index) => {
                            return (
                              <React.Fragment key={index}>
                                <li
                                  style={{
                                    backgroundColor:
                                      activeSubCategory === index &&
                                      "var(--dark-brown)",
                                    color:
                                      activeSubCategory === index &&
                                      "var(--white)",
                                  }}
                                  onClick={() => {
                                    setsubCategory(sub);
                                    setActiveSubCategory(index);
                                  }}
                                >
                                  {sub.name}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M8 5l8 7-8 7V5z" />
                                  </svg>
                                </li>
                              </React.Fragment>
                            );
                          })}
                        </StyledSubCategories>
                      )}
                    </StyledSwiperSlide>
                  );
                })}
              </StyledSwiper>
              <StyledSwiperNav>
                <button
                  style={{
                    zIndex: 10,
                  }}
                  onClick={() => {
                    if (swiperRef.current) swiperRef.current.slidePrev();
                    if (currentIndex > 0) {
                      setActiveSubCategory(0);
                      setsubCategory(
                        servicesData[currentIndex - 1].sub_categories[0]
                      );
                      setCurrentIndex(currentIndex - 1);
                    }
                  }}
                >
                  <img src="/images/nav_arrow_prev.svg" alt="Előző oldal" />
                </button>
                <div className="custom-pagination"></div>
                <button
                  style={{
                    zIndex: 10,
                  }}
                  onClick={() => {
                    if (swiperRef.current) swiperRef.current.slideNext();
                    if (currentIndex < servicesData.length - 1) {
                      setActiveSubCategory(0);
                      setsubCategory(
                        servicesData[currentIndex + 1].sub_categories[0]
                      );
                      setCurrentIndex(currentIndex + 1);
                    }
                  }}
                >
                  <img src="/images/nav_arrow_next.svg" alt="Következő oldal" />
                </button>
              </StyledSwiperNav>
            </SwiperWrapper>
          )}

          <StyledServices>
            {servicesData.map((serviceData, index) => {
              return (
                <Card
                  key={index}
                  $bg={serviceData.bg_url}
                  onClick={() => {
                    setTargetIndex(index);
                    setOpen(true);
                    setsubCategory(servicesData[index].sub_categories[0]);
                    setCurrentIndex(index);
                    setIsMenuOpen((isOpen) => !isOpen);
                  }}
                >
                  <CardCategory>{serviceData.name}</CardCategory>
                </Card>
              );
            })}
          </StyledServices>
        </ServicesSection>
      </SectionDecoration>
    </>
  );
}

export default Services;
