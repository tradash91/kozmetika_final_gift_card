import styled from "styled-components";
import { flex, mont_16_regular } from "../styles/GlobalStyles";
import SectionTitle from "./SectionTitle";

const StyledAboutUsPreview = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const StyledAboutUsImage = styled.div`
  height: 100%;
  background-image: url("/images/me.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;
const StyledAboutUsText = styled.div`
  ${mont_16_regular}
  color: var(--white);
  padding: 10rem 3rem;
  background-color: var(--brown);
  div {
    color: var(--black);
    line-height: 1.3;
    margin-bottom: 2rem;
  }
`;
function AboutUsPreview() {
  return (
    <>
      <SectionTitle heading={"Magamról"}>Magamról</SectionTitle>
      <StyledAboutUsPreview id="bemutatkozás">
        <StyledAboutUsImage />

        <StyledAboutUsText>
          <div>
            <h1>Deák-Takács Nóra</h1>
            <h3>Kozmetikus</h3>
          </div>
          <p>
            Már gyerekkorom óta lenyűgöz, hogyan működik az emberi test. Mindig
            is érdekelt, mi zajlik bennünk, ezért tanulmányaim során különösen
            figyeltem arra, hogy minél jobban megértsem a test és különösen a
            bőr működését. Hivatásom, hogy kozmetikusként professzionális
            megoldásokat nyújtsak a bőrproblémák kezelésére, a legjobb módszerek
            és a modern hatóanyagok alkalmazásával. Ezért is dolgozom német
            prémium Janssen kozmetikumokkal, és amerikai topkategóriás Joico
            hajápolási termékekkel. Nekem az a legfontosabb, hogy vendégeim
            mindig megújulva, relaxáltan induljanak tovább. Gyere el és
            tapasztald meg nálam, milyen ha a bőröd egészséges és gyönyörű!
          </p>
        </StyledAboutUsText>
      </StyledAboutUsPreview>
    </>
  );
}

export default AboutUsPreview;
