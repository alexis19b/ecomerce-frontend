import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from "../../data";
import {
  Container,
  Arrow,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Image,
  Slide,
  Title,
  Desc,
  Buttom,
} from "./style";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direccion) => {
    if (direccion === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  console.log(slideIndex);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => (
          <Slide bg={slide.bg} key={slide.id}>
            <ImgContainer>
              <Image src={slide.img} alt={slide.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <Buttom>SHOW NOW</Buttom>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
