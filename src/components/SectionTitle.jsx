import styled from "styled-components";
import {
  cormorant_100_medium,
  cormorant_150_medium,
  cormorant_31_medium,
  cormorant_39_medium,
  cormorant_45_medium,
  cormorant_60_medium,
  dancing_60_medium,
  flex,
} from "../styles/GlobalStyles";

const StyledSectionTitle = styled.h2`
  ${cormorant_39_medium}
  position: relative;
  width: 100%;
`;
const SectionTitleWrapper = styled.div`
  width: 100%;
  height: 15rem;
  padding: 0 5rem;
  ${flex("column")}
  justify-content: end;
  align-items: end;
  color: var(--text-black);
  position: relative;
  margin: 15rem 0 5rem 0;
  span {
    ${cormorant_150_medium};
    opacity: 0.1;
    position: absolute;
    left: 5%;
    bottom: -30%;
    pointer-events: none;
    user-select: none;
    @media (max-width: 1075px) {
      ${cormorant_100_medium}
      bottom: -10%;
    }
    @media (max-width: 670px) {
      ${cormorant_60_medium}
      bottom: -5%;
      left: 10%;
      display: none;
    }
    @media (max-width: 580px) {
      ${cormorant_45_medium}
      padding: 0 3rem;
      bottom: 3%;
      display: none;
    }
  }
`;
function SectionTitle({ children, heading }) {
  return (
    <SectionTitleWrapper>
      <StyledSectionTitle>{children}</StyledSectionTitle>
      <span>{heading}</span>
    </SectionTitleWrapper>
  );
}

export default SectionTitle;
