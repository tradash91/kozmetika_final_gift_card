import styled from "styled-components";
import { flex } from "../styles/GlobalStyles";
import { BarLoader } from "react-spinners";

const StyleLoadingPage = styled.main`
  height: 100dvh;
  width: 100%;
  ${flex}
  justify-content: center;
  align-items: center;
`;

function LoadingPage() {
  return (
    <StyleLoadingPage>
      <BarLoader color="var(--brown)" />
    </StyleLoadingPage>
  );
}

export default LoadingPage;
