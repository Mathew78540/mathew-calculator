import React, { PureComponent, Fragment } from 'react';

// Containers
import Calculator from '../Calculator';

/**
 * App
 */
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Calculator />
      </Fragment>
    )
  }
}

export default App;
