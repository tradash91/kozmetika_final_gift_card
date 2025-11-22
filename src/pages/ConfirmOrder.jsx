import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { supabase } from "../utils/supabase";
import { useMutation } from "@tanstack/react-query";
import LoadingPage from "./LoadingPage";
import { useState } from "react";
import { flex } from "../styles/GlobalStyles";
const StyledConfimMain = styled.main`
  height: 100dvh;
  background-color: var(--white);
  ${flex('column')}
  text-align: center;
  button {
    background-color: var(--green);
    font-size: 18px;
    padding: 1rem 3rem;
    color: var(--white);
  }
  h2 {
   
  }
  .orderError {
    color: var(--red);
  }
  .orderDetails {
    ${flex('column')}
    gap: 3rem;
  }
`;

function ConfirmOrder() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [step, setStep] = useState(1);

  const order_id = params.get("code");
  console.log(order_id);

  const { isPending, mutate, error, data } = useMutation({
    mutationFn: async (order_id) => {
      const res = await fetch(
        "https://ddvnuqohudlphhbsdtzg.supabase.co/functions/v1/confirm_order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order_id }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      return data;
    },
    onSuccess: () => {
      setStep(2);
    },
  });

  if (isPending) return <LoadingPage />;
  console.log(data);
  return (
    <>
      <Navbar />
      <StyledConfimMain>
       {step === 1 && !error?.message &&<div className="orderDetails">
          <h1>Megrendelés azonosítója <strong>{order_id}</strong> </h1>
          <button
            onClick={async () => {
              mutate(order_id);
             
            }}
          >
            Megerősítés
          </button>
        </div>}
         {step === 2 && <div className="">
          <h2>A vásárlás befejezéséhez kérlek utald át az email üzenetben feltüntetett összeget az alábbi számlaszámra:</h2>
          <h3>Deák-Takács Nóra</h3>
          <h3>432432 432432 432432432</h3>
        </div>}
        {error?.message && (
          <div >
            <h1 className="orderError" >{error?.message}</h1>
          </div>
        )}
      </StyledConfimMain>
      <Footer />
    </>
  );
}

export default ConfirmOrder;
