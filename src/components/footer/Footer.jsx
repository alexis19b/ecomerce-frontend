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
  Payment,
} from "./style";
import payment from "../assets/payment.png";

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
          <Room style={{ marginRight: "10px" }} />
          0251 Barinas, Venezuela
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +58 0414 509 81 52
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@ecomerce.com
        </ContactItem>
        <Payment src={payment} alt="payment" />
      </Rigth>
    </Container>
  );
};

export default Footer;
