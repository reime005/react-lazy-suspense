import * as React from 'react'

export const JokeList = ({ preDefinedJokes = null }) => {
  const [jokes, setJokes] = React.useState(preDefinedJokes);

  React.useEffect(() => {
    if (Array.isArray(preDefinedJokes) && preDefinedJokes.length) {
      return;
    }

    const doFetch = async () => {
      fetch('https://programming-quotes-api.herokuapp.com/quotes').then(res => {
        res.json().then(_jokes => { setJokes(_jokes) })
      })
    }

    doFetch();

    return () => { };
  }, [preDefinedJokes]);

  if (!Array.isArray(jokes) || !jokes.length) {
    return <p>Loading New Jokes...</p>
  }

  return (
    <ul>
      {
        jokes.map((joke, i) => <li key={i}>{joke && joke.en}</li>)
      }
    </ul>
  )
}

export default JokeList;
