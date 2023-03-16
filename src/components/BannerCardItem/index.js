// Write your code here.
import './index.css'
const Card = props => {
  const {carddetails} = props
  const {headerText, description, className} = carddetails
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p>{description}</p>
      <button>Sgow more</button>
    </li>
  )
}
export default Card
