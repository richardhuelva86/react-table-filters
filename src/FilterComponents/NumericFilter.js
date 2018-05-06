import React, { Component } from 'react';

class NumericFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterType: 'numeric',
      filterOperator: 'all',
      filterValue: '',
    };

    this.changeFilterType = this.changeFilterType.bind(this);
    this.changeFilterValue = this.changeFilterValue.bind(this);
    this.changeFilterOperator = this.changeFilterOperator.bind(this);
  }

  changeFilterType(event) {
    let filterType = event.target.value;
    const newState = {
      ...this.state,
      filterType
    };
    // Update local state
    this.setState(newState);
    // Fire the callback to alert React-Table of the new filter
    this.props.onChange(newState);
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
  changeFilterOperator(event) {
    let filterOperator = event.target.value;
    const newState = {
      ...this.state,
      filterOperator
    };
    // Update local state
    this.setState(newState);
    // Fire the callback to alert React-Table of the new filter
    this.props.onChange(newState);
  }

  render() {
    return (

          <div>

            <select 
              onChange={this.changeFilterOperator}
              style={{ width: "50%" }}
              value={this.state.filterOperator}
            >
              <option value="all">Todos</option>
              <option value=">=">{">="}</option>
              <option value="<=">{"<="}</option>
              <option value="=">{"="}</option>
            </select>

            <input type="number" value={this.state.filterValue} style={{width: "50%"}} onChange={this.changeFilterValue}/>
          </div>
    );
  }
}
export default NumericFilter;