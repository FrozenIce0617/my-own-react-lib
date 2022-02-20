import MyOwnReact from '../lib/MyOwnReact'
require('./style.css')

const DAD_JOKE_BASE_URL = 'https://icanhazdadjoke.com'
const MAX_INDEX = 10

const App = () => {
  const [index, setIndex] = MyOwnReact.useState(0)
  const [jokes, setJokes] = MyOwnReact.useState([])

  const handleEvent = (isNext = true) => {
    const nextIndex = isNext ? index + 1 : index - 1
    setIndex((nextIndex + MAX_INDEX) % MAX_INDEX)
  }

  MyOwnReact.useEffect(() => {
    // fetching joke list using api at first loading...
    fetch(`${DAD_JOKE_BASE_URL}/search`, {
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        setJokes(jsonData.results)
      })
  }, [])

  return (
    <div className="App">
      <div className="content">
        <div className="controls">
          <button onClick={() => handleEvent(false)} className="btn btn-prev">
            Prev
          </button>
          <h2>Joke {index + 1}</h2>
          <button onClick={() => handleEvent()} className="btn btn-next">
            Next
          </button>
        </div>
        <h3 className="joke">{jokes[index]?.joke}</h3>
      </div>
    </div>
  )
}

export default App
