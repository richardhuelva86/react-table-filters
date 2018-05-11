import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumericFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterType: 'numeric',
      filterOperator: 'all',
      filterValue: '',
    };

    this.changeFilterValue = this.changeFilterValue.bind(this);
    this.changeFilterOperator = this.changeFilterOperator.bind(this);
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
    console.log("llamadno");
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

    const allLabel = this.props.gtLabel || "All";
    const gtLabel = this.props.gtLabel || ">=";
    const ltLabel = this.props.gtLabel || "<=";
    const eqLabel = this.props.eqLabel || "=";
    const styleSelector = this.props.styleSelector ||{ width: "50%" };
    const styleValueField = this.props.styleValueField ||{ width: "50%" };
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
            </select>

            <input type="number" value={this.state.filterValue} style={styleValueField} onChange={this.changeFilterValue}/>
          </div>
    );
  }
}

NumericFilter.propTypes = {
    onChange: PropTypes.func
}
export default NumericFilter;