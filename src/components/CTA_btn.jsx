import styled from "styled-components";
import { mont_20_medium } from "../styles/GlobalStyles";

export const Hero_CTA = styled.button`
  ${mont_20_medium};
  background-color: var(--purple);
  color: var(--white);
  padding: 1rem 1.5rem;
`;

function CTA_btn() {
  return <Hero_CTA>IDŐPONT FOGLALÁS</Hero_CTA>;
}

export default CTA_btn;
