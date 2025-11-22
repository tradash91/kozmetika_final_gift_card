import styled from "styled-components";
import { flex, mont_16_regular, mont_20_light, mont_25_light } from "../styles/GlobalStyles";
import SectionTitle from "./SectionTitle";
import { filterContacts, filterData, filterSocial } from "../utils/filterData";


const StyledContactsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 592px;
  width: 100%;
  @media (max-width: 770px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const StyledMap = styled.div`
  height: 100%;
`;
const StyledOpeningHours = styled.ul`
  ${mont_20_light}
  text-transform: uppercase;
  li {
    ${flex("row")}
    justify-content: space-between;
    gap: 2rem;
  }
`;
const StyledContacts = styled.div`
  background-color: var(--brown);
  ${flex("column")}
  gap: 2rem;
  align-items: start;
  padding-left: 3rem;
  @media (max-width: 770px) {
    align-items: center;
    gap: 10rem;
    padding: 5rem 0;
  }
`;
const StyledAddress = styled.ul`
  ${mont_16_regular}
  padding: 1rem;
`;
const StyledSocial = styled.div`
  ${flex("row")}
  gap: 2rem;
`;
function Contacts({ socialData, openingHoursData, contactsData }) {
  const fb = filterSocial(socialData, "facebook");
  const insta = filterSocial(socialData, "instagram");
  const google = filterSocial(socialData, "google");
  const tiktok = filterSocial(socialData, "tiktok");
  const phone = filterContacts(contactsData, "telefon");
  const address = filterContacts(contactsData, "cím");
  const email = filterContacts(contactsData, "email");

  const order = [
    "Hétfő",
    "Kedd",
    "Szerda",
    "Csütörtök",
    "Péntek",
    "Szombat",
    "Vasárnap",
  ];

  const sortedData = [...openingHoursData].sort(
    (a, b) => order.indexOf(a.day) - order.indexOf(b.day)
  );

  return (
    <>
      <SectionTitle heading={"Elérhetőségeink"}>Elérhetőségeink</SectionTitle>
      <StyledContactsWrapper id="elérhetőségek">
        <StyledContacts>
          <StyledOpeningHours>
            {sortedData.map((day) => {
              return (
                <li key={day.id}>
                  {day.day} <span>{day.time}</span>
                </li>
              );
            })}
            
          </StyledOpeningHours>
          <StyledAddress>
            <li> Cím: {address}</li>
            <li>Telefon: {phone}</li>
            <li>Email: {email}</li>
          </StyledAddress>
          <StyledSocial>
            <a href={fb} target="_blank">
              <img
                src="/images/facebook.png"
                alt="Link a facebook oldalunkhoz"
              />
            </a>
            <a href={tiktok} target="_blank">
              <img src="/images/tiktok.png" alt="Link a tiktok oldalunkhoz" />
            </a>
            <a href={insta} target="_blank">
              <img
                src="/images/instagram.png"
                alt="Link az instagram oldalunkhoz"
              />
            </a>
            <a href={google} target="_blank">
              <img
                src="/images/google.png"
                alt="Link a google értékelések oldalunkhoz"
              />
            </a>
          </StyledSocial>
        </StyledContacts>
        <StyledMap>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.5057667050874!2d19.103076859729452!3d47.34352279576637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741eed20b84c993%3A0x400c4290c1e28e0!2sDunaharaszti%2C%202330!5e0!3m2!1shu!2shu!4v1757765563762!5m2!1shu!2shu"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </StyledMap>
      </StyledContactsWrapper>
    </>
  );
}

export default Contacts;
