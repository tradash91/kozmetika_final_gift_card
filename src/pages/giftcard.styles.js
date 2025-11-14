import styled from "styled-components";
import { flex } from "../styles/GlobalStyles";
import { motion } from "framer-motion";
export const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 2rem;
  font-family: "montserrat", Reddit Sans;
  padding: 0 5rem;
  height: 800px;
`;

export const StyledData = styled.div`
  ${flex("column")}
  gap: 1rem;
  align-items: start;
  font-size: 18px;

  .form {
    ${flex("column")}
    align-items: start;

    select {
      font-size: 16px;
      padding: 1rem 2rem;
    }
  }

  .buyer-data {
    align-self: stretch;
    h3 {
      font-weight: 600;
    }
    form {
      ${flex("column")}
      align-items: start;
      gap: 1rem;
      
      
      input {
        align-self: stretch;
        border-radius: 2px;
        border: 1px solid #c4c0c0ff;
        padding:0.5rem 1rem
      }

    }
  }
`;

export const StyledSelect = styled.div`
  position: relative;
  ${flex("row")}
  justify-content: space-between;
  gap: 1rem;
  width: 90%;
  padding: 0.5rem 1rem;
  border: 1px solid #c4c0c0ff;
  color: var(--text-black);
  cursor: pointer;
  border-radius: 5px;
  img {
    width: 15px;
  }
`;

export const StyledOptionWrapper = styled(motion.div)`
  position: absolute;
  z-index: 999;
  top: 110%;
  left: 0;
  width: 100%;
  overflow: hidden;
`;

export const StyledOption = styled.div`
  background-color: #e4e1e1ff;
  font-size: 16px;
  width: 100%;
  padding: 1rem 0.3rem;
  cursor: pointer;
  &:hover {
    background-color: #c9c6c6ff;
  }
`;

export const StyledGiftCard = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  column-gap: 2rem;
  font-family: "playfair display", Reddit Sans;

  -webkit-box-shadow: 6px 8px 4px -6px rgba(0, 0, 0, 0.79);
  -moz-box-shadow: 10px 8px 4px -6px rgba(0, 0, 0, 0.79);
  .giftCardDetails {
    display: grid;
    background-color: #faf6f1;
    .imgWrapper {
      position: relative;
      img {
        justify-self: flex-start;
        height: 150px;
      }

      &:after {
        content: "";
        position: absolute;
        width: 80%;
        height: 2px;
        background-color: #000;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  .fromTo {
    align-self: center;
    justify-self: center;
    font-size: 18px;
    width: 80%;
    div {
      padding: 0.5rem 1rem;
      border: 1px solid #000;
    }
  }

  .text1 {
    font-size: 16px;
    text-align: center;
  }

  .text2 {
    font-size: 14px;
    position: relative;
    text-align: right;
    width: 100%;
    padding-right: 3rem;
    &:after {
      content: "";
      position: absolute;
      width: 80%;
      height: 2px;
      background-color: #000;
      bottom: 70%;
      right: 0%;
      transform: translateX(-5%);
    }
  }
`;

export const StyledGiftCardBackground = styled.div`
  background: ${({ $bg }) => `url(${$bg || "/images/blank_bg.png"})`};
  background-size: cover;
  background-position: center;
  transition: all 0.5s ease;
  color: #ffffffff;
  ${flex("column")}

  .inner {
    background-color: #3b3a3aad;
    height: 90%;
    width: 90%;
    ${flex("column")};

    justify-content: flex-end;
    gap: 4rem;
    h1 {
      font-size: 60px;
      line-height: 1;
    }
    .decoration {
      width: 50px;
      height: 5px;
      background-color: white;
    }
    .innerWrapper {
      ${flex("column")}
      gap:1rem;
    }
    .serviceName {
      font-size: 18px;
      text-transform: uppercase;
      opacity: 1;
      transition: all 1s ease;
      text-align: center;
    }
    .siteAddress {
      font-size: 22px;
    }
  }
`;
