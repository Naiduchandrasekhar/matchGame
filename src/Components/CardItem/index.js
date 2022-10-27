import './index.css'

const CardItem = props => {
  const {eachOne, onCardClick} = props
  const {thumbnailUrl, id} = eachOne

  const onClickCard = () => {
    onCardClick(id)
  }

  return (
    <li className="listItem">
      <button type="button" className="button" onClick={onClickCard}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnailImages" />
      </button>
    </li>
  )
}

export default CardItem
