import MyOwnReact from '../lib/MyOwnReact'

const root = document.getElementById('root')

function App() {
  const [state, setState] = MyOwnReact.useState(1)
  return <h1 onClick={() => setState((c) => c + 1)}>Count: {state}</h1>
}

MyOwnReact.render(<App />, root)
