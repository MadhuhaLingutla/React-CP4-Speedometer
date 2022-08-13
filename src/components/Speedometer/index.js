// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    this.setState(currentstate => {
      let newSpeed = currentstate.speed
      if (currentstate.speed < 200) {
        newSpeed = currentstate.speed + 10
      }
      return {speed: newSpeed}
    })
  }

  decreasespeed = () => {
    this.setState(currentstate => {
      let newSpeed = currentstate.speed
      if (currentstate.speed > 0) {
        newSpeed = currentstate.speed - 10
      }
      return {speed: newSpeed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="Speedometer"
        />
        <h1 className="speed-statement">
          Speed is <span>{speed}</span>mph
        </h1>
        <p className="instruction">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button accelerate-btn"
            onClick={this.increaseSpeed}
          >
            Accelerate
          </button>
          <button className="button brake-btn" onClick={this.decreasespeed}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
