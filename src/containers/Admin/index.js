import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

// Components
import ListOperations from '../../components/ListOperations';
import ListOperation from '../../components/ListOperation';

// Styles
import './styles.css';

/**
 * Admin
 */
class Admin extends PureComponent {
  /**
   * State
   */
  state = {
    displayList: false,
  }

  /**
   * ToggleList
   * 
   * @description
   * Toggle the list
   */
  toggleList = () => {
    const { state: { displayList } } = this;

    this.setState({ displayList: !displayList });
  }

  /**
   * RenderOperations
   */
  renderOperations = (operations) => operations
    .map((operation, index) => <ListOperation key={index} operation={operation} />)

  /**
   * Render
   */
  render() {
    const {
      props: { operations },
      state: { displayList },
      toggleList, renderOperations
    } = this;

    // Display the container only if we have some operations :P
    if (operations.length <= 0) {
      return null;
    }

    return (
      <div className="adminContainer">
        <button
          className="toggleAdminBtn"
          onClick={() => toggleList()}
        >
          List all operations
        </button>

        <ListOperations isOpen={displayList}>
          {renderOperations(operations)}
        </ListOperations>
      </div>
    )
  }
}

const mapStateToProps = ({ operations }) => ({
  operations,
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(Admin);
