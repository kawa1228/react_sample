import React from 'react'
import axios from 'axios'
import Data from './Data.jsx'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      flag: false,
      check: [{
        id: 1,
        state: false
      }]
    }
  }
  componentWillMount() {
    this.getData()
  }
  getData() {
    const data = [
      { "id": 1, "area": "Hokkaido", "value": 3000 },
      { "id": 2, "area": "Tokyo", "value": 4000 },
      { "id": 3, "area": "Shizuoka", "value": 2500 },
      { "id": 4, "area": "Okinawa", "value": 2000 }
    ]

    this.setState({
      tasks: data
    })
    //axios.get('https://api.myjson.com/bins/ukny0').then(res => {
    //  const data = res.data.items
    //  this.setState({
    //    tasks: data
    //  })
    //})
  }

  handleClick(e) {
    console.log(e.target.value)
    // console.log(state.tasks[e.target.value - 1])

    this.setState({
      flag: !this.state.flag
    })
  }
  showResult() {
    if (this.state.flag) {
      return this.state.tasks.map((task) => {
        return <div>{task.area}</div>
      })
    }
  }

  renderChecks() {
    return (
      <div>
        {
          this.state.tasks.map((task) => {
            return (
              <label>
                {task.area}:
                <input
                  name={`area${task.id}`}
                  type="checkbox"
                  value={task.id}
                  onClick={(e) => this.handleClick(e)}
                />
              </label>
            )
          })
        }
      </div>
    )
  }

  render() {
    const hoge = <div>hoge</div>
    return (
      < form >
        {this.state.flag && hoge}
        <Data />
        {this.renderChecks()}
        <p>{this.showResult()}</p>
      </form >
    )
  }
}

