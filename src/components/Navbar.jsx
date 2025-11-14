import { useState } from "react";
import { Link, NavLink } from "react-router";
import styled from "styled-components";
import { flex, mont_16_medium } from "../styles/GlobalStyles";
import { Hamburger } from "./Hamburger";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const StyledNav = styled.nav`
  img {
    width: 100px;
  }

  height: 80px;
  ${mont_16_medium}
  ${flex("row")}
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  grid-row: 1;
  grid-column: 1/-1;
  position: relative;
  background: #ffffff68;
`;

const StyledNavUl = styled.ul`
  ${flex}
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
  li {
    position: relative;
    &:hover::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--black);
      animation: full 0.2s ease;
      opacity: 0.8;

      @keyframes full {
        from {
          width: 0%;
        }
        to {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1022px) {
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    background: var(--white);
    padding: 1rem 2rem;
    width: 80%;
    height: 100dvh;
    background-color: var(--white);
    gap: 5rem;
    display: ${({ $open }) => ($open ? "flex" : "none")};
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <NavLink to={"/"}>
        <img src="/images/brand_logo1.png" alt="" />
      </NavLink>

      <Hamburger $open={open} onClick={() => setOpen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>

      <StyledNavUl $open={open}>
        <li>
          <NavLink to={"/"}>Főoldal</NavLink>
        </li>
        <li>
          <HashLink smooth to="/#szolgáltatások">
            Szolgáltatások
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#bemutatkozás">
            Bemutatkozás
          </HashLink>
        </li>
        <li>
          <NavLink to={"/galéria"}>Galéria</NavLink>
        </li>
        <li>
          <NavLink to={"/ajandek"}>Ajándék kártya</NavLink>
        </li>
        <li>
          <HashLink smooth to="/#elérhetőségek">
            Elérhetőségek
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#hírek">
            Hírek
          </HashLink>
        </li>
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
      </StyledNavUl>
    </StyledNav>
  );
}

export default Navbar;
