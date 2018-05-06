import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class ListFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterType: 'list',
      filterValue: 'all',
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
   let options = this.props.options;
   options.push({label: "Todos", value: "all"});

   const optionsList = options.map( (option, index) => {
    return <option key={index} value={option.value}>{option.label}</option>
   });

    return (

          <div>

            <select 
              onChange={this.changeFilterValue}
              style={{ width: "100%" }}
              value={this.state.filterValue}
            >
            {optionsList}
            </select>

          </div>
    );
  }
}
ListFilter.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object)
}
export default ListFilter;