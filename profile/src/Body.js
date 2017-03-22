import React, { Component } from 'react';
import MyPic from './MyPic';
import MyText from './MyText';
import MyLinks from './MyLinks';
import './Body.css';

export default class Body extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <MyPic />
        </div>
        <div>
          <MyText />
        </div>
        <div>
          <MyLinks />
        </div>
      </div>
    )
  }
}
