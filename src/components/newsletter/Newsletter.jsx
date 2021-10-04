import { Send } from "@material-ui/icons";
import React from "react";
import {
  Container,
  Description,
  Input,
  InputContainer,
  Title,
  Button,
} from "./style";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
