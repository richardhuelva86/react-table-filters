import React, { Component } from 'react';

class StringFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterType: 'string',
      filterOperator: '',
      filterValue: '',
    };

    this.changeFilterValue = this.changeFilterValue.bind(this);
  }

  changeFilterValue(event) {
    let filterValue = event.target.value;
    const newState = {
      ...this.state,
      filterValue
    };
    // Update local state
    this.setState(newState);
    // Fire the callback to alert React-Table of the new filter
    this.props.onChange(newState);
  }

  render() {
    return (

          <div>
            <input type="text" value={this.state.filterValue} style={{width: "100%"}} onChange={this.changeFilterValue}/>
          </div>
    );
  }
}
export default StringFilter;