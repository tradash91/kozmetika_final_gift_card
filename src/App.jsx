import { BrowserRouter, Route, Routes } from "react-router";

import GlobalStyles from "./styles/GlobalStyles";

import { useReducer } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContext, initialState, reducer } from "./context/Appcontext";
import Home from "./pages/Home";
import ASZF from "./pages/ASZF";
import Gallery from "./pages/Gallery";
import GiftCard from "./pages/GiftCard";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ state, dispatch }}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ASZF" element={<ASZF />} />
            <Route path="galéria" element={<Gallery />} />
            <Route path="ajandek" element={<GiftCard />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
