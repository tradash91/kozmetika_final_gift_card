import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { supabase } from "../utils/supabase";
import { useMutation } from "@tanstack/react-query";
import LoadingPage from "./LoadingPage";
const StyledConfimMain = styled.main`
  height: 100dvh;
`;

function ConfirmOrder() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const order_id = params.get("code");
  console.log(order_id);

  const { isPending, mutate, error } = useMutation({
    mutationFn: async (order_id) => {
      const res = await fetch(
        "https://ddvnuqohudlphhbsdtzg.supabase.co/functions/v1/confirm_order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order_id }),
        }
      );
      console.log(res);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      return data;
    },
  });

  if (isPending) return <LoadingPage />;
  return (
    <StyledConfimMain>
      <h1>{error?.message}</h1>
      <Navbar />
      <h1>confirm order</h1>
      <button
        onClick={async () => {
          mutate(order_id);

          console.log("kész");
        }}
      >
        Megerősítés
      </button>
      <Footer />
    </StyledConfimMain>
  );
}

export default ConfirmOrder;
