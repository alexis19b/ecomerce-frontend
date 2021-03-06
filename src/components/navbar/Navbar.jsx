import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Rigth,
  SearchContainer,
  Wrapper,
  Logo,
  MenuItem,
  SearchIcon,
} from "./style";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecomerce</Logo>
        </Center>
        <Rigth>
          <MenuItem>Registro</MenuItem>
          <MenuItem>Iniciar Sesión</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Rigth>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
