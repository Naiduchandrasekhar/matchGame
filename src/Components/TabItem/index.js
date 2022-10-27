import './index.css'

const TabItem = props => {
  const {eachItem, onTabClick, isActive} = props
  const {displayText, tabId} = eachItem

  const onClickTab = () => {
    onTabClick(tabId)
  }

  const activeClassName = isActive ? 'tabClassName' : 'normalTabClassName'

  return (
    <li>
      <button
        type="button"
        className={`button ${activeClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
