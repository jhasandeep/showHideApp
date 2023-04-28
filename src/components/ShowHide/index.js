// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  onFirstName = () => {
    this.setState(prevState =>
      prevState.isFirst === true ? {isFirst: false} : {isFirst: true},
    )
  }

  onLastName = () => {
    this.setState(prevState =>
      prevState.isLast === true ? {isLast: false} : {isLast: true},
    )
  }

  render() {
    const {isFirst} = this.state
    const {isLast} = this.state

    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <button type="button" onClick={this.onFirstName}>
          Show/Hide Firstname
        </button>
        <div className="container">{isFirst ? <p>Joe</p> : null}</div>
        <button type="button" onClick={this.onLastName}>
          Show/Hide Lastname
        </button>
        <div className="container">{isLast ? <p>Jonas</p> : null}</div>
      </div>
    )
  }
}

export default ShowHide
