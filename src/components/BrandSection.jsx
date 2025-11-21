import styled from "styled-components";

const StyledBrandSection = styled.div`
  background-image: ${(props) => `url(${props.$bg})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  min-height: 500px;
  width: 100%;
  margin: 5rem 0 5rem 0;

  @supports (-webkit-touch-callout: none) {
    background-attachment: scroll;
  }
`;

function BrandSection({ $bg }) {
  return <StyledBrandSection $bg={$bg}></StyledBrandSection>;
}

export default BrandSection;
