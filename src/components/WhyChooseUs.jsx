import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { flex, mont_16_regular } from "../styles/GlobalStyles";
const StyledWhyChooseUsSection = styled.section`
  display: grid;
  padding: 0 10rem;
  grid-template-columns: 230px 230px repeat(3, auto);
  grid-template-rows: repeat(3, 300px);

  @media (max-width: 1265px) {
    grid-template-columns: 180px 180px repeat(3, auto);
    grid-template-rows: 270px 270px 200px;
  }

  grid-template-areas:
    "a a b b b b"
    "a a b b b b"
    "c c d d e e";

  @media (max-width: 1100px) {
    grid-template-columns: auto;
    grid-template-rows: 270px 270px 200px 200px;
    grid-template-areas:
      "b b b "
      "b b b "
      "b b b "
      "c d e";
    padding: 0 2rem;
  }
  @media (max-width: 678px) {
    padding: 0 2rem;
  }
  @media (max-width: 425px) {
    grid-template-rows: repeat(3, 300px) 160px;
  }

  @media (max-width: 390px) {
    grid-template-rows: repeat(3, 400px) 160px;
  }

  .photo {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .photo_01 {
    grid-area: a;
    background-position: center;
    background-image: url("/images/why_us_01.png");
    /* min-width: 300px; */
    @media (max-width: 1100px) {
      display: none;
    }
  }
  .text {
    ${mont_16_regular};
    grid-area: b;
    background-color: var(--brown);

    ul {
      ${flex("column")}
      gap: 1rem;
      height: 100%;
      padding: 0 5rem;

      @media (max-width: 390px) {
        gap: 3rem;
      }

      li {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 2rem;
        width: 100%;
        img {
          width: 40px;
          align-self: center;
        }
      }
    }
  }
  .photo_02 {
    grid-area: c;
    background-image: url("/images/why_us_02.png");
  }
  .photo_03 {
    grid-area: d;
    background-image: url("/images/why_us_03.png");
  }
  .photo_04 {
    grid-area: e;
    background-image: url("/images/why_us_04.png");
  }
`;
function WhyChooseUs() {
  return (
    <>
      <SectionTitle heading={"Miért én?"}>Miért én?</SectionTitle>
      <StyledWhyChooseUsSection>
        <div className="photo photo_01"></div>
        <div className="text">
          <ul>
            <li>
              <img src="/images/why_us_icon_01.svg" alt="" />
              Magas szintű tudás tudás és elhivatottság – Minden eddigi
              megszerzett tudásomat és tapasztalatomat a vendégeim javára
              fordítom, folyamatosan továbbképzem magam, hogy mindig a legjobbat
              nyújthassam.
            </li>
            <li>
              <img src="/images/why_us_icon_05.svg" alt="" />
              Professzionális bőrmegoldások – Célzott kezelésekkel, modern
              hatóanyagokkal segítek bőröd problémáinak megoldásában.
            </li>
            <li>
              <img src="/images/why_us_icon_03.svg" alt="" />
              Prémium termékek – Német Janssen és amerikai Joico termékek
              garantálják a látványos és tartós eredményt.
            </li>
            <li>
              <img src="/images/why_us_icon_04.svg" alt="" />
              Személyre szabott ápolás – Minden vendég más, ezért a kezeléseim
              egyénre szabottak, és kihasználom a masszázs jótékony hatásait a
              bőr szépségéért és egészségéért.
            </li>
            <li>
              <img src="/images/why_us_icon_02.svg" alt="" />
              Teljes relax élmény – Nálam nemcsak a bőröd szépül, hanem tested
              és lelked is feltöltődik, így felfrissülve indulsz tovább.
            </li>
          </ul>
        </div>
        <div className="photo photo_02"></div>
        <div className="photo photo_03"></div>
        <div className="photo photo_04"></div>
      </StyledWhyChooseUsSection>
    </>
  );
}

export default WhyChooseUs;
