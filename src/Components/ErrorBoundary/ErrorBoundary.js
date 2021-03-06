import React, { Component } from 'react';
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './ErrorBoundary.styles';

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  // catch the error ahead of time, when children got an error
  static getDerivedStateFromError(error) {
    // return new state
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/Q2BAOd2.png" />
          <ErrorImageText>Sorry, this page is not on the map</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
