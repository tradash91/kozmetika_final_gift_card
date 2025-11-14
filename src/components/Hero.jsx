import styled from "styled-components";
import {
  cormorant_18_medium,
  cormorant_24_regular,
  cormorant_28_regular,
  cormorant_31_medium,
  dancing_50_medium,
  dancing_60_medium,
  dancing_90_medium,
  flex,
} from "../styles/GlobalStyles";
import Navbar from "./Navbar";
import CTA_btn from "./CTA_btn";
import girl from "../assets/girl-min.png";
import { filterData } from "../utils/filterData";

export const HeroHeading = styled.h1`
  ${dancing_60_medium}
  text-align: center;
  line-height: 1;
  @media (max-width: 580px) {
    ${dancing_50_medium}
  }
`;
export const HeroSection = styled.section`
  color: var(--text-black);
  height: 100dvh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.068), rgba(0, 0, 0, 0.03)),
    url(${(props) => props.$bg});
  /* background: linear-gradient(
      0deg,
      rgba(255, 254, 254, 0.315),
      rgba(0, 0, 0, 0.03)
    ),
    url(${(props) => props.$bg}); */
  background-position: 0% 13%;
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto 1fr;
  position: relative;

  @media (max-width: 1088px) {
    background-size: cover;
  }

  @media (max-width: 580px) {
    background-size: cover;
  }
`;
export const HeroDecoration = styled.span`
  width: 124px;
  height: 1px;
  display: block;
  background-color: var(--black);
`;
export const HeroWrapper = styled.div`
  ${flex("column")}
  gap: 4rem;
  grid-row: 2;
  grid-column: 4/6;
  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: 1/7;
  }
  @media (max-width: 580px) {
  }
`;

export const HeroSubtitle = styled.h3`
  ${cormorant_18_medium}
  text-align: center;

  @media (min-width: 1000px) {
    ${cormorant_24_regular}
  }
`;

function Hero({ data, blogData }) {
  if (!data) return null;
  const bg = filterData(data, "Háttérkép linkje");
  const msg = filterData(data, "Üdvözlő üzenet");
  const msg2 = filterData(data, "Alcím");
  return (
    <HeroSection $bg={bg}>
      <Navbar /* blogData={blogData} */ />
      <HeroWrapper>
        <HeroHeading>{msg}</HeroHeading>
        <HeroSubtitle>{msg2}</HeroSubtitle>
        <HeroDecoration></HeroDecoration>
        <CTA_btn />
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
