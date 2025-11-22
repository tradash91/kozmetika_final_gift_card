import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { supabase } from "../utils/supabase";
import { useMutation } from "@tanstack/react-query";
import LoadingPage from "./LoadingPage";
import { useState } from "react";
const StyledConfimMain = styled.main`
  height: 100dvh;
  background-color: var(--white);
  button {
    background-color: var(--green);
    font-size: 18px;
    padding: 1rem 3rem;
    color: var(--white);
  }
  h2 {
    color: var(--red);
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
        <div className="">
          <h1>Megrendelés azonosítója {order_id}</h1>
          <button
            onClick={async () => {
              mutate(order_id);
              console.log("kész");
            }}
          >
            Megerősítés
          </button>
        </div>
        {error?.message && (
          <div className="">
            <h2>{error?.message}</h2>
          </div>
        )}
      </StyledConfimMain>
      <Footer />
    </>
  );
}

export default ConfirmOrder;
