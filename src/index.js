import MyOwnReact from '../lib/MyOwnReact'

const root = document.getElementById('root')

const jsxContent = (
  <div>
    <h1 className="header">Get Started with my own React!!!</h1>
  </div>
)

MyOwnReact.render(jsxContent, root)
