import styled from "styled-components";

const StyledCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;

  img {
    width: 20px;
    @media (max-width: 800px) {
      width: 20px;
    }
  }
`;
function CloseBtn({ onClick }) {
  return (
    <StyledCloseBtn onClick={onClick}>
      <img src="/images/close_btn.svg" alt="Menü bezárása" />
    </StyledCloseBtn>
  );
}

export default CloseBtn;
