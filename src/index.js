import "./scss/styles.scss"
console.log('hi')

console.log(document.body)
window.onload = () => {
  const element = document.createElement('div')
  element.innerHTML='hi'
  document.body.appendChild(element)
}