import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Filter from './Filter.js';
import Listings from './Listings.js';
import listingsData from './data/listingsData.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe',
      listingsData,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      swimming_pool: false,
      gym: false,
      garage: false,


    };
    this.change = this.change.bind(this);
  }
  change(event) {
    const name = event.target.name;
    const value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    }, () => {
      console.log(this.state);
    });
  }
  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
