import {Component} from 'react'
import './index.css'

class Home extends Component {
  onClickLogout = () => {
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    return (
      <div className="app-container">
        <nav className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <button
            onClick={this.onClickLogout}
            className="logout-btn"
            type="button"
          >
            Logout
          </button>
        </nav>
        <div className="heading-and-card-container">
          <h1 className="main-heading">Your Flexibility, Our Excellence</h1>
          <img
            className="digital-card"
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
            alt="digital card"
          />
        </div>
      </div>
    )
  }
}
export default Home
