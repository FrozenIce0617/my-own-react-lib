import MyOwnReact from '../lib/MyOwnReact'

const root = document.getElementById('root')

function App(props) {
  return <h1>{props.name}</h1>
}

MyOwnReact.render(<App name="My Own React App" />, root)
