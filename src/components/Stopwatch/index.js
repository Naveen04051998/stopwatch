// Write your code here
import {Component} from 'react'

import './index.css'

export default class Stopwatch extends Component {
  state = {time: 0, isActive: false}

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const {isActive} = this.state
      if (isActive) {
        this.setState(prevState => ({
          time: prevState.time + 1,
        }))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onStart = () => {
    this.setState({isActive: true})
  }

  onStop = () => {
    this.setState({isActive: false})
  }

  onReset = () => {
    this.setState({time: 0, isActive: false})
  }

  formatTime = time => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${minutesStr}:${secondsStr}`
  }

  render() {
    const {time} = this.state

    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="watch-container">
          <p>timer</p>
          <h1>{this.formatTime(time)}</h1>
          <div className="button-container">
            <button className="button-start" onClick={this.onStart}>
              start
            </button>
            <button className="button-stop" onClick={this.onStop}>
              Stop
            </button>
            <button className="button-pause" onClick={this.onReset}>
              Reset
            </button>
          </div>
        </div>

        <img
          src="https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png"
          alt="stopwatch"
        />
      </div>
    )
  }
}
