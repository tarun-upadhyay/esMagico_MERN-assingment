import React from 'react'
import { Box,Container,Flex, Heading,TableContainer,Table,Tr, Th, Tbody,Td,TableCaption, Thead,Tfoot, Spacer, Divider } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import Tbodydata from './Tbody'
const Admin = () => {
    const data = useSelector((el)=>el.user)
    console.log(data)
  return (
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
     
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th >Role</Th>
          <Th >Edit</Th>
          <Th >Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
      {
        data.map((el,i)=> <Tbodydata key={el._id} {...el}/>)
      }
      </Tbody>
      
     
    </Table>
  </TableContainer>
  )
}

export default Admin