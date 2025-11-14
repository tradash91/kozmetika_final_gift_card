import styled from "styled-components";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import Services from "../components/Services";
import AboutUsPreview from "../components/AboutUsPreview";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSettings } from "../api/getSettings";
import { BarLoader } from "react-spinners";
import LoadingPage from "./LoadingPage";
import Contacts from "../components/Contacts";

import WhyChooseUs from "../components/WhyChooseUs";
import Blog from "../components/Blog";

import Footer from "../components/Footer";
import BrandSection from "../components/BrandSection";
import { useEffect, useState } from "react";
import DarkLayer from "../components/DarkLayer";
import { motion } from "motion/react";
import { set } from "react-hook-form";
import BackToTopButton from "../components/BackToTopButton";
import {
  getContacts,
  getOpeningHours,
  getSiteSettings,
  getSocial,
  settings,
} from "../api/settings";
import { h1 } from "motion/react-client";
import { posts } from "../api/blog";

import AnimatedWrapper from "../components/AnimatedWrapper";
import { getServices } from "../api/services";
import CTA_btn from "../components/CTA_btn";
import CTA_section from "../components/CTA_section";

const StyledHome = styled.main`
  background-color: var(--white);
  position: relative;
`;

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* const { isLoading, data } = useQuery({
    queryFn: getSettings,
    queryKey: ["getSettings"],
  });

  const { isLoading: isBlogPostsLoading, data: blogData } = useQuery({
    queryFn: getPosts,
    queryKey: ["getPosts"],
  });
  if (isLoading || isBlogPostsLoading) return <LoadingPage />; */

  const { isLoading: isServicesLoading, data: servicesData } = useQuery({
    queryFn: getServices,
    queryKey: ["getServices"],
    onSucces: () => {
      console.log("dsa");
    },
  });

  const { isLoading: isSettingsLoading, data: settingsData } = useQuery({
    queryFn: getSiteSettings,
    queryKey: ["getSetting"],
  });

  const { isLoading, data: openingHoursData } = useQuery({
    queryFn: getOpeningHours,
    queryKey: ["getOpeningHours"],
  });

  const { isPending: isBlogDataLoading, data: blogData } = useQuery({
    queryFn: posts,
    queryKey: ["getPosts"],
  });

  const { isLoading: isSocialLoading, data: socialData } = useQuery({
    queryFn: getSocial,
    queryKey: ["getSocial"],
  });

  const { isLoading: isContactsLoading, data: contactsData } = useQuery({
    queryFn: getContacts,
    queryKey: ["getContacts"],
  });

  if (
    isLoading ||
    isSocialLoading ||
    isSettingsLoading ||
    isContactsLoading ||
    isBlogDataLoading ||
    isServicesLoading
  )
    return <LoadingPage />;

  return (
    <StyledHome>
      <AnimatedWrapper>
        <Hero data={settingsData} />
      </AnimatedWrapper>
      <Services setIsMenuOpen={setIsMenuOpen} servicesData={servicesData} />
      <CTA_section />
      <BrandSection $bg="/images/brand_jamsen.png" />
      <AboutUsPreview />
      <BrandSection $bg="/images/joico.jpg" />
      <Contacts
        socialData={socialData}
        openingHoursData={openingHoursData}
        contactsData={contactsData}
      />
      <WhyChooseUs />
      {blogData?.length >= 1 && <Blog blogData={blogData} />}
      <Footer />
      {isMenuOpen && <DarkLayer setIsMenuOpen={setIsMenuOpen} />}
      <BackToTopButton />
    </StyledHome>
  );
}

export default Home;
