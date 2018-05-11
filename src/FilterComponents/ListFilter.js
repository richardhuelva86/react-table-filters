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
   const allLabel = this.props.allLabel || "all";
   let options = this.props.options;
   options.push({label: allLabel, value: "all"});
   const style = this.props.style || {width: "100%"};

   const optionsList = options.map( (option, index) => {
    return <option key={index} value={option.value}>{option.label}</option>
   });

    return (
          <div>
            <select 
              onChange={this.changeFilterValue}
              style={style}
              value={this.state.filterValue}
            >
            {optionsList}
            </select>
          </div>
    );
  }
}
ListFilter.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func
}
export default ListFilter;