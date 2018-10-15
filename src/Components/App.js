import './App.css';

import React, { Component } from 'react';

import SearchBar from '../Components/SearchBar/SearchBar';
import {View} from '../Components/View/View';
import {connect} from 'react-redux';

let mapStateToProps = state => {
  return {
    result : state.resultReducer.result 
  }
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Head">
          <SearchBar />
        </div>
        <div className="Body">
          <View tweet={this.props.result}/>        
        </div>

      </div>
        
    );
  }
}

export default connect(mapStateToProps)(App);