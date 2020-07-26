import React from 'react'
import JokeList from './JokeList'

import preDefinedJokes from './preDefinedJokes.json'

const VeryBigJokesList = () => {
  return (
    <JokeList preDefinedJokes={preDefinedJokes} />
  )
}

export default VeryBigJokesList;
