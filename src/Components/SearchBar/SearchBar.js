import './SearchBar.css';

import React, { Component } from 'react';

import {connect} from 'react-redux';
import { searchTweet } from '../../Actions/Actions';

let mapStateToProps = state => {
    console.log(state);
    return {
    isPending : state.resultReducer.isPending,
    result : state.resultReducer.result,
    error : state.resultReducer.error
    }
}


let mapDispatchToProps = (dispatch) => {
  return {
      trumpTweets : () => dispatch (searchTweet('@realDonaldTrump')),
      hillaryTweets : () => dispatch (searchTweet('@HillaryClinton')),
      handleSearch : () => dispatch (searchTweet())
  }
}


class SearchBar extends Component {

    render(){
        return (
            <div className='searchbar'>
            {console.log(this.props.result.length)}
            {(this.props.result.length >0 && ((this.props.result[0].text).includes('@HillaryClinton'))) ?
            <div>
                {this.props.result.length>0 && <h3>You are viewing Hilary Clinton Tweet</h3>}
                <button onClick={this.props.trumpTweets} className='btn btn-primary search' >Click to view Trump recent Tweets</button>
            </div>:
            <div>
                {this.props.result.length>0 && <h3>You are viewing Donald Trump Tweet</h3>}
                <button onClick={this.props.hillaryTweets}  className='btn btn-primary search' >Click to view Hillary recent Tweets</button> 
            </div>
                 
            }

            </div>
        )
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
