import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      area01: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
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
        <br />
        {/* <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label> */}
      </form>
    );
  }
}

