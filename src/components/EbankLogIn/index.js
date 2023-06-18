import {Component} from 'react'
import './index.css'

class EbankLogIn extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-card">
          <img
            className="login-image"
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <form className="form-container">
            <h1>Welcome Back</h1>
            <div className="input-container">
              <label className="label-text" htmlFor="userId">
                User ID
              </label>
              <br />
              <input
                className="input-field"
                placeholder="Enter User ID"
                type="text"
                id="userId"
              />
            </div>
            <div className="input-container">
              <label className="label-text" htmlFor="userId">
                PIN
              </label>
              <br />
              <input
                className="input-field"
                placeholder="Enter PIN"
                type="text"
                id="userId"
              />
            </div>
            <button className="login-button" type="button">
              Login
            </button>
            {/* <p className="error-message">ganesh</p> */}
          </form>
        </div>
      </div>
    )
  }
}

export default EbankLogIn
