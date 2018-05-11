Warning: DOC is in process to reviewed
This project consists of adding some customized filters that work with [react-table component](https://github.com/react-tools/react-table)

## Table of Contents

- [Installation](#installation)
- [Example](#example)

#installation
npm install --save react-table-filters

#example

```javascript
import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import DateFilter from './FilterComponents/DateFilter.js';
import NumericFilter from './FilterComponents/NumericFilter.js';
import StringFilter from './FilterComponents/StringFilter.js';
import ListFilter from './FilterComponents/ListFilter.js';



class App extends Component {
  state = {
    data: [{
        name: "Richard",
        visited_countries: "7",
        birthday: "1981-08-17",
        favourite_film: "Avengers: Infinity War"
      }, {
        name: "Rocio",
        visited_countries: "3",
        birthday: "1986-08-01",
        favourite_film: "The Sound of Music"
      }, {
        name: "Marco",
        visited_countries: "18",
        birthday: "02-01-1978",
        favourite_film: "Lord of the Rings"
      }]
  }

  /*Fetch data from backend */
  fetchRemoteData = (state, instance) => {
    console.log(state.filtered);
    //Filters are received as parameter state.filtered . They should be send to backend to 
    //apply them remotely
    //This is where you should fetch data from backend.
    
    //ie. axios json request
    //filtered_fetched_data received

    //Load fake data
    //this.setState({ data: filtered_fetched_data });

  }
  render() {


      const columns = [{
        Header: 'Name',
        accessor: 'name', // String-based value accessors!
        Filter: ({ filter, onChange }) => 
            <StringFilter onChange={onChange}/>
      }, {
        Header: 'Visited countries',
        accessor: 'visited_countries',
        Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!
        Filter: ({ filter, onChange }) => 
            <NumericFilter onChange={onChange}/>
      }, {
        Header: "Birthday",
        accessor: "birthday",
        Filter: ({filter, onChange}) => <DateFilter onChange={onChange}/>,
      }, {
        Header: "Favourite film",
        accessor: "favourite_film",
        Filter: ({filter, onChange}) => <ListFilter onChange={onChange} options={[{value: 'The Sound of Music', label: 'The Sound of Music'}, {value: 'Avengers: Infinity War', label: 'Avengers: Infinity War'}, {value: 'Lord of the Rings' ,label: 'Lord of the Rings' }  ]}/>
      }]
    return (

      <ReactTable
        /* Uncomment next 2 lines for remote operations*/
        /*manual
        onFetchData={this.fetchRemoteData} */
       defaultFilterMethod={(filter, row) => {
         switch(filter.value.filterType){
            case 'numeric':
              switch(filter.value.filterOperator){
                case 'eq':
                  return Number(row[filter.id]) === Number(filter.value.filterValue);
                case 'gt':
                  return Number(row[filter.id]) >= Number(filter.value.filterValue);
                case 'lt':
                  return Number(row[filter.id]) <= Number(filter.value.filterValue);
                default:
                  return true;
              }
            case 'string': {
              if(!filter.value.filterValue) return true;
              return filter.value.filterValue === row[filter.id]
            }
            case 'list': {
              if(filter.value.filterValue === "all") return true;
              return filter.value.filterValue === row[filter.id]
            }
            case 'date': {
              console.log(filter);
              switch(filter.value.filterOperator){
                case 'eq':
                  return String(row[filter.id]) === filter.value.filterValue1;
                case 'gt':
                  return String(row[filter.id]) >= filter.value.filterValue1;
                case 'lt':
                  return String(row[filter.id]) <= filter.value.filterValue1;
                case 'btw':
                  return String(row[filter.id]) >= filter.value.filterValue1 && String(row[filter.id]) <= filter.value.filterValue2;
                default:
                  return true;
              }

            }
            default: return true;
         }
       }
      }
        filterable
        data={this.state.data}
        columns={columns}
      />

    );
  }
}

export default App;
```

