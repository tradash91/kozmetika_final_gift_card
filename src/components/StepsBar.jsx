import styled from "styled-components";

const StyledBar = styled.div`
  width: 20px;
  height: 5px;
  background-color: ${(props) => props.$bg};
`;

function StepsBar({ data, currIndex }) {
  return data.map((data, index) => {
    return (
      <StyledBar
        key={index}
        $bg={currIndex === index ? "red" : "white"}
      ></StyledBar>
    );
  });
}

export default StepsBar;
