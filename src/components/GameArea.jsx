import { useState } from 'react';

import { Flex } from '@chakra-ui/react';

import { Cell } from './Cell';

export const GameArea = ({ progress, word, currentRow }) => {
  return(
    <Flex
      direction='column'
      gap='1'
    >
      {
        progress.map(row => (
          <Flex direction='row' gap='1'>
            {
              row.map(cell => (
                <Cell character={cell ? cell.toUpperCase() : null}
              evaluation={
                currentRow > progress.indexOf(row)
                ?
                cell == word[row.indexOf(cell)]
                ?
                'correct'
                :
                  word.includes(cell)
                ?
                'found'
                :
                'incorrect'
                :
                null
              }
                />
              ))
            }
          </Flex>
        ))
      }
    </Flex>
  )
}
