import { Button, Flex, Text } from '@chakra-ui/react';

export const VerdictBox = ({ verdict, resetGame, handleShowVerdict }) => {
  return(
    <Flex
      position='absolute'
      bg='gray.50' 
      alignItems='center'
      zIndex='10'
      py='8'
      px='24'
      shadow='xl'
      rounded='lg'
      direction='column'
      gap='3'
    >
      <Text fontWeight='bold' color='gray.600'>
      {
        `${verdict.toUpperCase()} ${verdict == 'winner' ? '!!!' : '... :('}`
      }
      </Text>
      <Button onClick={() => {handleShowVerdict(); resetGame()}} bg='green.400' color='gray.50'>OK</Button>
    </Flex>
  )
}
