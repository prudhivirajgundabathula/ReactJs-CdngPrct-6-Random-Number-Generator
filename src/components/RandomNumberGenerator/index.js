// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrementRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: newRandomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="random-app-container">
          <h1 className="header">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onIncrementRandomNumber}
          >
            Generate
          </button>
          <p className="number">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
