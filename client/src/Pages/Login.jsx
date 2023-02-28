import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import {  Link, Navigate } from "react-router-dom";
import { loginReq } from "../Redux/Action";

const Login = () => {
    const [email, setEmail ] = useState(""),[password, setPassword] = useState("");
    const dispatch = useDispatch()
  const users = useSelector((el)=>el)
  console.log(users)
    const handleSubmit = ()=>{
       dispatch(loginReq({email, password}))
    }
    if(users.isAuth && !users.user.length) return <Navigate to="/user"/>
    else if(users.isAuth && users.user.length) return <Navigate to="/admin"/>
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
                Sign In
              </Text>

              <Text>
                New User?{" "}
                <Link to="/signup">
                  <Text fontSize={"md"} fontWeight="bold" color={"#017cfd"}>
                    {" "}
                    Create an account
                  </Text>{" "}
                </Link>
              </Text>
              <Box mt="3">
                <FormControl isRequired>
                  <Text>Email:</Text>
                  <Input
                    placeholder="Enter your Email Id"
                    type="email"
                    backgroundColor={"#95befe"}
                    color="black"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                  ></Input>
                  <Text>Password:</Text>
                  <Input
                    placeholder="Enter your Passwrod"
                    type={"password"}
                    backgroundColor={"#95befe"}
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                  ></Input>
                  <Button mt="3" colorScheme={"linkedin"} onClick={handleSubmit}>
                    Login
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

export default Login;
