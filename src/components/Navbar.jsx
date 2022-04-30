import { QuestionIcon, SettingsIcon } from '@chakra-ui/icons';
import { Flex, Divider, Heading } from '@chakra-ui/react';

export const Navbar = () => {
  return(
    <Flex
      direction='column'
      w='full'
      alignItems='center'
      pt='8'
    >
      <Flex
        direction='row'
        justify='space-between'
        w='full'
        alignItems='baseline'
      >
        <QuestionIcon color='gray.500' w='6' h='6' />
        <Heading color='gray.900' size='xl'>M O R P L E</Heading>
        <SettingsIcon color='gray.500' w='6' h='6' />
      </Flex>
      <Divider
        py='1'
      />
    </Flex>
  )
}
