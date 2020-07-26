import React from 'react'

import preDefinedJokes from './preDefinedJokes.json'

const VeryBigJokesList = ({ jokes = preDefinedJokes }) => {
  if (!Array.isArray(jokes)) {
    return <p>No jokes found.</p>
  }

  return (
    <ul>
      {
        jokes.map((joke, i) => <li key={i}>{joke && joke.en}</li>)
      }
    </ul>
  );
}

export default VeryBigJokesList;
