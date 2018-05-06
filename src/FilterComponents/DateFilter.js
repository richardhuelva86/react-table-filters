import React, { Component } from 'react';


class DateFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterType: 'date',
      filterOperator: 'eq',
      filterValue1: '',
      filterValue2: '',
    };

    this.changeFilterValue1 = this.changeFilterValue1.bind(this);
    this.changeFilterValue2 = this.changeFilterValue2.bind(this);
    this.changeFilterOperator = this.changeFilterOperator.bind(this);
  }

  changeFilterValue1(event) {
    let filterValue1 = event.target.value;
    const newState = {
      ...this.state,
      filterValue1
    };
    // Update local state
    this.setState(newState);
    // Fire the callback to alert React-Table of the new filter
    this.props.onChange(newState);
  }
  changeFilterValue2(event) {
    let filterValue2 = event.target.value;
    const newState = {
      ...this.state,
      filterValue2
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
      filterValue2: "",
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
              style={{ width: "33%" }}
              value={this.state.filterOperator}
            >
              <option value="all">Todos</option>
              <option value="gt">{">="}</option>
              <option value="lt">{"<="}</option>
              <option value="eq">{"="}</option>
              <option value="btw">{"intervalo"}</option>
            </select>

            <input type="date" value={this.state.filterValue1} style={{width: "33%"}} onChange={this.changeFilterValue1}/>
            <input disabled={this.state.filterOperator!=="btw"} type="date" value={this.state.filterValue2} style={{width: "33%"}} onChange={this.changeFilterValue2}/>
          </div>
    );
  }
}


export default DateFilter;