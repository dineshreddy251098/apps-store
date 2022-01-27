import './index.css'

const TabItem = props => {
  const {tabDetails, activeTab, updateTab} = props
  const {tabId, displayText} = tabDetails

  const onClicked = () => {
    updateTab(tabId)
  }

  const isActiveTab = tabId === activeTab ? 'active-tab' : ''
  const isActiveLine = tabId === activeTab ? 'active-line' : ''

  return (
    <li onClick={onClicked} className="tab-container">
      <button className="tab-button" type="button">
        <p className={`tab ${isActiveTab}`}>{displayText}</p>
        <hr className={`line ${isActiveLine}`} />
      </button>
    </li>
  )
}
export default TabItem
