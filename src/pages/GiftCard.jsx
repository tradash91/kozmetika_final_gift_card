import { useMutation, useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingPage from "./LoadingPage";
import { getServices, getServicesForGiftCard } from "../api/services";
import { h1, h3, select, span } from "motion/react-client";
import { useEffect, useState } from "react";
import Arrow from "/images/arrow_icon.svg";
///Motion
import { motion } from "framer-motion";
import {
  StyledCardWrapper,
  StyledData,
  StyledFinishBuy,
  StyledFormInput,
  StyledGiftCard,
  StyledGiftCardBackground,
  StyledGiftCardMain,
  StyledOption,
  StyledOptionWrapper,
  StyledOrderData,
  StyledSelect,
} from "./giftcard.styles";
import Select from "../components/Select";
import { sendGiftCardComfim } from "../api/giftCard";

function GiftCard() {
  const [isPersonalChecked, setIsPersonalChecked] = useState(false);
  const [isMailChecked, setIsMailChecked] = useState(false);
  const [service, setService] = useState(null);
  const [isMainCategoryOpen, setIsMainCategoryOpen] = useState(null);
  const [giftCardBGURL, setGiftCardBgURL] = useState(null);
  const [giftCardBG, setGiftCardBG] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  console.log(service);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${
      import.meta.env.VITE_RECAPTCHA_SITE_KEY
    }`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    zip: "",
    street: "",
    delivery: "",
    service: "",
    servicePrice: "",
  });
  const { isLoading: isServicesLoading, data: servicesData } = useQuery({
    queryFn: getServicesForGiftCard,
    queryKey: ["getServicesForGiftCard"],
  });

  const {
    isPending: isSendingConfimEmail,
    mutate: sendConfirmEmail,
    error,
  } = useMutation({
    mutationFn: sendGiftCardComfim,

    onSuccess: () => {
      setStep(2);
    },
    onError: (error) => {
      /* alert(error.message); */
    },
  });

  if (isServicesLoading || isSendingConfimEmail) return <LoadingPage />;

  console.log(error?.message);
  console.log(service);
  return (
    <>
      <Navbar />
      <StyledGiftCardMain>
        {step === 1 && (
          <StyledCardWrapper className="">
            <StyledData>
              <h3>Szolgáltatás</h3>

              {error?.message && buyerData.service === "" && (
                <p className="errorMessage">Válasz egy szolgáltatást.</p>
              )}

              {servicesData.map((service, index) => {
                return (
                  <StyledSelect
                    $border={
                      error?.message && buyerData.service === ""
                        ? "1px solid var(--red)"
                        : " 1px solid #c4c0c0ff"
                    }
                    onClick={() => {
                      setIsMainCategoryOpen((id) => {
                        if (id === null) {
                          return service.id;
                        } else if (id === service.id) {
                          return null;
                        } else if (id !== service.id) {
                          return service.id;
                        }
                        return id;
                      });
                      setGiftCardBgURL(service.bg_url);
                      setIsOpen((open) => !open);
                    }}
                    key={index}
                  >
                    {service.name} <img src={Arrow} alt="" />
                    <StyledOptionWrapper
                      initial={{ height: 0 }}
                      animate={{ height: isMainCategoryOpen ? "auto" : 0 }}
                      transition={{ duration: 0.15, ease: "easeInOut" }}
                    >
                      {isMainCategoryOpen === service.id &&
                        service.sub_categories.map((subcat, index) => {
                          return (
                            <StyledOption
                              onClick={() => {
                                setService(subcat);
                                setGiftCardBG(giftCardBGURL);
                                setBuyerData({
                                  ...buyerData,
                                  service: subcat.name,
                                  servicePrice: subcat.price,
                                });
                              }}
                              key={index}
                              className="option"
                            >
                              {subcat.name} <span>{subcat.price} Forint</span>
                            </StyledOption>
                          );
                        })}
                    </StyledOptionWrapper>
                  </StyledSelect>
                );
              })}

              <div className="buyer-data">
                {error && <p className="errorMessage">{error?.message}</p>}
                <form>
                  <h3>Vevő adatai</h3>
                  <StyledFormInput
                    $border={
                      error?.message && buyerData.name === ""
                        ? "1px solid var(--red)"
                        : " 1px solid #c4c0c0ff"
                    }
                    onChange={(e) => {
                      setBuyerData({ ...buyerData, name: e.target.value });
                    }}
                    type="text"
                    placeholder="Név"
                  />
                  <StyledFormInput
                    $border={
                      error?.message && buyerData.email === ""
                        ? "1px solid var(--red)"
                        : " 1px solid #c4c0c0ff"
                    }
                    onChange={(e) => {
                      setBuyerData({ ...buyerData, email: e.target.value });
                    }}
                    type="email"
                    placeholder="Email cím"
                  />
                  <StyledFormInput
                    $border={
                      error?.message && buyerData.phone === ""
                        ? "1px solid var(--red)"
                        : " 1px solid #c4c0c0ff"
                    }
                    onChange={(e) => {
                      setBuyerData({ ...buyerData, phone: e.target.value });
                    }}
                    type="text"
                    placeholder="Telefonszám"
                  />
                  <StyledFormInput
                    $border={
                      error?.message && buyerData.zip === ""
                        ? "1px solid var(--red)"
                        : " 1px solid #c4c0c0ff"
                    }
                    onChange={(e) => {
                      setBuyerData({ ...buyerData, zip: e.target.value });
                    }}
                    type="text"
                    placeholder="Irányítószám"
                  />
                  <StyledFormInput
                    $border={
                      error?.message && buyerData.city === ""
                        ? "1px solid var(--red)"
                        : " 1px solid #c4c0c0ff"
                    }
                    onChange={(e) => {
                      setBuyerData({ ...buyerData, city: e.target.value });
                    }}
                    type="text"
                    placeholder="Város"
                  />
                  <StyledFormInput
                    $border={
                      error?.message && buyerData.street === ""
                        ? "1px solid var(--red)"
                        : " 1px solid #c4c0c0ff"
                    }
                    onChange={(e) => {
                      setBuyerData({ ...buyerData, street: e.target.value });
                    }}
                    type="text"
                    placeholder="Utca / házszám"
                  />
                </form>
              </div>

              <div className="select-delivery">
                <div className="personal">
                  {error?.message && !buyerData.delivery && (
                    <p className="errorMessage"> Válasz egy szállításimódot.</p>
                  )}
                  <input
                    id="personal"
                    type="checkbox"
                    onChange={() => {
                      setIsPersonalChecked(true);
                      setIsMailChecked(false);
                      setBuyerData({ ...buyerData, delivery: "személyes" });
                    }}
                    checked={isPersonalChecked}
                  />
                  <label htmlFor="personal">
                    Személyes átvétel (ingyenes){" "}
                  </label>
                </div>
                <div className="mail">
                  <input
                    id="mail"
                    type="checkbox"
                    onChange={() => {
                      setIsPersonalChecked(false);
                      setIsMailChecked(true);
                      setBuyerData({ ...buyerData, delivery: "posta" });
                    }}
                    checked={isMailChecked}
                  />
                  <label htmlFor="mail">
                    Postai kézbesítés (a postaköltség a vevőt terheli)
                  </label>
                </div>
              </div>
              <button>Tovább</button>
            </StyledData>

            <StyledGiftCard className="gift-card">
              <StyledGiftCardBackground $bg={giftCardBG}>
                <div className="inner">
                  <h1>
                    Ajándék <br /> utalvány
                  </h1>
                  <div className="innerWrapper">
                    <p className="serviceName">{service?.name}</p>
                    <div className="decoration"></div>
                  </div>
                  <p className="siteAddress">STARGIRLKOZMETIKA.HU</p>
                </div>
              </StyledGiftCardBackground>
              <div className="giftCardDetails">
                <div className="imgWrapper">
                  <img src="/images/site_logo.png" alt="" />
                </div>
                <div className="fromTo">
                  <div className="from">TŐLEM</div>
                  <div className="to">NEKED</div>
                </div>
                <p className="text1">
                  Add át magad az exclusive relax élménynek - mert Te
                  megérdemled.
                </p>
                <p className="text2">12 hónapig érvényes.</p>
              </div>
            </StyledGiftCard>
          </StyledCardWrapper>
        )}
        {step === 2 && (
          <StyledFinishBuy>
            <h1>Köszönjük a megrendeléses</h1>
            <p>
              A megerősítő emailt elküldtük az alábbi email címre:
              {buyerData.email}
            </p>
          </StyledFinishBuy>
        )}
        {/* {service?.name && service?.price && buyerData?.name && buyerData?.email && buyerData?.phone && buyerData?.city && buyerData?.zip && buyerData?.street && buyerData?.delivery} */}
        <StyledOrderData className="orderData">
          <div className="personal">
            <div className="row">
              <p className="title">Név:</p>
              <p>{buyerData?.name}</p>
            </div>
            <div className="row">
              <p className="title">Email cím:</p>
              <p>{buyerData?.email}</p>
            </div>

            <div className="row">
              <p className="title">Telefonszám:</p>
              <p>{buyerData?.phone}</p>
            </div>
            <div className="row">
              <p className="title">Irányítószám:</p>
              <p>{buyerData?.zip}</p>
            </div>
            <div className="row">
              <p className="title">Város:</p>
              <p>{buyerData?.city}</p>
            </div>

            <div className="row">
              <p className="title">Utca/házszám:</p>
              <p>{buyerData?.street}</p>
            </div>
            <div className="row">
              <p className="title">Kézbesítés módja:</p>
              <p>
                {buyerData?.delivery === "személyes" ? "Személyes" : "Postai"}
              </p>
            </div>
          </div>
          <div className="service">
            <div className="row">
              <p>Szolgáltatás:</p>
              <p>{service?.name} </p>
            </div>
            <div className="row">
              <p>Ár:</p>
              <p>
                {service?.price} {service?.price && "Forint"}
              </p>
            </div>
          </div>

          <button
            className="orderBtn"
            onClick={() => {
              sendConfirmEmail(buyerData);
            }}
          >
            Megrendelés
          </button>
        </StyledOrderData>
      </StyledGiftCardMain>
      <Footer />
    </>
  );
}

export default GiftCard;
