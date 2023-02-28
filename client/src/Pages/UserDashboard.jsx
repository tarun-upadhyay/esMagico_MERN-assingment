import { Box, Center, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const users = useSelector((el) => el);

  return (
    <Box>
      <Center>
        <Heading>My Details</Heading>
      </Center>
      <Center>
        <Box p="50"   boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={50} mt="5">
          <Heading>{users.user.name}</Heading>
          <Heading>{users.user.email}</Heading>
          <Heading>Role: {users.user.role}</Heading>
        </Box>
      </Center>
    </Box>
  );
};

export default UserDashboard;
