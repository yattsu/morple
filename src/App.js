import { useState, useEffect } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Center, Flex, Box, Image } from '@chakra-ui/react';

import { Navbar } from './components/Navbar';
import { GameArea } from './components/GameArea';
import { VerdictBox } from './components/VerdictBox';
import Spheal from './images/spheal.png';

import wordlist from './wordlist.json'

const App = () => {
  const [word, setWord] = useState(null)
  const [verdict, setVerdict] = useState(null)
  const [showVerdict, setShowVerdict] = useState(true)
  const [currentRow, setCurrentRow] = useState(0);
  const [progress, setProgress] = useState([
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ]);

  useEffect(() => {
    setWord(chooseRandomWord())
  }, [])

  useEffect(() => {
    if(!verdict) {
      document.addEventListener('keydown', e => handleKeyDown(e), {once: true})
    }
  }, [progress, currentRow])

  const resetGame = () => {
    setVerdict(null);
    setShowVerdict(true);
    setCurrentRow(0);

    const progressCopy = [];
    progress.map(row => {
      progressCopy.push([])
      row.map(() => {
        progressCopy[progress.indexOf(row)].push(null)
      })
    })
    setProgress(progressCopy);
    setWord(chooseRandomWord());
  }

  const chooseRandomWord = () => {
    const randomWord = wordlist[Math.floor(Math.random() * wordlist.length)];
    return randomWord;
  }

  const handleShowVerdict = () => {
    setShowVerdict(!showVerdict);
  }
  
  const handleKeyDown = (e) => {
    if ('abcdefghijklmnopqrstuvwxyzBackspaceEnter'.includes(e.key)) {
      handleChange(e.key)
    }
  }
  

  const handleChange = (character) => {
    const progressCopy = [...progress]

    if (currentRow > progress[0].length) {
      return;
    }

    if (character == 'Enter') {
      let counter = 0;
      if (currentRow > progress[0].length) {
        setCurrentRow(currentRow + 1);
        setVerdict('loser');
        return;
      }
      for(let i=0; i<progressCopy[currentRow].length; i++) {
        if(progressCopy[currentRow][i]) {
          counter++;
        }
      }

      if(counter == progressCopy[currentRow].length) {
        setCurrentRow(currentRow + 1);
        if (word == progressCopy[currentRow].join('')) {
          setVerdict('winner');
        }
        return;
      }
    } else if (character == 'Backspace') {
      for(let i=progressCopy[currentRow].length-1; i>=0; i--) {
        if(progressCopy[currentRow][i]) {
          progressCopy[currentRow][i] = null
          break;
        }
      }
    } else {
      for(let i=0; i<progressCopy[currentRow].length; i++) {
        if(!progressCopy[currentRow][i]) {
          progressCopy[currentRow][i] = character
          break;
      }
    }
  }

    setProgress(progressCopy)
  }

  return(
    <ChakraProvider>
      <Center>
        {
          verdict
          ?
            showVerdict
              ?
            <VerdictBox verdict={verdict} resetGame={resetGame} handleShowVerdict={handleShowVerdict} />
              :
              null
          :
            null
        }
        <Flex
          minW='300'
          direction='column'
          alignItems='center'
          gap='50'
        >
          <Navbar />
          <Image src={Spheal}
            w='32'
            top='0'
          />
          <GameArea progress={progress} currentRow={currentRow} word={word} />
        </Flex>
      </Center>
    </ChakraProvider>
  )
}

export default App;
