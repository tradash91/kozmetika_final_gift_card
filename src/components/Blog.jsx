import styled from "styled-components";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import {
  cormorant_20_semiBold,
  flex,
  mont_12_regular,
  mont_13_lightItalic,
  mont_16_regular,
} from "../styles/GlobalStyles";
import { EffectFade } from "swiper/modules";
import { formatDate } from "../utils/dateFormatter";
const StyledBlogSection = styled.section`
  padding: 0 5rem;
  width: 100%;
  height: 500px;
  padding-bottom: 3rem;
  @media (max-width: 600px) {
    padding: 0 1rem 3rem 1rem;
  }
`;
const BlogPost = styled(SwiperSlide)`
  ${flex('column')}
  justify-content: start;
  align-items: start;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: var(--brown);
  padding: 3rem 2rem;
  color: var(--text-black);
  flex-grow: 1;
  word-wrap: break-word;
  overflow-y: auto;
  
  span {
    ${mont_13_lightItalic}
  }
  h3 {
    ${cormorant_20_semiBold}
    text-transform: uppercase;
  }
  img {
    height: 100px;
  }
  p {
    ${mont_16_regular}
  }
`;
const CostumeSwiper = styled(Swiper)`
  padding: 0 4.5rem;
  height: 100%;
  .swiper-button-next,
  .swiper-button-prev {
    background-color: var(--black);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    background-color: var(--black);
    color: var(--white);
  }
`;
function Blog({ blogData }) {
  return (
    <>
      <SectionTitle heading={"Híreink"}>Híreink</SectionTitle>
      <StyledBlogSection id="hírek">
        <CostumeSwiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          spaceBetween={50}
          breakpoints={{
            400: { slidesPerView: 1 },
            750: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {blogData.map((post) => {
            const date = formatDate(post.created_at);

            return (
              <BlogPost>
                <span>{date}</span>
                <h3>{post.title}</h3>
                {post.img_url && <img src={post.img_url} alt="" />}
                <p>{post.body}</p>
              </BlogPost>
            );
          })}
        </CostumeSwiper>
      </StyledBlogSection>
    </>
  );
}

export default Blog;
