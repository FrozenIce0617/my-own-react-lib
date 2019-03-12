const createElement = (type, props = {}, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  }
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

const render = (element, container) => {
  const dom =
    element.type == 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type)
  const isProperty = (key) => key !== 'children'
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name]
    })
  element.props.children.forEach((child) => render(child, dom))
  container.appendChild(dom)
}

const MyOwnReact = {
  createElement,
  render,
}

export default MyOwnReact
