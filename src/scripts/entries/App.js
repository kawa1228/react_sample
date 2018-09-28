import React from 'react'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      area01: true,
    }
  }
  render() {
    return (
      <form>
        <label>
          北海道:
          <input
            name="area01"
            type="checkbox"
            checked={this.state.area01}
            onChange={this.handleInputChange} />
        </label>
        <label>
          東京:
          <input
            name="area02"
            type="checkbox"
            checked={this.state.area02}
            onChange={this.handleInputChange} />
        </label>
        <label>
          静岡:
          <input
            name="area03"
            type="checkbox"
            checked={this.state.area03}
            onChange={this.handleInputChange} />
        </label>
        <label>
          沖縄:
          <input
            name="area04"
            type="checkbox"
            checked={this.state.area04}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

