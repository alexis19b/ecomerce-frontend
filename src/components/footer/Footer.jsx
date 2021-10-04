import {
  Email,
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import {
  Container,
  Left,
  Rigth,
  Center,
  Logo,
  Desc,
  SocialIcon,
  SocialContainer,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment
} from "./style";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOMERCE</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          nostrum et vel dolore, illum aliquid nobis vitae aspernatur laudantium
          distinctio nam pariatur fugit? Distinctio deserunt placeat sapiente
          esse eaque velit?
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Email />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Userful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Acconunt</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Rigth>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room />
          0251 Barinas, Venezuela
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone /> +58 0414 509 81 52
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutline /> contact@ecomerce.com
        </ContactItem>
        <Payment  src="https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png">
      </Rigth>
    </Container>
  );
};

export default Footer;
