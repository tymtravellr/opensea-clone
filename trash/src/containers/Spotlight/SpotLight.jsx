import { Container } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { SectionStyled } from "./style";
import SliderThreeColumn from "../../components/Sliders/ThreeColumn";
import ProfileCard from "../../components/Cards/Profile/ProfileCard";
export default function Spotlight(){
  return(
    <SectionStyled>
      <Container>
          <SectionStyled.Title variant="lg" mb="40px" as="h2">
          Sports spotlight
          </SectionStyled.Title>
          <SliderThreeColumn>
              <SwiperSlide>
                <ProfileCard/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard/>
              </SwiperSlide>
              <SwiperSlide>
              <ProfileCard/>
              </SwiperSlide>
          </SliderThreeColumn>
      </Container>
    </SectionStyled>
  )
}