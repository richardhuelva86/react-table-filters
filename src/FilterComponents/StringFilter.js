import React, { Component } from 'react';
import PropTypes from 'prop-types';

class StringFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterType: 'string',
      filterValue: this.props.filterValue || '',
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
    const style = this.props.style || {width: "100%"};
    return (

          <div>
            <input type="text" value={this.state.filterValue} style={style} onChange={this.changeFilterValue}/>
          </div>
    );
  }
}

StringFilter.propTypes = {
    onChange: PropTypes.func
}
export default StringFilter;