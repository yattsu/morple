import { Box, Flex, Text } from '@chakra-ui/react';

export const Cell = ({ character, evaluation }) => {
  return(
    <Box
      position='relative'
      pointerEvents='none'
      w='16'
      h='16'
      rounded='md'
      bg={
        evaluation == 'correct'
          ?
            'green.400'
          :
        evaluation == 'incorrect'
          ?
            'gray.400'
          :
        evaluation == 'found'
          ?
            'yellow.500'
          :
            'gray.50'
      }
      border='2px solid'
      borderColor={!evaluation ? 'gray.200' : 'transparent'}
    >
      <Flex
        position='relative'
        h='full'
        w='full'
        color={!evaluation ? 'gray.500' : 'gray.50'}
        justify='center'
      >
        <Text
          position='absolute'
          top='25%'
          fontSize='2xl'
          fontWeight='bold'
        >
          {character}
        </Text>
      </Flex>
    </Box>
  )
}
