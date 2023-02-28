import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signupReq } from "../Redux/Action";

const Signup = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [name, setName] = useState(""), [role, setRole ] = useState("");
    const dispatch = useDispatch()
    const users = useSelector((el)=> el)
    console.log(users)
  const handleSubmit = () => {
   dispatch(signupReq({email, password, name, role})).then((res)=> console.log(res))
  };
  return (
    <Box>
      <Center>
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          p="10"
          mt="10"
          borderRadius={50}
          w="70%"
        >
          <Flex gap="20%">
            <Box h="50%">
              <Image src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=360" />
            </Box>
            <Box h="50%">
              <Text fontSize={"3xl"} fontWeight="bold" color={"#017cfd"}>
                Sign Up
              </Text>

              <Text>
                Old User?{" "}
                <Link to="/login">
                  <Text fontSize={"md"} fontWeight="bold" color={"#017cfd"}>
                    {" "}
                    Login
                  </Text>{" "}
                </Link>
              </Text>
              <Box mt="3">
                <FormControl isRequired>
                  <Text>Name:</Text>
                  <Input
                    placeholder="Enter your Email Id"
                    type="name"
                    backgroundColor={"#95befe"}
                    color="black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Input>
                  <Text>Email:</Text>
                  <Input
                    placeholder="Enter your Email Id"
                    type="email"
                    backgroundColor={"#95befe"}
                    color="black"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Input>
                  <Text>Password:</Text>
                  <Input
                    placeholder="Enter your Passwrod"
                    type={"password"}
                    backgroundColor={"#95befe"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Input>
                  <Select placeholder="Select Role" isRequired onChange={(e)=> setRole(e.target.value)}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </Select>
                  <Button
                    mt="3"
                    colorScheme={"linkedin"}
                    onClick={handleSubmit}
                  >
                    Signup
                  </Button>
                </FormControl>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default Signup;
