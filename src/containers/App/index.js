import React, { PureComponent, Fragment } from 'react';

// Containers
import Calculator from '../Calculator';
import Admin from '../Admin';

/**
 * App
 */
class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Calculator />
        <Admin />
      </Fragment>
    )
  }
}

export default App;
