// Write your code here
import './index.css'

const DestinationItem = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  return (
    <li className="user-card-container">
      <img src={imgUrl} className="image" alt={name} />
      <p className="user-name">{name}</p>
    </li>
  )
}
export default DestinationItem
