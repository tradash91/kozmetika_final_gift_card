import styled from "styled-components";
import { flex } from "../styles/GlobalStyles";
import CTA_btn from "./CTA_btn";

const StyledCTASection = styled.section`
  ${flex("column")}
  height: 200px;
`;
function CTA_section() {
  return (
    <StyledCTASection>
      <CTA_btn />
    </StyledCTASection>
  );
}

export default CTA_section;
