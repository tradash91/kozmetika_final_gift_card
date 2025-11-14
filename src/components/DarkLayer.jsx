import styled from "styled-components";

const StyledDarkLayer = styled.div`
  position: fixed;
  inset: 0;
  background-color: #0000007b;
  height: 100%;
  width: 100%;
  z-index: 777;
  animation: fade 0.6s ease;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
function DarkLayer({ setIsMenuOpen }) {
  return <StyledDarkLayer></StyledDarkLayer>;
}

export default DarkLayer;
