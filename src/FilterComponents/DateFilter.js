import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

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

    //Labels
    const allLabel = this.props.gtLabel || "All";
    const gtLabel = this.props.gtLabel || ">=";
    const ltLabel = this.props.gtLabel || "<=";
    const eqLabel = this.props.eqLabel || "=";
    const btwLabel = this.props.btwLabel || "between";
    const styleSelector = this.props.styleSelector ||{ width: "33%" };
    const styleDatePicker1 = this.props.styleDatePicker1 ||{ width: "33%" };
    const styleDatePicker2 = this.props.styleDatePicker2 ||{ width: "33%" };

    return (
          <div>
            <select 
              onChange={this.changeFilterOperator}
              style={styleSelector}
              value={this.state.filterOperator}
            >
              <option value="all">{allLabel}</option>
              <option value="gt">{gtLabel}</option>
              <option value="lt">{ltLabel}</option>
              <option value="eq">{eqLabel}</option>
              <option value="btw">{btwLabel}</option>
            </select>

            <input type="date" value={this.state.filterValue1} style={styleDatePicker1} onChange={this.changeFilterValue1}/>
            <input disabled={this.state.filterOperator!=="btw"} type="date" value={this.state.filterValue2} style={styleDatePicker2} onChange={this.changeFilterValue2}/>
          </div>
    );
  }
}

DateFilter.propTypes = {
    onChange: PropTypes.func
}

export default DateFilter;