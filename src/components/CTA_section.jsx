import styled from "styled-components";
import { flex } from "../styles/GlobalStyles";
import CTA_btn from "./CTA_btn";

const StyledCTASection = styled.section`
  ${flex("column")}
  height: 200px;
  @media (max-width: 1077px) {
    padding-top: 10rem;
  }
`;
function CTA_section() {
  return (
    <StyledCTASection>
      <CTA_btn />
    </StyledCTASection>
  );
}

export default CTA_section;
