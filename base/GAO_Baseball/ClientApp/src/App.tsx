import React, { Component } from 'react';
import MainLayout from './MainLayout'

export default class App extends Component {
  static displayName = App.name;

  hey: string = 'dog';

  render() {
    return (
      <div>
          <MainLayout />
      </div>
    );
  }
}
