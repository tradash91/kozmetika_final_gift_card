import { useState } from "react";
import styled from "styled-components";

const StyledSelect = styled.div`
  position: relative;
`;

function Select({ select, option }) {
  const [isOpen, setIsopen] = useState(false);
  return (
    <>
      {select.map((service, index) => {
        return (
          <StyledSelect key={index} style={{ backgroundColor: "red" }}>
            {service.name}
            {service.sub_categories.map((subcat, index) => {
              return (
                <div
                  style={{ backgroundColor: "green" }}
                  key={index}
                  className="option"
                >
                  {subcat.name}
                </div>
              );
            })}
          </StyledSelect>
        );
      })}
    </>
  );
}

export default Select;
