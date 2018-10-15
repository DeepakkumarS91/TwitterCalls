import 'bootstrap/dist/css/bootstrap.css';
import './Tweet.css';

import {Card, CardBody, CardText, CardTitle} from 'reactstrap';
import React, { Component } from 'react';

import moment from 'moment';

export class Tweet extends Component {

    render(){
        
        return (
            <div>
                <Card className='card' >
                    <CardBody>
                        <CardTitle className='header'>{this.props.name}</CardTitle>
                        <CardText className='body'> {this.props.text} </CardText>
                        <CardText className='footer'>{moment(this.props.date).format('lll')}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

}