import './index.css'

const PasswordItem = props => {
  const profileColors = [
    '#7683cb',
    '#f59e0b',
    '#10b981',
    '#f97316',
    '#14b8a6',
    '#b91c1c',
    '#0ea5e9',
  ]
  const profilePicColor = profileColors(Math.floor(Math.random() * 10 - 4))
  const {record, deletePasswordRecord, showPassword} = props
  const {id, url, name, password} = record
  const passwordPattern = showPassword ? (
    <p className="website-text">{password}</p>
  ) : (
    <img
      className="stars-icon"
      alt="stars"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
    />
  )
  const deleteItem = () => {
    deletePasswordRecord(id)
  }
  return (
    <li className="password-item">
      <div className="circle" style={{background: {profilePicColor}}}>
        {name.charAt(0)}
      </div>
      <div className="details-container">
        <p className="website-text">{url}</p>
        <p className="website-text">{name}</p>
        {passwordPattern}
      </div>
      <button
        className="delete-btn"
        type="button"
        data-testid="delete"
        onClick={deleteItem}
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}
export default PasswordItem
