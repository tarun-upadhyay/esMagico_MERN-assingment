import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./logo.png";
const Navbar = () => {
  const data = useSelector((el) => el.isAuth);

  return (
    <Box mt="5">
      <HStack>
        <Container>
          <HStack>
        <Link to="/login">
            <Image w="40" borderRadius={500} src={logo} />
        </Link>
          </HStack>
        </Container>
        <Container>
          <Link to="/login">
            {data ? "" : <Button colorScheme={"messenger"}>Login</Button>}
          </Link>
          <Link to="/signup">
            {data ? (
              ""
            ) : (
              <Button ml="4" colorScheme={"whatsapp"}>
                Signup
              </Button>
            )}
          </Link>
        </Container>
      </HStack>
    </Box>
  );
};

export default Navbar;
