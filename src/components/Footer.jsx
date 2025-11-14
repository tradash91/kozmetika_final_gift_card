import styled from "styled-components";
import {
  flex,
  mont_12_regular,
  mont_13_regular,
  mont_16_medium,
} from "../styles/GlobalStyles";
import { Link } from "react-router";

const StyledFooter = styled.footer`
  background-color: var(--dark-brown);
  ${flex("column")}
  gap: 3rem;
  padding: 5rem 0;
  width: 100%;
  margin-top: 5rem;
  span {
    ${mont_12_regular}
  }
`;

const StyledNavFooter = styled.nav`
  .site_logo {
    width: 10%;
  }

  ${mont_16_medium}
  ${flex("row")}
  align-items: center;
  padding: 1rem 2rem;
  grid-row: 1;
  grid-column: 1/-1;
  position: relative;
  @media (max-width: 768px) {
    ${flex("column")}
  }
`;

const LogosWrapper = styled.div`
  ${flex("row")}
  @media (max-width:620px) {
    ${flex("column")}
    gap:3rem;
    img {
      width: 70%;
    }
  }
`;

const StyledNavUlFooter = styled.ul`
  ${flex("row")}
  ${mont_13_regular}
  color:var(--text-black);
  gap: 26px;
  list-style: none;

  @media (max-width: 768px) {
    ${flex("column")}
  }
`;
const StyledSocial = styled.div`
  ${flex("row")}
  gap: 2rem;
`;
const date = new Date();
const year = date.getFullYear();

function Footer({ data }) {
  return (
    <StyledFooter>
      <LogosWrapper>
        <img
          src="/images/logo_1.png"
          alt="Janssen cosmetic partnercég logója"
        />
        <img src="/images/logo_2.png" alt="Joico cosmetic partnercég logója" />
      </LogosWrapper>
      <StyledNavFooter>
        <StyledNavUlFooter $open={open}>
          <li>
            <a href="/files/hazirend.pdf" download="hazirend.pdf">
              Házirend
            </a>
          </li>
          <li>
            <a href="/files/aszf.pdf" download="aszf.pdf">
              ÁSZF
            </a>
          </li>
          <li>
            <a href="/files/aszf.pdf" download="szuloi_beleegyezo.pdf">
              Szülői beleegyező
            </a>
          </li>
        </StyledNavUlFooter>
      </StyledNavFooter>
      {/*   <StyledSocial>
        <a href={data?.socialLinks.facebook} target="_blank">
          <img src="/images/facebook.png" alt="Link a facebook oldalunkhoz" />
        </a>
        <a href={data?.socialLinks.tiktok} target="_blank">
          <img src="/images/tiktok.png" alt="Link a tiktok oldalunkhoz" />
        </a>
        <a href={data?.socialLinks.instagram} target="_blank">
          <img
            src="/images/instagram.png"
            alt="Link az instagram oldalunkhoz"
          />
        </a>
        <a href={data?.socialLinks.google} target="_blank">
          <img
            src="/images/google.png"
            alt="Link a google értékelések oldalunkhoz"
          />
        </a>
      </StyledSocial> */}
      <span>{year} Stargirl kozmetika minden jog fenntartva</span>
    </StyledFooter>
  );
}

export default Footer;
