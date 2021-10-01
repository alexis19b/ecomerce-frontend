import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.6;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  display: flex;
  background-color: #${(props) => props.bg};
`;

export const Image = styled.img`
  height: 90%;
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px 50px 50px 0px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

export const Buttom = styled.button`
  cursor: pointer;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
