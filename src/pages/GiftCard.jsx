import { useMutation, useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import LoadingPage from "./LoadingPage";
import { getServices, getServicesForGiftCard } from "../api/services";
import { h3, select } from "motion/react-client";
import { useEffect, useState } from "react";
import Arrow from "/images/arrow_icon.svg";
///Motion
import { motion } from "framer-motion";
import {
  StyledCardWrapper,
  StyledData,
  StyledFinishBuy,
  StyledGiftCard,
  StyledGiftCardBackground,
  StyledOption,
  StyledOptionWrapper,
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
  const [step,setStep] = useState(1)
  useEffect(() => {
  const script = document.createElement("script");
  script.src = `https://www.google.com/recaptcha/api.js?render=${import.meta.env.VITE_RECAPTCHA_SITE_KEY}`;
  script.async = true;
  document.body.appendChild(script);
  
  
}, []);

  const [buyerData,setBuyerData] = useState({
    name:'',
    email:"",
    phone:"",
    city:"",
    zip:"",
    street:"",
    delivery:"",
    
  })
  const { isLoading: isServicesLoading, data: servicesData } = useQuery({
    queryFn: getServicesForGiftCard,
    queryKey: ["getServicesForGiftCard"],
  });

const {isPending:isSendingConfimEmail,mutate:sendConfirmEmail} = useMutation({
  mutationFn: sendGiftCardComfim
 
})

  if (isServicesLoading || isSendingConfimEmail) return <LoadingPage />;
 
console.log(service,step);



  return (
    <>
      <Navbar />

      <main>
         {step === 1 && <StyledCardWrapper style={{ marginTop: "10rem" }} className="">
          <StyledData>
            <h3>Szolgáltatás</h3>
            {servicesData.map((service, index) => {
              return (
                <StyledSelect
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
                            }}
                            key={index}
                            className="option"
                          >
                            {subcat.name}
                          </StyledOption>
                        );
                      })}
                  </StyledOptionWrapper>
                </StyledSelect>
              );
            })}

            <div className="buyer-data">
              <h3></h3>
              <form>
                <h3>Vevő adatai</h3>
                <input onChange={(e)=>{setBuyerData({...buyerData,name:e.target.value})}} type="text" placeholder="Név" />
                <input onChange={(e)=>{setBuyerData({...buyerData,email:e.target.value})}} type="text" placeholder="Email cím" />
                <input onChange={(e)=>{setBuyerData({...buyerData,phone:e.target.value})}} type="text" placeholder="Telefonszám" />
                <input onChange={(e)=>{setBuyerData({...buyerData,zip:e.target.value})}} type="text" placeholder="Irányítószám" />
                <input onChange={(e)=>{setBuyerData({...buyerData,city:e.target.value})}} type="text" placeholder="Város" />
                <input onChange={(e)=>{setBuyerData({...buyerData,street:e.target.value})}} type="text" placeholder="Utca / házszám" />
              </form>
            </div>

            <div className="select-delivery">
              <div className="personal">
                <input
                  id="personal"
                  type="checkbox"
                  onChange={() => {
                    setIsPersonalChecked(true);
                    setIsMailChecked(false);
                    setBuyerData({...buyerData,delivery:'személyes'})
                  }}
                  checked={isPersonalChecked}
                />
                <label htmlFor="personal">Személyes átvétel (ingyenes) </label>
              </div>
              <div className="mail">
                <input
                  id="mail"
                  type="checkbox"
                  onChange={() => {
                    setIsPersonalChecked(false);
                    setIsMailChecked(true);
                    setBuyerData({...buyerData,delivery:'posta'})
                  }}
                  checked={isMailChecked}
                />
                <label htmlFor="mail">
                  Postai kézbesítés (a postaköltség a vevőt terheli)
                </label>
              </div>
            </div>
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
                Add át magad az exclusive relax élménynek - mert Te megérdemled.
              </p>
              <p className="text2">12 hónapig érvényes.</p>
            </div>
          </StyledGiftCard>
          <button onClick={ async ()=>{         
              /* sendConfirmEmail(buyerData) */
              setStep((step)=> step < 2 ? step + 1 : step)
          }} >Tovább</button>
        </StyledCardWrapper>}
        {step === 2 && <StyledFinishBuy>
          <button onClick={()=>{setStep((step)=> step -= 1)}} >Vissza</button>
          teszt
        </StyledFinishBuy>}
       {/*  {service && <div>
          <h1>{service?.name}</h1>
          <h1>{service?.price} Forint</h1>
          </div>} */}
      </main>
      <Footer />
    </>
  );
}

export default GiftCard;


