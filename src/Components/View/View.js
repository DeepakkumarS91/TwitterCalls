import './View.css';

import React, { Component } from 'react';

import {Tweet} from '../Tweet/Tweet';

export class View extends Component {

    render(){
        return (
            <div className = 'view' >
                <center>
                    {this.props.tweet.map((tweet,i) => {
                    return  <Tweet key={this.props.tweet[i].id} 
                                text={this.props.tweet[i].text}
                                date = {this.props.tweet[i].created_at}
                                name ={ this.props.tweet[i].user.name}
                                
                                />
                    })
                    }
                 </center>

            </div>
        )
    }

}