import {
    Tr,
    Td,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    useDisclosure,
    FormControl,
    Input,
    FormLabel,
    Button,
    ModalBody,Select,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
 
  
  const Tbodydata = ({name,email,role}) => {
   
    return (
      <>
        <Tr >
          <Td>
          {name}
          </Td>
          <Td> {email}</Td>
  
         <Td>{role}</Td>
          <Td>
            <Button colorScheme={"yellow"} >Edit</Button>
          </Td>
          <Td>
            <Button colorScheme={"red"} >
              Delete
            </Button>
          </Td>
        </Tr>
      </>
    );
  };
  
  export default Tbodydata;